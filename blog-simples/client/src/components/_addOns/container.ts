import styled from "styled-components";

export const Container = styled.div<{
  width?: string;
  height?: string;
  pad?: string;
  top?: string;
  left?: string;
  background?: string;
  radius?: string;
  text_align?: string
}>`
  padding: ${(props) => props.pad};
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.radius};
  text-align: ${(props) => props.text_align};
`;
