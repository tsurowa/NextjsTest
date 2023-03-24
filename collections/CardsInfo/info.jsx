import Image from "next/image";
import { Container, Left, Paragraph, Right, Title } from "./elements";

export const Info = ({ image, title, description, underline }) => {
  return (
    <Container>
      <Left>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </Left>
      <Right>
        <Title underline={underline}>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </Right>
    </Container>
  );
};