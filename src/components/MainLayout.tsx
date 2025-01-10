import { NextSeo } from 'next-seo';
import type { PropsWithChildren } from 'react';
import React from 'react';

import { Footer } from '@/components/Footer';
import { MainHeader } from '@/components/MainHeader';
import { MainNavbar } from '@/components/MainNavbar';
import { siteConfig } from '@/config/siteConfig';

export function MainLayout(props: PropsWithChildren) {
  return (
    <div>
      <NextSeo
        title={siteConfig.name}
        description={siteConfig.description}
        canonical={siteConfig.url}
      />
      <div className="flex min-h-screen flex-col justify-between">
        <MainNavbar />
        <MainHeader />
        <main className="">
          <div className="mx-auto max-w-2xl grow">{props.children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
