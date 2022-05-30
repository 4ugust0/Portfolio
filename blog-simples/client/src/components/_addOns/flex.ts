import styled from "styled-components";

export const ContainerFlex = styled.div<{
  width?: string;
  height?: string;
  pad?: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  flex_direction?: string;
  flex_wrap?: string;
  align_items?: string;
  align_content?: string;
  justify_content?: string;
  background_color?: string;
  radius?: string;
  shadow?: string;
}>`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.pad};
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
  margin-right: ${(props) => props.right};
  margin-bottom: ${(props) => props.bottom};
  flex-direction: ${(props) => props.flex_direction};
  flex-wrap: ${(props) => props.flex_wrap};
  align-items: ${(props) => props.align_items};
  align-content: ${(props) => props.align_content};
  justify-content: ${(props) => props.justify_content};
  background-color: ${(props) => props.background_color};
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};
`;
