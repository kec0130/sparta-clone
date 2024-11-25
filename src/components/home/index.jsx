import styled from "styled-components";
import Hero from "./Hero";
import Banners from "./Banners";
import FreeLectures from "./FreeLectures";

export default function Home() {
  return (
    <MainContainer>
      <Hero />
      <Banners />
      <FreeLectures />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
