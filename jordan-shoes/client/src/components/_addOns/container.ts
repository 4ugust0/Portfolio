import styled from "styled-components";

export const Container = styled.div<{
  width?: string;
  height?: string;
  pad?: string;
  top?: string;
  left?: string;
  background_color?: string;
  radius?: string;
  text_align?: string;
  display?: string;
  justify_content?: string;
  align_items?: string;
  flex_wrap?: string;
  image?: string;
}>`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justify_content};
  align-items: ${(props) => props.align_items};
  flex-wrap: ${(props) => props.flex_wrap};
  padding: ${(props) => props.pad};
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background_color};
  background-image: ${(props) => props.image};
  border-radius: ${(props) => props.radius};
  text-align: ${(props) => props.text_align};
`;
