import { css } from "styled-components";

const mediaStyle = css`
  width: 1024px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export default mediaStyle;
