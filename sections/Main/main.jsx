import { AgencyInfo } from '../../collections/Info/info';
import { Container, Heading, Subheading, InfoContainer, LeftInfo, RightInfo } from './elements';
import Image from 'next/image';

export const Agency = ({ image, data, ...props }) => {
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
              <AgencyInfo
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