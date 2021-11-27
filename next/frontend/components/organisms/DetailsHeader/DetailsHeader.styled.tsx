import { bluebutton, boxshadow, Colors, padding } from "@/styles/app.styled";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: max-content;
  padding-bottom: 2.75rem;
  ${padding.hori};

  overflow: hidden;
`;

const Banner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const BannerShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    0deg,
    #101010 22.92%,
    rgba(16, 16, 16, 0.16) 100%
  );
`;

const Logo = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 1.25rem;
  overflow: hidden;
  margin-top: 2.75rem;
  ${boxshadow}

  & > img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  color: ${Colors.White};
  font-family: Montserrat;
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
  text-align: center;

  margin-top: 1rem;
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 0.5rem;
  column-gap: 4rem;
  margin-top: 0.5rem;

  & > p {
    color: ${Colors.Greyd9d9d9};
    font-family: Montserrat;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2.25rem;
    text-align: center;
  }
`;

const QSRank = styled.span`
  width: max-content;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  & > * + * {
    margin: 0 0 0 0.5rem;
  }

  padding: 0.25rem 0.75rem;
  background: var(--white);
  border-radius: 1.5rem;

  @include boxshadow;

  & > p {
    color: var(--black-light);
    font-family: Montserrat;
    font-size: 0.875rem;
    font-weight: 600;
    text-align: left;
  }
`;

const StatsContainerUniversity = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1.5rem;
  row-gap: 1.5rem;

  margin-top: 2.75rem;
  width: 100%;
  max-width: 32rem;

  @media only screen and (min-width: 23rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 66rem) {
    grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
    max-width: 70rem;
  }
`;

const StatsContainerCourse = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1.5rem;
  row-gap: 1.5rem;

  margin-top: 2.75rem;
  width: 100%;
  max-width: 32rem;

  @media only screen and (min-width: 23rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 66rem) {
    grid-template-columns: 1fr 1fr 1fr 3fr;
    max-width: 70rem;
  }
`;

const StatsUniversity = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  width: 100%;
`;

const StatsCourse = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  width: 100%;

  &:nth-child(3) {
    @media only screen and (min-width: 23rem) {
      grid-column: 1/3;
      padding: 0 25%;
    }
    @media only screen and (min-width: 66rem) {
      grid-column: auto;
      padding: 0;
    }
  }
`;

const StatsTitle = styled.p`
  color: ${Colors.Greyd9d9d9};
  font-family: Mulish;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.125rem;
  text-align: center;
`;

const StatsText = styled.p`
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.125rem;
  text-align: center;

  width: 10rem;
  width: 100%;
  height: 100%;
  background: ${Colors.White};
  padding: 1rem;
  margin-top: 0.5rem;
  border-radius: 0.625rem;
`;

const Scholarship = styled.a`
  align-self: flex-end;
  justify-self: flex-end;
  height: max-content;
  background: ${Colors.Blue};
  border-radius: 0.625rem;
  padding: 0.75rem 2rem;

  color: ${Colors.White};
  font-family: Montserrat;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.875rem;
  text-align: center;

  grid-column: 1/2;
  width: 100%;

  ${bluebutton};

  @media only screen and (min-width: 23rem) {
    grid-column: 1/3;
  }
  @media only screen and (min-width: 66rem) {
    width: auto;
    grid-column: auto;
    margin-left: auto;
  }
`;

const S = {
  Header,
  Banner,
  BannerShadow,
  Logo,
  Title,
  Subtitle,
  QSRank,

  StatsContainerUniversity,
  StatsContainerCourse,
  StatsUniversity,
  StatsCourse,
  StatsTitle,
  StatsText,
  Scholarship,
};

export default S;
