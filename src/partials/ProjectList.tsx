import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Pycritic API"
        description="A publically hosted API to get metacritic data for video games. More info on its use can be found in the repo's README file."
        link="https://github.com/Saious119/pycritic-api"
        img={{
          src: '/assets/images/pycritic.png',
          alt: 'Project Pycritic API',
        }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>Python</Tags>
            <Tags color={ColorTags.EMERALD}>API</Tags>
            <Tags color={ColorTags.SKY}>Selenium</Tags>
          </>
        }
      />
      <Project
        name="ShogAI"
        description="A shogi playing AI written in the Go programing language."
        link="https://github.com/Saious119/ShogAI"
        img={{
          src: '/assets/images/shogi.png',
          alt: 'Project ShogAI',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Go</Tags>
            <Tags color={ColorTags.LIME}>Game AI</Tags>
            <Tags color={ColorTags.SKY}>Javascript</Tags>
          </>
        }
      />
      <Project
        name="Manga Tracker"
        description="An ASP.NET Blazor web app written with .NET. It has log in ability 
        both with local accounts and the ability to log in with your google account. 
        The app uses a MongoDB database hosted by Atlas to persist user data. 
        A .NET MAUI version is currently in development."
        link="https://github.com/Saious119/Manga-Tracker-Blazor-Edition"
        img={{
          src: '/assets/images/blazor.png',
          alt: 'Project Manga Tracker',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>.NET 7</Tags>
            <Tags color={ColorTags.EMERALD}>Blazor</Tags>
            <Tags color={ColorTags.YELLOW}>MongoDB</Tags>
          </>
        }
      />
      <Project
        name="Discord Bots"
        description="A collection of discord bots written in javascript, go, and C# created 
        at friend's request to do a variety of jokes and other odd ball functionality."
        link="https://github.com/Saious119/Discord-Bots"
        img={{
          src: '/assets/images/Discord-Logo.png',
          alt: 'Project Discord Bots',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Discord.js</Tags>
            <Tags color={ColorTags.INDIGO}>Discord.NET</Tags>
            <Tags color={ColorTags.ROSE}>Go</Tags>
            <Tags color={ColorTags.BLUE}>Bot</Tags>
            <Tags color={ColorTags.LIME}>Joke</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
