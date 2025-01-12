import type { FormikErrors } from 'formik';
import { Formik } from 'formik';
import React from 'react';
import { useAccount } from 'wagmi';

import { SubmitButton } from '@/components/button/SubmitButton';
import { Loading } from '@/components/Loading';
import { TokenTinput } from '@/components/TokenTinput';
import { useTransferMutation } from '@/hooks/mutations/useTransferMutation';
import { useReadData } from '@/hooks/useReadData';
import { useTransactionManager } from '@/providers/TransactionProvider';

import { TxAlert } from './TxAlert';

export const TransferForm = () => {
  const { balance, token } = useReadData();
  const { chain } = useAccount();

  const { mutateAsync: handleTransfer, isPending } = useTransferMutation();
  const { transaction } = useTransactionManager();

  if (transaction) {
    return (
      <>
        <TxAlert {...transaction} />
      </>
    );
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
      if (balance.value?.int === '0') {
        return `Not enough ${tokenSymbol} balance`;
      }
      if (!errors.value) {
        return `Swap ${values} ${tokenSymbol}`;
      }
      return `Swap ... ${tokenSymbol}`;
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
          } else if (Number(values.value) > Number(balance.value?.int)) {
            errors.value = 'Value cannot be higher than max value';
          }
          if (Number(values.value) <= 0) {
            errors.value = 'Value must be greater than 0';
          }
          const validValueRegex = /^0$|^[1-9]\d*(\.\d+)?$|^0\.\d+$/;
          if (!validValueRegex.test(values.value)) {
            errors.value = 'Value must be avalid number';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleTransfer({
              amount: values.value,
            });
            setSubmitting(false);
          }, 4);
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
            {chain?.id}
            <TokenTinput
              label={token.value?.symbol || 'sETH'}
              labelPlacement="outside"
              name="value"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.value}
              isInvalid={Boolean(errors.value && touched.value)}
              errorMessage={errors.value}
              disabled={
                isSubmitting ||
                !token.value?.symbol ||
                !balance.value ||
                balance.value?.int === '0'
              }
              max={balance.value?.int}
            />

            <SubmitButton
              type="submit"
              isDisabled={
                isSubmitting ||
                Boolean(errors.value) ||
                balance.value?.int === '0'
              }
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
