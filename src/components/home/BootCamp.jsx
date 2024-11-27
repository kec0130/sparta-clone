import styled from "styled-components";
import { Container, Section } from "../../styles/Container";
import { CAMP_LIST, CAMP_STATS } from "../../constants/home";

export default function BootCamp() {
  return (
    <Section $bgGray>
      <Container>
        <Title>
          <h2>IT 직군 취업은 내일배움캠프</h2>
          <h2>
            4개월 몰입형 부트캠프도
            <br />
            전액 국비지원으로
          </h2>
        </Title>
        <Content>
          <Statistic>
            {CAMP_STATS.map((stat) => (
              <div key={stat.title}>
                <h3>{stat.title}</h3>
                <p>
                  {stat.value}
                  <span>%</span>
                </p>
              </div>
            ))}
          </Statistic>
          <CampList>
            {CAMP_LIST.map((camp) => (
              <li key={camp.title}>
                <a href={camp.link}>
                  <img src={camp.image} alt={camp.title} />
                  <div>
                    <div className="card-header">
                      <h3>{camp.title}</h3>
                      <span>선착순 100명</span>
                    </div>
                    <p>{camp.description}</p>
                    <span>무료</span>
                  </div>
                </a>
              </li>
            ))}
          </CampList>
        </Content>
      </Container>
    </Section>
  );
}

const Title = styled.div`
  margin-bottom: 60px;

  h2:first-child {
    font-size: 20px;
    font-weight: 600;
    color: var(--text-quaternary);
    margin-bottom: 16px;
  }

  h2:last-child {
    font-size: 32px;
    font-weight: 700;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 40px;
`;

const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
  padding: 20px 40px;
  background: var(--bg-gray-primary);
  border-radius: 12px;
  flex-shrink: 0;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-secondary);
    white-space: pre-line;
  }

  p {
    font-size: 32px;
    font-weight: 700;
    color: var(--primary-color);

    span {
      font-size: 24px;
      font-weight: 600;
    }
  }
`;

const CampList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;

  a {
    display: flex;
    gap: 24px;
    background: white;
    padding: 24px;
    border-radius: 12px;
    border: 1px solid var(--bg-gray-primary);
    box-shadow: 0px 8px 24px 0px rgba(129, 137, 143, 0.12);
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateY(-8px);
    }

    img {
      width: 135px;
      height: 135px;
      border-radius: 8px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        font-size: 18px;
        font-weight: 600;
      }

      span {
        font-size: 13px;
        font-weight: 500;
        color: var(--text-tertiary);
        background: var(--bg-gray-primary);
        padding: 3px 6px;
        border-radius: 4px;
      }
    }

    p {
      font-size: 16px;
      font-weight: 400;
      color: var(--text-tertiary);
      margin: 10px 0 16px;
    }

    span {
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-color);
    }
  }
`;
