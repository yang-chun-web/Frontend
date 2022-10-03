import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signup } from "../../api";
import Block from "../../components/common/Block";
import { btnStyle } from "../../components/common/Button";
import Logo from "../../components/common/Logo";

interface UserInfo {
  email: string;
  password: string;
  confirmPassword: string;
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
  height: 620px;
  padding: 1rem;
  border: 1px solid #b4b4b43d;
  box-shadow: 2px 2px 3px #b4b4b4c0;
  background-color: #ffffff;
  overflow-y: auto;

  @media (max-width: 500px) {
    width: 90%;
    height: 620px;
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
    margin-top: 3rem;
    width: 90%;
    justify-content: center;
    font-size: 1.2rem;
    letter-spacing: 5px;
    margin-bottom: 1rem;
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

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<UserInfo>();

  const onValid = (data: UserInfo) => {
    if (data.password !== data.confirmPassword) {
      setError(
        "confirmPassword",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    } else {
      const userInfo = { email: data.email, password: data.password };
      signup(userInfo).then(() => navigate("/login"));
    }
  };

  return (
    <Block>
      <LoginBlock>
        <Wrapper>
          <Logo />
          <LoginForm
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit(onValid)}
          >
            <LoginTitle>&nbsp; SIGNUP</LoginTitle>
            <StyledInput
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9]+$/,
                  message: "이메일 주소가 올바르지 않습니다.",
                },
              })}
              placeholder="Email"
            />
            <span>{errors?.email?.message}</span>
            <StyledInput
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{10,}$/,
                  message: "적합한 비밀번호가 아닙니다.",
                },
              })}
              placeholder="Password"
            />
            <span>{errors?.password?.message}</span>
            <StyledInput
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
              placeholder="confirmPassword"
            />
            <span>{errors.confirmPassword?.message}</span>
            <button>가입하기</button>
          </LoginForm>
        </Wrapper>
      </LoginBlock>
    </Block>
  );
};

export default Signup;
