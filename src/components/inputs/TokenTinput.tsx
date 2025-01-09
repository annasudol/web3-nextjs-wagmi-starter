import type { InputProps } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import React from 'react';

interface TokenTinputProps extends InputProps {
  max?: string;
  value?: string;
}

export const TokenTinput = ({ value, max, ...props }: TokenTinputProps) => {
  return (
    <div className="text-right">
      <p className="relative top-5 text-xs text-gray-400">Max. {max}</p>
      <Input
        label={value || 'sETH'}
        labelPlacement="outside"
        name="value"
        size="lg"
        {...props}
      />
    </div>
  );
};
