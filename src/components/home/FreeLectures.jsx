import styled from "styled-components";
import { Container, Section } from "../../styles/Container";
import { FREE_LECTURES } from "../../constants/home";

export default function FreeLectures() {
  return (
    <Section>
      <Container>
        <Title>
          <h2>처음이라면 무료로 시작해보세요</h2>
          <p>따라만 하면 1시간만에 결과물 완성!</p>
        </Title>
        <LectureList>
          {FREE_LECTURES.map((lecture) => (
            <li key={lecture.title}>
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
                  <span className="free">무료</span>
                </div>
              </a>
            </li>
          ))}
        </LectureList>
      </Container>
    </Section>
  );
}

const Title = styled.div`
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
`;

const LectureList = styled.ul`
  display: grid;
  gap: 40px 24px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  /* ⬆️ 반응형 그리드 한 줄로 해결 */

  /* ⬇️ column 개수 직접 지정 */
  /* grid-template-columns: repeat(4, 1fr); */

  /* media query로 column 개수 조정 */
  /* @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  } */

  a {
    display: flex;
    flex-direction: column;
    gap: 16px;

    & > img {
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
      border: 1px solid var(--bg-gray-primary);
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      color: var(--text-secondary);
      transition: background 0.2s;

      &:hover {
        background: var(--bg-gray-secondary);
      }
    }

    h3 {
      font-weight: 600;
      margin-bottom: 6px;

      + p {
        font-weight: 400;
        color: var(--text-tertiary);
      }
    }

    .free {
      font-weight: 600;
      color: var(--primary-color);
    }
  }
`;
