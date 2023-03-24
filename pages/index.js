import { Hero } from "../sections";
import { Main } from '../sections/Main/Main';

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const agencyProps = {
  image: { src: "/img/video.png", alt: "", width: 400, height: 500 },
  data: [
    {
      id: 1,
      image: { src: "/img/next1.png", alt: "", width: 150, height: 150 },
      title: "Brief",
      description:
        "Complete brief writing or simple guidance on what to include, we've got you covered",
    },
    {
      id: 2,
      image: { src: "/img/next2.png", alt: "", width: 150, height: 150 },
      title: "Search",
      description:
        "In depth agency search covering; criteria matching, door knocking and due-dilligence vetting",
    },
    {
      id: 3,
      image: { src: "/img/next3.png", alt: "", width: 150, height: 150 },
      title: "Pitch",
      description:
        "Comprehensive pitch management including comms, diary managment and pitch hosting",
      underline: "true",
    },
  ],
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        {/** Other sections */}
        <Main {...agencyProps} />
      </div>
    </>
  );
}
