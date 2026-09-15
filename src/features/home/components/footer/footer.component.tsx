import { FooterView } from './footer-view.component';

export const Footer = () => {
  return (
    <FooterView
      monogram="JA"
      name="João Almeida"
      role="Software Engineer"
      year={new Date().getFullYear()}
    />
  );
};
