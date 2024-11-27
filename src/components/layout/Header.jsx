import styled from "styled-components";
import { ChevronDown } from "lucide-react";
import { Container } from "../../styles/Container";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTop>
        <Container>
          <div className="right">
            <a href="#">고객센터</a>
            <div className="divider" />
            <a href="#">
              기업 서비스
              <ChevronDown size={16} />
            </a>
          </div>
        </Container>
      </HeaderTop>
      <HeaderBottom>
        <Container>
          <Navigation />
          <LoginButton>로그인</LoginButton>
        </Container>
      </HeaderBottom>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0px;
  z-index: 100;
  width: 100%;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 42px;
  border-bottom: 1px solid var(--bg-gray-primary);
  background-color: white;

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--text-tertiary);
    font-size: 14px;
    font-weight: 400;
  }

  .divider {
    width: 1px;
    height: 14px;
    background-color: var(--bg-gray-primary);
  }
`;

const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid var(--bg-gray-primary);
  background-color: white;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const LoginButton = styled.button`
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  color: var(--primary-color);
  font-size: 13px;
  padding: 9px 12px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
