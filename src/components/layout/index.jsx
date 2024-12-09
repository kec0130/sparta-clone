import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <FloatingButton>
        <img
          src="https://cf.channel.io/pub-file/18016/61781dd2660095eb4df9/group-2439.png"
          alt="문의하기"
        />
      </FloatingButton>
    </>
  );
}

const Main = styled.main`
  padding-top: 102px;
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 100px;
  right: 30px;
  z-index: 100;

  img {
    width: 186px;
    height: 72px;
  }
`;
