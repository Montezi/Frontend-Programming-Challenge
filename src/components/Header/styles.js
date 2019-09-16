import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 60px;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    img {
      margin-right: 50px;
      padding-right: 50px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  div {
    text-align: right;
    margin-right: 0px;

    span {
      margin-left: 50px;
      color: #cdccd2;
    }
    a {
      color: #757575;
      font-weight: bold;
      margin-left: 50px;
    }
  }
`;
