import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
`;

export const Section = styled.section`
  padding: 100px 0;
  background-color: ${(props) =>
    props.$bgGray ? "var(--bg-gray-secondary)" : "white"};
`;
