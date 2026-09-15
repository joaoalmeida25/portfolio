export type HeroContactVariant = 'primary' | 'secondary';

export type HeroContactIcon = 'email' | 'document' | 'linkedin' | 'github';

export interface IHeroContact {
  label: string;
  href?: string;
  icon: HeroContactIcon;
  variant: HeroContactVariant;
  external?: boolean;
  download?: boolean;
}

export interface IHeroBackgrounds {
  dark: string;
  light: string;
}
