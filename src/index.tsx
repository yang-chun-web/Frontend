import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import Reset from "./styles/reset";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <Reset />
      <App />
    </RecoilRoot>
  </QueryClientProvider>
);
