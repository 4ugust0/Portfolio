import styled from "styled-components";

export const Background = styled.section`
  width: 100%;
  height: var(--section-one-height);
  background: linear-gradient(
    88.27deg,
    ${({ theme: { Palette } }) => Palette.background_grad_1} 0%,
    ${({ theme: { Palette } }) => Palette.background_grad_2} 100%
  );
`;
