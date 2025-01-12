import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

import { BalanceUIwrapper } from '@/components/BalanceUIwrapper';
import { MintForm } from '@/components/MintForm';
import { useTransactionManager } from '@/providers/TransactionProvider';

import { TransferForm } from './TransferForm';
import { TxAlert } from './TxAlert';

export function MyTabs() {
  const { transaction } = useTransactionManager();

  if (transaction) {
    return (
      <BalanceUIwrapper>
        <TxAlert {...transaction} />
      </BalanceUIwrapper>
    );
  }

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" size="lg">
        <Tab key="mint" title="Mint">
          <Card>
            <CardBody>
              <BalanceUIwrapper>
                <MintForm />
              </BalanceUIwrapper>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="transfer" title="Transfer">
          <Card>
            <CardBody>
              <BalanceUIwrapper>
                <TransferForm />
              </BalanceUIwrapper>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
