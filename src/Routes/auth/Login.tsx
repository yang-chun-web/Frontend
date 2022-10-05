import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { login } from "../../api";
import { access } from "../../atom";

import styled from "styled-components";
import Block from "../../components/common/Block";
import Logo from "../../components/common/Logo";
import { btnStyle } from "../../components/common/Button";
import {
  AuthBlock,
  AuthWrapperStyle,
  AuthTitle,
  AuthInput,
} from "../../components/Auth";

interface LoginInfo {
  email: string;
  password: string;
}

const Wrapper = styled.div`
  ${AuthWrapperStyle}
  width: 450px;
  height: 580px;
  @media (max-width: 500px) {
    height: 580px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 80%;
  width: 80%;
  button {
    ${btnStyle}
    margin-top: 1.5rem;
    width: 90%;
    justify-content: center;
    font-size: 1.2rem;
    letter-spacing: 5px;
  }
`;

const SignupLink = styled(Link)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 3.1rem;
  font-weight: bold;
  background-color: #d9d9d9;
  border-radius: 10px;
  padding: 10px;
  span {
    padding-bottom: 3px;
  }
  &:hover {
    color: #414141c1;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const active = useSetRecoilState(access);
  const { register, handleSubmit } = useForm<LoginInfo>();
  const onValid = (data: LoginInfo) => {
    login(data)
      .then(() => {
        active(() => true);
        navigate("/");
      })
      .catch(() => navigate("/login"));
  };
  return (
    <Block>
      <AuthBlock>
        <Wrapper>
          <Logo />
          <LoginForm onSubmit={handleSubmit(onValid)}>
            <AuthTitle>&nbsp; LOG IN </AuthTitle>
            <AuthInput
              {...register("email", { required: "Email is Required" })}
              placeholder="email"
              autoComplete="on"
            />
            <AuthInput
              {...register("password", { required: "Password is Required" })}
              placeholder="password"
              autoComplete="on"
            />
            <button>로그인</button>
            <SignupLink to={"/signup"}>
              <span>회원가입 &rarr;</span>
            </SignupLink>
          </LoginForm>
        </Wrapper>
      </AuthBlock>
    </Block>
  );
};

export default Login;
