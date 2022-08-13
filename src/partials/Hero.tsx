import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Andy Mahoney</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a computer scientistfrom Upstate New York who really likes .NET!{' '}
          <br></br> I graduated from Clarkson University in 2021 with my
          Bachelors of Science in Computer Science and have been working for UPS
          as a .NET App Developer ever since!
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/andy-mahoney-013833202/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCkbvXH-UG5yapwLEvLs4ehQ">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
