import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from "astro-boilerplate-components";

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
        name="Marvel Comic Tracker for TRMNL"
        description="A Plugin for the TRMNL e-ink device that tracks Marvel Comics series by using the official Marvel Comic API."
        link="https://github.com/Saious119/trmnl-marvel-comic-tracker"
        img={{
          src: "/assets/images/trmnlAndMarvel.png",
          alt: "Project Marvel Comic Tracker for TRMNL",
        }}
        category={
          <>
            <Tags color={ColorTags.RED}>Ruby</Tags>
            <Tags color={ColorTags.SKY}>Javascript</Tags>
            <Tags color={ColorTags.LIME}>Liquid</Tags>
            <Tags color={ColorTags.ORANGE}>TRMNL</Tags>
            <Tags color={ColorTags.ROSE}>Marvel API</Tags>
          </>
        }
      />
      <Project
        name="Pycritic API"
        description="A publically hosted API to get metacritic data for video games. More info on its use can be found in the repo's README file."
        link="https://github.com/Saious119/pycritic-api"
        img={{
          src: "/assets/images/pycritic.png",
          alt: "Project Pycritic API",
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
          src: "/assets/images/shogi.png",
          alt: "Project ShogAI",
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
        description="An ASP.NET Blazor web app. It has login ability with your Discord account. 
        The app uses a PostgreSQL database hosted by CockroachDB to persist user data."
        link="https://github.com/Saious119/Manga-Tracker-Blazor-Edition"
        img={{
          src: "/assets/images/blazor.png",
          alt: "Project Manga Tracker",
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>.NET 8</Tags>
            <Tags color={ColorTags.EMERALD}>Blazor</Tags>
            <Tags color={ColorTags.SKY}>Mud Blazor</Tags>
            <Tags color={ColorTags.BLUE}>PostgreSQL</Tags>
            <Tags color={ColorTags.INDIGO}>Discord.NET</Tags>
          </>
        }
      />
      <Project
        name="Discord Bots"
        description="A collection of discord bots written in javascript, go, python, and C# created 
        at friends' request to do a variety of jokes and other odd ball functionality."
        link="https://github.com/Saious119/Discord-Bots"
        img={{
          src: "/assets/images/Discord-Logo.png",
          alt: "Project Discord Bots",
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Discord.js</Tags>
            <Tags color={ColorTags.INDIGO}>Discord.NET</Tags>
            <Tags color={ColorTags.ROSE}>Go</Tags>
            <Tags color={ColorTags.YELLOW}>Python</Tags>
            <Tags color={ColorTags.BLUE}>Bot</Tags>
            <Tags color={ColorTags.LIME}>Joke</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
