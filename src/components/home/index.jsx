import styled from "styled-components";
import Hero from "./Hero";
import Banners from "./Banners";
import FreeLectures from "./FreeLectures";
import Courses from "./Courses";
import BootCamp from "./BootCamp";

export default function Home() {
  return (
    <>
      <Hero />
      <Banners />
      <FreeLectures />
      <Courses />
      <BootCamp />
      <Bottom>누구나 큰일 낼 수 있어, 스파르타코딩클럽</Bottom>
    </>
  );
}

const Bottom = styled.div`
  background-color: var(--bg-gray-secondary);
  padding: 60px 120px 100px;
  color: var(--text-quaternary);
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;
