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
  margin: 30px;
  padding: 0 50px 0 50px;
`;

export const CardLeft = styled.div`
  display: flex;
  height: 280px;
  width: 340px;
  background-image: linear-gradient(109.6deg, #ffa8ee 11.2%, #fdc88d 91.1%);
  border-radius: 6px;
  color: #fff;
  strong {
    align-items: flex-start;
    font-size: 18px;
    width: 100%;
    margin-left: 10px;
  }
  span {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const CardMiddle = styled.div`
  height: 280px;
  width: 340px;
  background-image: linear-gradient(109.6deg, #79d9ff 11.2%, #40f0b2 91.1%);
  border-radius: 6px;
`;

export const CardRight = styled.div`
  height: 280px;
  width: 340px;
  background-image: linear-gradient(109.6deg, #789fff 11.2%, #d6a0fe 91.1%);
  border-radius: 6px;
`;
