import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

import { BalanceUIwrapper } from '@/components/BalanceUIwrapper';
import { FacetForm } from '@/components/form/FacetForm';
import { SwapForm } from '@/components/form/SwapForm';

export default function MyTabs() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" size="lg">
        <Tab key="Starter" title="Swap">
          <Card>
            <CardBody>
              <BalanceUIwrapper>
                <SwapForm />
              </BalanceUIwrapper>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="facet" title="Facet">
          <Card>
            <CardBody>
              <BalanceUIwrapper>
                <FacetForm />
              </BalanceUIwrapper>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
