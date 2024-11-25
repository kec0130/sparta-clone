import { GlobalStyle } from "./styles/GlobalStyle";
import Layout from "./components/layout";
import Home from "./components/home";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
