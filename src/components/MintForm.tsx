import type { FormikErrors } from 'formik';
import { Formik } from 'formik';
import React from 'react';

import { SubmitButton } from '@/components/button/SubmitButton';
import { Loading } from '@/components/Loading';
import { TokenTinput } from '@/components/TokenTinput';
import { useMintMutation } from '@/hooks/mutations/useMintMutation';
import { useReadData } from '@/hooks/useReadData';
import { useTransactionManager } from '@/providers/TransactionProvider';

import { TxAlert } from './TxAlert';

export const MintForm = () => {
  const { token } = useReadData();

  const { mutateAsync: handleMint, isPending } = useMintMutation();
  const { transaction } = useTransactionManager();

  if (transaction) {
    return <TxAlert {...transaction} />;
  }

  if (token.status.isLoading) {
    return <Loading />;
  }

  const getButtonText = (
    values: string,
    errors: FormikErrors<{ value: string }>,
  ) => {
    const tokenSymbol = token.value?.symbol;
    if (tokenSymbol) {
      if (!errors.value) {
        return `Mint ${values} ${tokenSymbol}`;
      }
      return `Mint ... ${tokenSymbol}`;
    }
    return <Loading dots={true} />;
  };

  return (
    <div>
      <Formik
        initialValues={{ value: '0' }}
        validate={(values) => {
          const errors: { value?: string } = {};
          if (!values.value) {
            errors.value = 'Required';
          } else if (Number(values.value) <= 0) {
            errors.value = 'Value must be greater than 0';
          }
          const validValueRegex = /^0$|^[1-9]\d*(\.\d+)?$|^0\.\d+$/;
          if (!validValueRegex.test(values.value)) {
            errors.value = 'Value must be avalid number';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleMint({
            amount: values.value,
          });
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <TokenTinput
              label={`${token.value?.symbol} token`}
              labelPlacement="outside"
              name="value"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.value}
              isInvalid={Boolean(errors.value && touched.value)}
              errorMessage={errors.value}
              disabled={isSubmitting || !token.value?.symbol}
            />

            <SubmitButton
              type="submit"
              isDisabled={isSubmitting || Boolean(errors.value)}
              isLoading={isSubmitting || isPending}
            >
              {getButtonText(values.value, errors)}
            </SubmitButton>
          </form>
        )}
      </Formik>
    </div>
  );
};
