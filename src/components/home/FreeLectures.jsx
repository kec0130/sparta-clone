import styled from "styled-components";
import { Container } from "../../styles/Container";
import { FREE_LECTURES } from "../../constants/home";

export default function FreeLectures() {
  return (
    <Section>
      <Container>
        <div className="title">
          <h2>처음이라면 무료로 시작해보세요</h2>
          <p>따라만 하면 1시간만에 결과물 완성!</p>
        </div>
        <ul>
          {FREE_LECTURES.map((lecture) => (
            <Lecture key={lecture.title}>
              <a href={lecture.link}>
                <img src={lecture.image} alt={lecture.title} />
                <div className="bottom">
                  <button>
                    <img
                      src="https://static.spartacodingclub.kr/TeamSparta-Inc/scc-frontend/assets/icons/icon_thunder.svg"
                      alt="번개 아이콘"
                    />
                    바로 수강신청
                  </button>
                  <div>
                    <h3>{lecture.title}</h3>
                    <p>{lecture.description}</p>
                  </div>
                  <span>무료</span>
                </div>
              </a>
            </Lecture>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding-bottom: 100px;

  .title {
    text-align: center;
    margin-bottom: 40px;

    h2 {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 6px;
    }

    p {
      font-size: 18px;
      font-weight: 400;
      color: var(--text-tertiary);
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
`;

const Lecture = styled.li`
  a {
    display: flex;
    flex-direction: column;
    gap: 16px;

    > img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2px;
      height: 44px;
      border-radius: 8px;
      border: 1px solid var(--bg-gray-primary);
      font-size: 14px;
      font-weight: 600;
      color: var(--text-secondary);
    }

    h3 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 6px;

      + p {
        font-size: 16px;
        font-weight: 400;
        color: var(--text-tertiary);
      }
    }

    span {
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-color);
    }
  }
`;
