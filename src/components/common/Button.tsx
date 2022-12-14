import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const btnStyle = css`
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #7a7a7ad2;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1.3rem;
  color: #ffffff;
  outline: none;
  cursor: pointer;

  background-color: #161616da;
  &:hover {
    background-color: #f1f1f1df;
    color: #000000dd;
  }
`;

const StyledLink = styled(Link)`
  ${btnStyle}
`;

const Button = (links: any) => {
  return <StyledLink {...links} />;
};

export default Button;
