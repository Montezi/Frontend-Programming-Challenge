import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo_dashboard.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Challenge" />
        </nav>
        <aside>
          <Profile>
            <div>
              <Link to="/dashboard">Meu Consumo</Link>
              <span> Minha área</span>
              <Link to="/profile">Perfil</Link>
              <span>Dados Pessoais</span>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
