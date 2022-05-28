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

  @media screen and (max-width: 930px) {
    padding: 2.563rem 2%;
  }
`;

export const Brand = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme: { Palette } }) => Palette.brand};
`;

export const InputFilter = styled.input<{ icon?: string }>`
  width: 100%;
  height: 100%;

  font-size: 1.125rem;
  padding-left: 5rem;
  padding-right: 2rem;

  background: rgba(255, 255, 255, 0.2);
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;

  border: 0;
  border-radius: 0.313rem;

  color: #ffffff;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #ffffff;
  }
`;
