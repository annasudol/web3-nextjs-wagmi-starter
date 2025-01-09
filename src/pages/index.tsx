import { Card, CardBody } from '@nextui-org/react';
import React from 'react';

import { BalanceUIwrapper } from '@/components/BalanceUIwrapper';
import { FacetForm } from '@/components/form/FacetForm';
import { MainLayout } from '@/components/layout/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center gap-8 px-6 sm:py-12 md:flex-row">
        <Card>
          <CardBody>
            <BalanceUIwrapper>
              <FacetForm />
            </BalanceUIwrapper>
          </CardBody>
        </Card>
      </div>
    </MainLayout>
  );
};

export default HomePage;
