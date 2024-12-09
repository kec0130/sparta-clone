import styled from "styled-components";
import { Container } from "../../styles/Container";
import { CATEGORIES } from "../../constants/home";

export default function Hero() {
  return (
    <Section>
      <BgGradient>
        <div />
      </BgGradient>
      <Container>
        <Heading>
          <h1>누구나 큰일 낼 수 있어</h1>
          <h1>
            스파르타코딩클럽
            <img src="/logo.svg" alt="스파르타코딩클럽 로고" />
          </h1>
        </Heading>
        <CategoryList>
          {CATEGORIES.map((category) => (
            <li key={category.title}>
              <a href={category.link}>
                {category.badge && <span>{category.badge}</span>}
                <img src={category.image} alt={category.title} />
                <p>{category.title}</p>
              </a>
            </li>
          ))}
        </CategoryList>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  padding-bottom: 100px;
`;

// 배경색 gradient
const BgGradient = styled.div`
  position: absolute;
  z-index: -1;
  top: 0px;
  width: 100%;
  padding-top: 234px;
  background: linear-gradient(
    90deg,
    rgb(255, 241, 244) 0%,
    rgb(255, 246, 248) 100%
  );

  & > div {
    height: 136px;
    background: linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgb(255, 255, 255) 100%
    );
  }
`;

const Heading = styled.div`
  text-align: center;
  padding: 108px 0 88px;
  font-weight: 700;
  font-size: 40px;

  h1:last-child {
    color: var(--primary-color);

    img {
      width: 24px;
      height: 24px;
      margin-left: 4px;
    }
  }
`;

const CategoryList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;

  a {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100px;

    img {
      width: 60px;
      height: 60px;
      border-radius: 12px;
      background: white;
      border: 1px solid rgba(20, 22, 23, 0.08);
      box-shadow: rgba(95, 102, 107, 0.12) 0px 8px 24px 0px;
    }

    p {
      font-size: 16px;
      font-weight: 400;
    }

    span {
      position: absolute;
      top: -9px;
      font-size: 11px;
      padding: 2px 6px;
      border-radius: 6px;
      border: 1px solid var(--primary-color);
      background: white;
      color: var(--primary-color);
      font-weight: 700;
    }
  }
`;
