import styled from "styled-components";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      {/* Footer */}
    </>
  );
}

const Main = styled.main`
  padding-top: 102px;
`;
