import styled from "styled-components";

export default function Footer() {
  return <StyledFooter>누구나 큰일 낼 수 있어, 스파르타코딩클럽</StyledFooter>;
}

const StyledFooter = styled.footer`
  background-color: var(--bg-gray-secondary);
  padding: 60px 120px 100px;
  text-align: center;
  color: var(--text-quaternary);
  font-size: 18px;
  font-weight: 600;
`;
