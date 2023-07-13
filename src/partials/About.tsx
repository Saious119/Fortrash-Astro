import {
    GradientText,
    HeroAvatar,
    HeroSocial,
    Section,
  } from 'astro-boilerplate-components';

const About = () => (
    <Section>
    <HeroAvatar
        title={<>
            Why <GradientText>Fortrash.com?</GradientText>
        </>}
        description={<>
            So you must be asking yourself "Why is his site named 'fortrash.com'?" Well there's a story to that. One of my favorite programming languages is Fortran, specifically Fortran 77.
            I know, very outdated, but its fun. While I was looking at domain names a friend and I were debating pros and cons of different languages, I mentioned Fortran 77 jokingly and he said "Fortran? more like Fortrash!".
            It was then that I knew what my website's name must be. 
        </>} avatar={undefined} socialButtons={undefined}  />
  </Section>
);

export { About };