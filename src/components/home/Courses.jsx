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
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  a {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;
    border-radius: 12px;
    border: 1px solid var(--bg-gray-primary);
    background: white;
    box-shadow: 0px 8px 24px 0px rgba(129, 137, 143, 0.12);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateY(-12px);
    }

    h3 {
      margin: 16px 0;
      font-size: 24px;
      font-weight: 600;
    }

    p {
      font-size: 20px;
      font-weight: 600;
      color: var(--text-quaternary);
      white-space: pre-line;
      line-height: 1.3;
    }

    img {
      width: 100%;
      height: 100%;
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
