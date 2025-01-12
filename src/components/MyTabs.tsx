import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

import { BalanceUIwrapper } from '@/components/BalanceUIwrapper';
import { MintForm } from '@/components/MintForm';

import { TransferForm } from './TransferForm';

export function MyTabs() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" size="lg">
        <Tab key="bridge" title="Mint">
          <Card>
            <CardBody>
              <BalanceUIwrapper>
                <MintForm />
              </BalanceUIwrapper>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="facet" title="Facet">
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
