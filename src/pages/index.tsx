import React, { useEffect, useState } from 'react';

import { FacetForm } from '@/components/FacetForm';
import { MainLayout } from '@/components/MainLayout';
import { TokenCard } from '@/components/TokenCard';

const HomePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <MainLayout>
      {isClient && (
        <div className="flex flex-col items-center justify-center gap-8 px-6 sm:py-12 md:flex-row">
          <TokenCard>
            <FacetForm />
          </TokenCard>
        </div>
      )}
    </MainLayout>
  );
};

export default HomePage;
