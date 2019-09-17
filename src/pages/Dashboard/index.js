import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '../../services/api';

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

  const [numinstalacoes, setNumInstalacoes] = useState();
  const [maxCost, setMaxCost] = useState([]);
  const [maxNumberInstallation, setMaxNumberInstallation] = useState([]);
  const [totalInstallation, setTotalInstallation] = useState();

  const [loadingNumberInstallation, setLoadingNumberInstallation] = useState(
    true
  );
  const [loadingMaxCost, setLoadingMaxCost] = useState(true);
  const [
    loadingMaxNumberInstallation,
    setLoadingMaxNumberInstallation,
  ] = useState(true);

  useEffect(() => {
    async function loadNumInstalacoes() {
      const response = await api.get(`panels/search/totalInstallation`);
      setNumInstalacoes(response.data);
      setLoadingNumberInstallation(false);
    }
    loadNumInstalacoes();
  }, []);

  useEffect(() => {
    async function loadMaxCost() {
      const response = await api.get(`panels/search/maxInstallation`);

      setMaxCost(response.data[0]);
      setLoadingMaxCost(false);
    }
    loadMaxCost();
  }, []);

  useEffect(() => {
    async function loadMaxNumberInstallation() {
      const response = await api.get(`panels/search/maxNumberInstallation`);

      let totalQtd = 0;
      response.data.map(item => {
        // eslint-disable-next-line radix
        totalQtd = parseInt(item.qtd) + parseInt(totalQtd);
        return totalQtd;
      });
      setTotalInstallation(totalQtd);

      setMaxNumberInstallation(response.data);
      setLoadingMaxNumberInstallation(false);
    }
    loadMaxNumberInstallation();
  }, []);

  function getMonth(value) {
    const valor = value - 1;
    const month = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ][valor];

    return month;
  }

  function getActualDate() {
    const data = new Date();

    const day = [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ][data.getDay()];
    const date = data.getDate();
    const month = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ][data.getMonth()];
    const year = data.getFullYear();

    const actualDate = `${day}, ${date} de ${month} de ${year}`;

    return actualDate;
  }

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
          <div>{getActualDate()}</div>
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
            <p>
              {loadingNumberInstallation ? 'Carregando ...' : numinstalacoes}
            </p>
          </div>
          <div>
            <span>Estado</span>
            <p>{profile.state}</p>
          </div>
        </CardLeft>
        <CardMiddle>
          <div>
            <strong>Instalação com maior custo</strong>
          </div>
          <div>
            <span>CEP</span>
            <p>{loadingMaxCost ? 'Carregando ...' : maxCost.zip_code}</p>
          </div>
          <div>
            <span>Custo</span>
            <p>
              {loadingMaxCost
                ? 'Carregando ...'
                : `$ ${Number(maxCost.maxCost).toFixed(2)}`}
            </p>
          </div>
        </CardMiddle>
        <CardRight>
          <div>
            <strong>Maior número de instalações</strong>
          </div>
          <div className="months">
            {loadingMaxNumberInstallation ? (
              <div>
                <p>Carregando...</p>
              </div>
            ) : (
              maxNumberInstallation.map(item => (
                <div key={item.mes}>
                  <span>{getMonth(item.mes)}</span>
                  <p>{item.qtd}</p>
                </div>
              ))
            )}
          </div>
          <div>
            <span>Total instalado</span>
            <p>
              {loadingMaxNumberInstallation
                ? 'Carregando ...'
                : totalInstallation}
            </p>
          </div>
        </CardRight>
      </ContentCard>
    </Container>
  );
}
