import type { Address } from 'viem';
import { isAddress } from 'viem';
import { z } from 'zod';

export const ONLY_BOOLEAN = z
  .string()
  .refine((s) => s === 'true' || s === 'false')
  .transform((s) => s === 'true');

export const STRING_NOT_EMPTY = z.string().min(1);

export const ADDRESS = z.string().refine((s): s is Address => isAddress(s), {
  message: 'Input is not a valid address',
});
