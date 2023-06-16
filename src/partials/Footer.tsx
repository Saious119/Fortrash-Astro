import { FooterCopyright, Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <>Check out the source code of this website <a href="https://github.com/Saious119/Fortrash-Astro">here!</a></>
    <FooterCopyright site_name={AppConfig.site_name} />
  </Section>
);

export { Footer };
