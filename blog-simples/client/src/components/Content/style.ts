import styled from "styled-components";

export const Date = styled.h3`
  color: ${({ theme: { Palette } }) => Palette.text};
  font-size: 1rem;
`;

export const Title = styled.h1 `
    color: ${({theme: {Palette}}) => Palette.title};
    font-size: 1.625rem;
    line-height: 2.031;

`

export const Text = styled.p `

    font-size: 1.125rem;
    line-height: 2rem;
    color: ${({ theme: { Palette } }) => Palette.text};

`