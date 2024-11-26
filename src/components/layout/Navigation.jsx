import styled from "styled-components";
import { NAV_LINKS } from "../../constants/layout";

export default function Navigation() {
  return (
    <Nav>
      <a href="#" className="logo">
        <img
          src="https://static.spartacodingclub.kr/TeamSparta-Inc/scc-frontend/assets/icons/logo-active.png"
          alt="스파르타코딩클럽 로고"
        />
      </a>
      <NavLinks>
        {NAV_LINKS.map((link) => (
          <li key={link.title}>
            <a href={link.href}>
              {link.title}
              {link.badge && <span>{link.badge}</span>}
            </a>
          </li>
        ))}
      </NavLinks>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;

  .logo {
    display: flex;

    img {
      width: 86px;
      height: 100%;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;

  a {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    padding: 8px 10px;
    border-radius: 4px;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--bg-gray-secondary);
    }

    span {
      font-size: 10px;
      padding: 1px 4px;
      border-radius: 4px;
      background: var(--bg-gray-primary);
      color: var(--text-tertiary);
    }
  }
`;
