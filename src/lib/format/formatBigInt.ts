import { formatUnits, parseUnits } from 'viem';

export function formatBigInt(value: bigint, decimals: number): string {
  return formatUnits(value, decimals);
}

export function pareseToBigInt(value: string, decimals: number): bigint {
  return parseUnits(value, decimals);
}
