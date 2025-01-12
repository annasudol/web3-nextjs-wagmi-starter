import type { InputProps } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import React from 'react';

import { siteConfig } from '@/config/siteConfig';

interface TokenTinputProps extends InputProps {
  max?: string;
  value?: string;
}

export const TokenTinput = ({ value, max, ...props }: TokenTinputProps) => {
  return (
    <div className="text-right">
      {max && (
        <p className="relative top-5 text-xs text-gray-400">
          Max. {Number(max).toFixed(siteConfig.toFixedString)}
        </p>
      )}
      <Input
        label={value}
        labelPlacement="outside"
        name="value"
        size="lg"
        {...props}
      />
    </div>
  );
};
