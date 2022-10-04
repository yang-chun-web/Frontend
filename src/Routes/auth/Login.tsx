import { login } from "../../api";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Block from "../../components/common/Block";
import styled from "styled-components";
import Logo from "../../components/common/Logo";
import { btnStyle } from "../../components/common/Button";
import { useSetRecoilState } from "recoil";
import { access } from "../../atom";

interface LoginInfo {
  email: string;
  password: string;
}

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  height: 580px;
  padding: 1rem;
  border: 1px solid #b4b4b43d;
  box-shadow: 2px 2px 3px #b4b4b4c0;
  background-color: #ffffff;
  overflow-y: auto;

  @media (max-width: 500px) {
    width: 90%;
    height: 580px;
  }
`;

const LoginTitle = styled.span`
  display: block;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  font-weight: bold;
  border-bottom: 1.5px solid #2e2e2eb2;
  padding-bottom: 8px;
  letter-spacing: 2px;
  width: 100%;
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

const StyledInput = styled.input`
  margin-top: 1.8rem;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid #88888860;
  box-shadow: 1px 1px 2px #7a7a7a7b;
  padding: 10px;
  width: 80%;
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
      <LoginBlock>
        <Wrapper>
          <Logo />
          <LoginForm onSubmit={handleSubmit(onValid)}>
            <LoginTitle>&nbsp; LOG IN </LoginTitle>
            <StyledInput
              {...register("email", { required: "Email is Required" })}
              placeholder="email"
            />
            <StyledInput
              {...register("password", { required: "Password is Required" })}
              placeholder="password"
            />
            <button>로그인</button>
            <SignupLink to={"/signup"}>
              <span>회원가입 &rarr;</span>
            </SignupLink>
          </LoginForm>
        </Wrapper>
      </LoginBlock>
    </Block>
  );
};

export default Login;
