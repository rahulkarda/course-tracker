import styled from "styled-components";
const AuthForm = styled.form.attrs((props) => ({
  padding: props.padding || "3rem",
  height: props.height || "100%",
}))`
  box-shadow: 0 0 35px rgba(140, 152, 164, 0.125);
  border-radius: 0.25rem;
  height: ${(props) => props.height};
  width: 50%;
  background-color: ${(props) => props.theme.color.light};
  padding: ${(props) => props.padding};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  @media (max-width: 900px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    padding: 1.5rem;
    width: 90%;
  }
`;
export default AuthForm;
