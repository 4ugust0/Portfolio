import styled from "styled-components";

export const MenuText = styled.div<{ color?: string }>`
  width: 100%;
    padding: 0.938rem;
  text-align: center;
  color: ${(props) => props.color};
`;

export const Title = styled.h1<{ weight: string }>`
  font-weight: ${(props) => props.weight}rem;
`;
