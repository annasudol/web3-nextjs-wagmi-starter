import { Formik } from 'formik';
import React from 'react';
import type { Address } from 'viem';
import { isAddress } from 'viem';

import { SubmitButton } from '@/components/button/SubmitButton';
import { Loading } from '@/components/Loading';
import { TokenTinput } from '@/components/TokenTinput';
import { useTransferMutation } from '@/hooks/mutations/useTransferMutation';
import { useReadData } from '@/hooks/useReadData';

export const TransferForm = () => {
  const { balance, token } = useReadData();

  const { mutateAsync: handleTransfer, isPending } = useTransferMutation();

  if (token.status.isLoading) {
    return <Loading />;
  }

  if (token.status.isError) {
    return <div>Failed to load token</div>;
  }

  return (
    <div>
      <Formik
        initialValues={{ amount: '0', address: '' }}
        validate={(values) => {
          const errors: { amount?: string; address?: string } = {};
          /*
            Amount validation
          */
          if (!values.amount) {
            errors.amount = 'Amount is required';
          }
          if (Number(values.amount) > Number(balance.value?.int)) {
            errors.amount = 'Value cannot be higher than max value';
          }
          if (Number(values.amount) <= 0) {
            errors.amount = 'Value must be greater than 0';
          }
          const validValueRegex = /^0$|^[1-9]\d*(\.\d+)?$|^0\.\d+$/;

          if (!validValueRegex.test(values.amount)) {
            errors.amount = 'Value must be avalid number';
          }
          /*
            Address validation
          */
          if (!values.address) {
            errors.address = 'Address is required';
          }
          if (!values.address) {
            errors.address = 'Address is required';
          }
          if (!isAddress(values.address)) {
            errors.address = 'Invalid address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log('values', values);
          handleTransfer({
            amount: values.amount,
            address: values.address as Address,
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
              name="address"
              label="to"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              isInvalid={Boolean(errors.address && touched.address)}
              errorMessage={errors.address}
              disabled={
                isSubmitting ||
                !token.value?.symbol ||
                !balance.value ||
                balance.value?.int === '0'
              }
            />
            <TokenTinput
              label={`${token.value?.symbol} token`}
              name="amount"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.amount}
              isInvalid={Boolean(errors.amount && touched.amount)}
              errorMessage={errors.amount}
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
              isDisabled={isSubmitting}
              isLoading={isSubmitting || isPending}
            >
              {`Transfter ${token.value?.symbol}`}
            </SubmitButton>
          </form>
        )}
      </Formik>
    </div>
  );
};
