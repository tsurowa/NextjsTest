import styled from "styled-components";
import { mobile } from '../../responsive';
import { SectionContainer, SectionBigHeading, SectionSubheading } from '~/components';

export const Container = styled(({ ...props }) => (<SectionContainer {...props} />
  ))`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    width: 100%;
    height: 100%;
  `;
  
export const Heading = styled((props) => <SectionBigHeading {...props} />)`
    margin: 0;
    color: black;
  `;
  
export const Subheading = styled((props) => <SectionSubheading {...props} />)`
    margin: 1.563rem 0 5rem;
  `;
  
export const InfoContainer = styled(({ ...props }) => <div {...props} />)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5rem;
    margin-bottom: 5rem;
    ${mobile({ flexDirection: "column", margin: "0 0" })}
  `;
  
export const LeftInfo = styled(({ ...props }) => <div {...props} />)`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
export const RightInfo = styled(({ ...props }) => <div {...props} />)`
    display: flex;
    flex-direction: column;
    width: 50%;
    ${mobile({ margin: "5rem auto" })}
  `;