import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signup } from "../../api";
import Block from "../../components/common/Block";
import { btnStyle } from "../../components/common/Button";
import Logo from "../../components/common/Logo";
import {
  AuthBlock,
  AuthWrapperStyle,
  AuthTitle,
  AuthInput,
} from "../../components/Auth";

interface UserInfo {
  email: string;
  password: string;
  confirmPassword: string;
}

const Wrapper = styled.div`
  ${AuthWrapperStyle}
  width: 450px;
  height: 620px;
  @media (max-width: 500px) {
    height: 620px;
  }
`;

const SignupForm = styled.form`
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
const Error = styled.span`
  color: #de0000;
  font-weight: bold;
  font-size: 0.8rem;
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
        { message: "⛔ 비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    } else {
      const userInfo = { email: data.email, password: data.password };
      signup(userInfo).then(() => navigate("/login"));
    }
  };

  return (
    <Block>
      <AuthBlock>
        <Wrapper>
          <Logo />
          <SignupForm
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit(onValid)}
          >
            <AuthTitle>&nbsp; SIGNUP</AuthTitle>
            <AuthInput
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9]+$/,
                  message: "❌ 이메일 주소가 올바르지 않습니다.",
                },
              })}
              placeholder="Email"
              autoComplete="off"
            />
            <Error className="validateEmail">{errors?.email?.message}</Error>
            <AuthInput
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{10,}$/,
                  message: "❌ 대소특수문자 포함 10자 이상이어야 합니다.",
                },
              })}
              type="password"
              placeholder="Password"
              autoComplete="off"
            />
            <Error className="validatePassword">
              {errors?.password?.message}
            </Error>
            <AuthInput
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
              placeholder="confirmPassword"
              autoComplete="off"
              type="password"
            />
            <Error className="confirmPassword">
              {errors?.confirmPassword?.message}
            </Error>
            <button>가입하기</button>
          </SignupForm>
        </Wrapper>
      </AuthBlock>
    </Block>
  );
};

export default Signup;
