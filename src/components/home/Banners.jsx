import styled from "styled-components";
import { Container } from "../../styles/Container";

export default function Banners() {
  return (
    <Container>
      <Banner>
        <div className="left">
          <div>
            내일배움캠프 합류하고
            <br />
            인턴경험까지 쌓아보장!
          </div>
          <div>더 알아보기 {">"}</div>
        </div>
        <img
          src="https://static.spartacodingclub.kr/media/main_carousel/blyiew57ag3mdvmr.png"
          alt="배너 이미지"
        />
      </Banner>
    </Container>
  );
}

const Banner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 240px;
  border-radius: 12px;
  overflow: hidden;
  background: #ff4759;
  padding: 32px 0px 32px 60px;
  cursor: pointer;

  .left {
    div:first-child {
      font-size: 24px;
      font-weight: 600;
      color: white;
    }

    div:last-child {
      margin-top: 2px;
      font-size: 18px;
      font-weight: 400;
      color: white;
      opacity: 0.8;
    }
  }

  img {
    position: absolute;
    right: 0px;
    bottom: 0px;
    height: 100%;
  }
`;
