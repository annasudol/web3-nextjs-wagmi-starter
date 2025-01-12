import { defineConfig, loadEnv } from '@wagmi/cli';
import { etherscan, foundry, react } from '@wagmi/cli/plugins';
import type { Address } from 'viem';
import { sepolia } from 'viem/chains';

import { CONTRACT } from '@/abi/contract';

const specialCasesUsed: Set<string> = new Set();
let id = 0;
export default defineConfig(() => {
  const env = loadEnv({
    mode: process.env.NODE_ENV,
    envDir: process.cwd(),
  });
  return {
    out: 'src/config/wagmi-cli/wagmiGenerated.ts',
    abi: CONTRACT as any,
    plugins: [
      etherscan({
        apiKey: env.NEXT_PUBLIC_ETHERSCAN_API_KEY as string,
        chainId: sepolia.id,
        contracts: [
          {
            name: 'Ens',
            address: env.NEXT_PUBLIC_CONTRACT_SEPOLIA_ADDRESS as Address,
          },
        ],
      }),
      react({
        getHookName({ contractName, itemName, type }) {
          const name = `${contractName}${itemName ?? ''}${type}`;

          if (specialCasesUsed.has(name)) {
            id += 1;
            return `use${name}${id}`;
          }
          specialCasesUsed.add(name);

          return `use${name}`;
        },
      }),
      foundry({
        forge: {
          build: false,
          clean: false,
          rebuild: false,
        },
      }),
    ],
  };
});
