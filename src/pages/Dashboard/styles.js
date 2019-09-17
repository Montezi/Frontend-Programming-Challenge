import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
  padding: 0 50px 0 50px;
`;

export const ContentLeft = styled.div`
  vertical-align: top;
  color: #fff;
  ul li {
    font-size: 16px;
    font-weight: bold;
    display: inline;
    padding-right: 50px;
    span.unselected {
      opacity: 0.5;
    }
  }
  div {
    margin-top: 30px;
    font-size: 24px;
    font-weight: bold;
  }
`;

export const ContentRight = styled.div`
  img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px 0 50px;
  margin: 10px;
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 20px;

  height: 240px;
  width: 350px;
  background-image: linear-gradient(45deg, #fdc88d 0%, #ffa8ee 100%);
  border-radius: 5px;
  color: #fff;

  div {
    margin-left: 20px;
  }

  strong {
    font-size: 18px;
    width: 100%;
  }
  span {
    font-size: 12px;
    font-weight: bold;
  }
  p {
    font-size: 24px;
    margin-top: 10px;
  }
`;

export const CardMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 20px;
  height: 240px;
  width: 350px;
  background: linear-gradient(#79d9ff, #50f0b2);

  border-radius: 5px;
  color: #fff;

  div {
    margin-left: 20px;
  }

  strong {
    font-size: 18px;
    width: 100%;
  }
  span {
    font-size: 12px;
    font-weight: bold;
  }
  p {
    font-size: 24px;
    margin-top: 10px;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 20px;
  height: 240px;
  width: 350px;
  background-image: radial-gradient(
    circle farthest-corner at 0.4% -0.6%,
    #789fff 0%,
    #d6a0fe 90%
  );

  border-radius: 5px;
  color: #fff;

  div {
    margin-left: 20px;
    margin-bottom: 0;
  }
  div.months {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 0;
  }

  strong {
    font-size: 18px;
    width: 100%;
  }
  span {
    font-size: 12px;
    font-weight: bold;
  }
  p {
    font-size: 24px;
    margin-top: 10px;
  }
`;
