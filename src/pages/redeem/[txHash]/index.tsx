import { Card, CardHeader } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

import { BalanceUIwrapper } from '@/components/BalanceUIwrapper';
import { RedeemForm } from '@/components/form/RedeemForm';
import { MainLayout } from '@/components/layout/MainLayout';

const HomePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <MainLayout>
      <Card className="mx-auto max-w-md">
        <CardHeader className="flex justify-center">
          <h4 className="text-xl">Redeem token</h4>
        </CardHeader>

        {isClient && (
          <BalanceUIwrapper>
            <div className="flex flex-col items-center justify-center gap-8 px-6 sm:py-12 md:flex-row">
              <RedeemForm />
            </div>
          </BalanceUIwrapper>
        )}
      </Card>
    </MainLayout>
  );
};

export default HomePage;
