import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import Reset from "./styles/reset";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <Reset />
    <App />
  </RecoilRoot>
);
