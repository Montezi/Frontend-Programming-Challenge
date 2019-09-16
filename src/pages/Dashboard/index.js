import React from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
  Content,
  ContentLeft,
  ContentRight,
  ContentCard,
  CardLeft,
  CardMiddle,
  CardRight,
} from './styles';

export default function Dashboard() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <ContentLeft>
          <ul>
            <li>
              <span>Dia</span>
            </li>
            <li>
              <span className="unselected">Semana</span>
            </li>
            <li>
              <span className="unselected">Mês</span>
            </li>
            <li>
              <span className="unselected">Ano</span>
            </li>
          </ul>
          <div>Sexta-Feira, 29 de Dezembro</div>
        </ContentLeft>
        <ContentRight>
          <img
            src={
              profile.avatar.url ||
              'https://api.adorable.io/avatars/50/abott@adorable.png'
            }
            alt={profile.name}
          />
        </ContentRight>
      </Content>
      <ContentCard>
        <CardLeft>
          <strong>Número de instalações feitas</strong>
          <span>Valor Total</span>
          <span>Estado</span>
        </CardLeft>
        <CardMiddle />
        <CardRight />
      </ContentCard>
    </Container>
  );
}
