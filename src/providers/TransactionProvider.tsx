import type { ReactNode } from 'react';
import { createContext, useCallback, useContext, useState } from 'react';
import type { Hash } from 'viem';

import type {
  ButtonLeftIcon,
  ButtonRightIcon,
} from '@/components/button/MyButton';
import type { TxAlertProps } from '@/components/TxAlert';

export type TransactionStatus = 'pending' | 'success' | 'failed';

export type TransactionMessage = {
  hash: Hash;
  state: TransactionStatus;
  title?: string;
  description?: string;
  button?: {
    text: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    iconRight?: ButtonRightIcon;
    iconLeft?: ButtonLeftIcon;
  };
};

interface TransactionContextType {
  transaction: TransactionMessage | null;
  addTransaction: (tx: TransactionMessage | null) => void;
  updateTransaction: (tx: Partial<TxAlertProps>) => void;
  clearTransaction: () => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(
  undefined,
);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transaction, setTransaction] = useState<TransactionMessage | null>(
    null,
  );

  const addTransaction = useCallback((tx: TransactionMessage | null) => {
    setTransaction(tx);
  }, []);

  const updateTransaction = useCallback((tx: Partial<TxAlertProps>) => {
    setTransaction((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        ...tx,
      };
    });
  }, []);

  const clearTransaction = useCallback(() => {
    setTransaction(null);
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transaction,
        addTransaction,
        updateTransaction,
        clearTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionManager = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransaction must be used within a TransactionProvider');
  }
  return context;
};
