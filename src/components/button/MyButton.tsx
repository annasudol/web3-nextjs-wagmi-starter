import type { ButtonProps } from '@nextui-org/button';
import { Button } from '@nextui-org/button';
import { cn } from '@nextui-org/react';
import { FaWallet } from 'react-icons/fa6';
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
  HiOutlineTrash,
  HiX,
} from 'react-icons/hi';
import { TbPigMoney } from 'react-icons/tb';

export enum ButtonRightIcon {
  ArrowRight = 'ArrowRight',
  Trash = 'Trash',
  PigMoney = 'PigMoney',
  Wallet = 'Wallet',
}

export enum ButtonLeftIcon {
  ArrowLeft = 'ArrowLeft',
  Cancel = 'Cancel',
}
const buttonRightIcons: Record<ButtonRightIcon, JSX.Element> = {
  [ButtonRightIcon.ArrowRight]: <HiArrowNarrowRight />,
  [ButtonRightIcon.Trash]: <HiOutlineTrash />,
  [ButtonRightIcon.PigMoney]: <TbPigMoney />,
  [ButtonRightIcon.Wallet]: <FaWallet />,
};

const buttonLeftIcons: Record<ButtonLeftIcon, JSX.Element> = {
  [ButtonLeftIcon.ArrowLeft]: <HiArrowNarrowLeft />,
  [ButtonLeftIcon.Cancel]: <HiX />,
};

interface MyButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
  iconRight?: ButtonRightIcon;
  iconLeft?: ButtonLeftIcon;
}

export const MyButton = ({
  children,
  iconRight,
  iconLeft,
  className,
  isLoading,
  ...props
}: MyButtonProps) => {
  const buttonIconLeft = iconLeft && !isLoading && buttonLeftIcons[iconLeft];
  const buttonIconRight =
    iconRight && !isLoading && buttonRightIcons[iconRight];

  return (
    <Button
      isLoading={isLoading}
      {...props}
      className={cn(
        props.variant === 'solid' &&
          'bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 text-white',
        className,
      )}
    >
      <span className="transition-all duration-300 group-hover:-translate-x-1">
        {' '}
        {buttonIconLeft}
      </span>{' '}
      {children}{' '}
      <span className="transition-all duration-300 group-hover:translate-x-1">
        {buttonIconRight}
      </span>
    </Button>
  );
};
