export type HeroContactVariant = 'primary' | 'secondary';

export type HeroContactIcon = 'email' | 'linkedin' | 'github';

export interface HeroContact {
  label: string;
  href: string;
  icon: HeroContactIcon;
  variant: HeroContactVariant;
  external?: boolean;
}

export interface HeroBackgrounds {
  dark: string;
  light: string;
}
