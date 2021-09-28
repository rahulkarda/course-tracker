import { useState, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Redirect } from "react-router-dom";
import ButtonDiv from "./components/styled/ButtonDiv";
import Button from "./components/styled/Button";
import InputDiv from "./components/styled/InputDiv";
import Input from "./components/styled/Input";
import InputLabel from "./components/styled/InputLabel";
import Form from "./components/styled/Form";
import FormHeader from "./components/styled/FormHeader";
import axios from "axios";

const Login = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [userObj, setUserObj] = useState({
    email: "",
    password: "",
  });

  function updateUser(e) {
    const { name, value } = e.target;
    setUserObj({
      ...userObj,
      [name]: value,
    });
  }

  const login = async (e) => {
    e.preventDefault();

    // make call to api/auth/login endpoint and send user object
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      userObj
    );

    // use data returned from the call to set global context with dispatch
    dispatch(res.data);
  };
  if (user.refreshtoken) {
    return <Redirect to="/createPost" />;
  }
  return (
    <Form padding="2rem 18% 5rem">
      <FormHeader>
        <h2>Login</h2>
      </FormHeader>

      <InputDiv>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => updateUser(e)}
        />
      </InputDiv>

      <InputDiv>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => updateUser(e)}
        />
      </InputDiv>

      <ButtonDiv>
        <Button fontSize="1.5rem" size="11rem" onClick={login}>
          Login
        </Button>
      </ButtonDiv>
    </Form>
  );
};

export default Login;
