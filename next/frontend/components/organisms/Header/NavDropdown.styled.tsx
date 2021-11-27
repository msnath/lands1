import styled from "styled-components";

const Dropdown = styled.nav`
  position: absolute;
  z-index: 5;
  right: 0rem;
  bottom: -2rem;
  transform: translateY(100%);
  width: 12.5rem;
  background: #1a1a1a;
  padding: 2rem 1.25rem;
  border-radius: 1.25rem;
  overflow: hidden;

  ul {
    display: grid;
    row-gap: 1.5rem;
  }
  li > a {
    color: var(--grey);
  }
  @media (hover: hover) and (pointer: fine) {
    li > a:hover {
      color: var(--white);
    }
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    width: 15rem;
    height: 1.125rem;
    background: var(--blue);
    transform: rotate(-5.71deg);
  }
`;

const S = { Dropdown };

export default S;
