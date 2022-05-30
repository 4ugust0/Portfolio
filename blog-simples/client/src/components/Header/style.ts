import styled from "styled-components";

export const Background = styled.section`
  width: 100%;
  height: 15.625rem;
  padding-top: 2.563rem;
  background: linear-gradient(
    88.27deg,
    ${({ theme: { Palette } }) => Palette.background_grad_1} 0%,
    ${({ theme: { Palette } }) => Palette.background_grad_2} 100%
  );
`;

export const Brand = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme: { Palette } }) => Palette.brand};
`;

export const InputFilter = styled.input<{ icon?: string }>`
  width: 100%;
  height: 100%;

  font-size: 1.125rem;
  padding-left: 1.268rem;
  padding-right: 2rem;

  background: transparent;

  border: 0;

  color: #ffffff;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #ffffff;
  }
`;
