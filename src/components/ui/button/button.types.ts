import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonAppearanceProps {
  variant?: ButtonVariant;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
}

interface NativeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  disabled?: never;
}

type ButtonSizeProps =
  { size: 'icon'; 'aria-label': string } | { size?: Exclude<ButtonSize, 'icon'> };

export type ButtonProps = ButtonAppearanceProps &
  ButtonSizeProps &
  (NativeButtonProps | AnchorButtonProps);
