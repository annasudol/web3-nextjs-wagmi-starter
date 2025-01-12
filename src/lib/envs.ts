// eslint-disable-next-line import/no-extraneous-dependencies
import { createEnv } from '@t3-oss/env-nextjs';

import { ADDRESS, ONLY_BOOLEAN, STRING_NOT_EMPTY } from '@/lib/zod';

export const envs = createEnv({
  client: {
    // RainbowKit
    NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID: STRING_NOT_EMPTY,

    // Tenderly
    NEXT_PUBLIC_TENDERLY_PROJECT_ID: STRING_NOT_EMPTY,
    NEXT_PUBLIC_TENDERLY_VNETS_ENABLED: ONLY_BOOLEAN,
    NEXT_PUBLIC_ENABLE_TESTNETS: ONLY_BOOLEAN,

    // Contract Addresses
    NEXT_PUBLIC_CONTRACT_SEPOLIA_ADDRESS: ADDRESS,
  },
  runtimeEnv: {
    // RainbowKit
    NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID:
      process.env.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID,

    // Tenderly
    NEXT_PUBLIC_TENDERLY_PROJECT_ID:
      process.env.NEXT_PUBLIC_TENDERLY_PROJECT_ID,
    NEXT_PUBLIC_TENDERLY_VNETS_ENABLED:
      process.env.NEXT_PUBLIC_TENDERLY_VNETS_ENABLED,
    NEXT_PUBLIC_ENABLE_TESTNETS: process.env.NEXT_PUBLIC_ENABLE_TESTNETS,

    // Contract Addresses
    NEXT_PUBLIC_CONTRACT_SEPOLIA_ADDRESS:
      process.env.NEXT_PUBLIC_CONTRACT_SEPOLIA_ADDRESS,
  },
  emptyStringAsUndefined: true,
});
