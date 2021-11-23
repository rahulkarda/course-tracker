import styled from "styled-components";

const Button = styled.button.attrs((props) => ({
  fontSize: props.fontSize || "1.2rem",
  size: props.size || "8rem",
  background: props.background || props.theme.colors.primary,
  hoverBG: props.hoverBG || props.theme.colors.bgHover,
  margin: props.margin || "0",
}))`
  width: ${(props) => props.size};
  background-color: ${(props) => props.background};
  color: ${(props) => props.theme.colors.buttonText};
  font-size: ${(props) => props.fontSize};
  border: none;
  padding: 1rem 0;
  margin: ${(props) => props.margin};
  &:hover {
    background-color: ${(props) => props.hoverBG};
    cursor: pointer;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin: 0 0 1.5rem 0;
  }
`;

export default Button;
