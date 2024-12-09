import styled from "styled-components";
import { Plus } from "lucide-react";
import { Container, Section } from "../../styles/Container";
import { COURSES } from "../../constants/home";

export default function Courses() {
  return (
    <Section $bgGray>
      <Container>
        <Title>
          <h2>50만 수강생이 선택한</h2>
          <h2>스파르타코딩클럽</h2>
        </Title>
        <CourseList>
          {COURSES.map((course) => (
            <li key={course.title}>
              <a href={course.link}>
                <div>
                  <Badge $type={course.type}>{course.type}</Badge>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
                <img src={course.image} alt={course.title} />
                <div className="plus">
                  <Plus size={20} />
                </div>
              </a>
            </li>
          ))}
        </CourseList>
      </Container>
    </Section>
  );
}

const Title = styled.div`
  margin-bottom: 60px;

  h2 {
    font-size: 40px;
    font-weight: 700;

    /* 텍스트 컬러 gradient */
    &:last-child {
      background: linear-gradient(
        90deg,
        rgb(252, 138, 151) 0%,
        rgb(232, 52, 78) 42.94%
      );
      background-clip: text;
      color: transparent;
    }
  }
`;

const CourseList = styled.ul`
  display: grid;
  gap: 24px;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));

  a {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;
    background: white;
    border: 1px solid var(--bg-gray-primary);
    border-radius: 12px;
    box-shadow: 0px 8px 24px 0px rgba(129, 137, 143, 0.12);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateY(-12px);
    }

    img {
      width: 100%;
      height: 100%;
    }

    h3 {
      font-size: 24px;
      font-weight: 600;
      margin: 16px 0;
    }

    p {
      font-size: 20px;
      font-weight: 600;
      color: var(--text-quaternary);
      white-space: pre-line; // 개행문자(\n) 줄바꿈
      line-height: 1.3;
    }

    .plus {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 52px;
      height: 52px;
      background: var(--bg-gray-primary);
      border-radius: 50%;
      margin-left: auto;
    }
  }
`;

const Badge = styled.span`
  padding: 4px 6px;
  border-radius: 8px;
  background: ${(props) => (props.$type === "무료" ? "#f5b200" : "#57B094")};
  color: white;
  font-size: 13px;
  font-weight: 500;
`;
