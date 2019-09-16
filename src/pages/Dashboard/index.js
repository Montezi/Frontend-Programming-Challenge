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
          <div>
            <strong>Número de instalações feitas</strong>
          </div>
          <div>
            <span>Valor Total</span>
            <p>35</p>
          </div>
          <div>
            <span>Estado</span>
            <p>CA</p>
          </div>
        </CardLeft>
        <CardMiddle>
          <div>
            <strong>Instalação com maior custo</strong>
          </div>
          <div>
            <span>CEP</span>
            <p>20775-080</p>
          </div>
          <div>
            <span>Custo</span>
            <p>$2.222.00</p>
          </div>
        </CardMiddle>
        <CardRight>
          <div>
            <strong>Maior número de instalações</strong>
          </div>
          <div>
            <span>Meses</span>
            <p>Abril, Setembro e Dezembro</p>
          </div>
          <div>
            <span>Total instalado</span>
            <p>1.000</p>
          </div>
        </CardRight>
      </ContentCard>
    </Container>
  );
}
