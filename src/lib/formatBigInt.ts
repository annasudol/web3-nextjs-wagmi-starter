import { formatUnits } from 'viem';

export function formatBigInt(value: bigint, decimals: number): string {
  return formatUnits(value, decimals);
}
