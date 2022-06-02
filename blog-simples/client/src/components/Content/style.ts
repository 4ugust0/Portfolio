import styled from "styled-components";

export const Date = styled.h3`
  color: ${({ theme: { Palette } }) => Palette.text};
  font-size: 1rem;
`;

export const Title = styled.h1`
  color: ${({ theme: { Palette } }) => Palette.title};
  font-size: 1.625rem;
  line-height: 2.031;
`;

export const Text = styled.p`
  font-size: 1.125rem;
  line-height: 2rem;
  color: ${({ theme: { Palette } }) => Palette.text};
`;

export const ButtonLike = styled.button`
  height: 1.5rem;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export const Loading = styled.h1`
  border-radius: 5px;

  background: linear-gradient(
    88.27deg,
    ${({ theme: { Palette } }) => Palette.background_grad_1} 0%,
    ${({ theme: { Palette } }) => Palette.background_grad_2} 100%
  );

  text-align: center;

  line-height: 7rem;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Button = styled.button`
  margin: 0 auto;
  margin-bottom: 1.5rem;
  width: 200px;
  padding: 1rem;
  border-radius: 3rem;
  border: 0;
  transition: all 0.3s ease;

  font-size: 1.2rem;

  color: white;

  background: linear-gradient(
    88.27deg,
    ${({ theme: { Palette } }) => Palette.background_grad_1} 0%,
    ${({ theme: { Palette } }) => Palette.background_grad_2} 100%
  );

  cursor: pointer;

  &:hover {
    width: 230px;
  }
`;
