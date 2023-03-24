import styled from "styled-components";
import { SectionContainer } from "~/components";
import { mobile } from "../../responsive";

export const Container = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  width: 100%;
  &:nth-child(3) {
    border: 3px solid #92dbea;
    border-radius: 10px;
    color: #92dbea;
  }
  ${mobile({ justifyContent: "center" })}
`;

export const Left = styled(({ ...props }) => <div {...props} />)`
  border-radius: 10px;
  flex: 1;
`;

export const Right = styled(({ ...props }) => <div {...props} />)`
  flex: 4;
`;

export const Title = styled(({ ...props }) => <h3 {...props} />)`
  font-family: Poppins;
  font-size: 1.25rem;
  line-height: 1.875rem;
  font-weight: bold;
  border-bottom: ${(props) =>
    props.underline === "true" && "2px solid #92dbea"};
  width: 55px;
`;

export const Paragraph = styled((props) => <p {...props} />)`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: black;
`;