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
          I'm a computer scientist from Upstate New York who really likes .NET!{' '}
          <br></br> I graduated from Clarkson University in 2021 with my
          Bachelors of Science in Computer Science and have been working for UPS
          as a .NET App Developer ever since! You can find my resume <GradientText><a href='/resume.pdf'>here</a></GradientText>!
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
              src="/assets/images/new-linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCkbvXH-UG5yapwLEvLs4ehQ">
            <HeroSocial
              src="/assets/images/new-youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
          <a href="https://www.github.com/Saious119">
            <HeroSocial
              src="/assets/images/new-github-icon.png"
              alt="Github icon"/>
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
