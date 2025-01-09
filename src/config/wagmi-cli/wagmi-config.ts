import { defineConfig, loadEnv } from '@wagmi/cli';
import { actions, etherscan, react } from '@wagmi/cli/plugins';
import type { Abi, Address } from 'viem';
import { sepolia } from 'viem/chains';

import contractABI from '@/abi/contractABI.json';

export default defineConfig(() => {
  const env = loadEnv({
    mode: process.env.NODE_ENV,
    envDir: process.cwd(),
  });

  const contracts = {
    TTSepolia: env.NEXT_PUBLIC_CONTRACT_SEPOLIA_ADDRESS as Address,
  };

  return {
    out: 'src/lib/wagmi-cli/generated.ts',
    contracts: [
      {
        name: 'TokenTransactions',
        abi: contractABI as Abi,
        getActionName: (
          action: { name: string },
          contract: { name: string },
        ) => {
          return `${contract.name}_${action.name}`;
        },
      },
    ],
    plugins: [
      etherscan({
        apiKey: env.NEXT_PUBLIC_ETHERSCAN_API_KEY as string,
        chainId: sepolia.id,
        contracts: [
          {
            name: 'TT',
            address: {
              [sepolia.id]: contracts.TTSepolia,
            },
          },
        ],
      }),
      actions(),
      react(),
    ],
  };
});
