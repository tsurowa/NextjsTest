import Image from "next/image";
import { Info } from '../../collections/CardsInfo/info';

import {
  Container,
  Heading,
  InfoContainer,
  LeftInfo,
  RightInfo,
  Subheading,
} from "./elements";

export const Main = ({ image, data, ...props }) => {
  return (
    <Container {...props}>
      <Heading>Manage agency selection</Heading>
      <Subheading>Stregthen your onboarding process</Subheading>
      <InfoContainer>
        <LeftInfo>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </LeftInfo>
        <RightInfo>
          {data.map((d) => (
            <Info
              key={d.id}
              image={d.image}
              title={d.title}
              description={d.description}
              underline={d.underline}
            />
          ))}
        </RightInfo>
      </InfoContainer>
    </Container>
  );
};