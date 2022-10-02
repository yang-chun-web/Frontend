import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const btnStyle = css`
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #7a7a7ad2;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.45rem 1rem;
  color: #ffffff;
  outline: none;
  cursor: pointer;

  background-color: #000000dd;
  &:hover {
    background-color: #ffffffc0;
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
