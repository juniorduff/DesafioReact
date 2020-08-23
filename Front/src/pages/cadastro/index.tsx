import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Content } from './styles';
import api from '../../services/api';

const Cadastro: React.FC = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataEvento, setDataEvento] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tipoEvento, setTipoEvento] = useState('');
  const [local, setLocal] = useState('');
  const history = useHistory();

  async function handleNewEvent(event: FormEvent) {
    event.preventDefault();

    const data = {
      titulo,
      descricao,
      dataEvento,
      email,
      telefone,
      tipoEvento,
      local,
    };
    try {
      await api.post('/events', data);
      alert('Evento Cadastrado');
      history.push('/');
    } catch (error) {
      alert('erro tente novamente');
    }
  }
  function VoltarHome() {
    history.push('/');
  }

  return (
    <>
      <Container>
        <Content>
          <h2>Cadastrar Evento</h2>

          <form onSubmit={handleNewEvent}>
            <input
              placeholder="Digite o Titulo do evento"
              value={titulo}
              onChange={e => setTitulo(e.target.value)}
            />
            <input
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
              placeholder="Digite a descrição"
            />
            <input
              value={email}
              type="email"
              onChange={e => setEmail(e.target.value)}
              placeholder="Digite o e-mail"
            />
            <input
              value={dataEvento}
              onChange={e => setDataEvento(e.target.value)}
              type="date"
              placeholder="Digite data do Evento"
            />
            <input
              value={telefone}
              onChange={e => setTelefone(e.target.value)}
              placeholder="Digite o telefone"
            />
            <input
              value={tipoEvento}
              onChange={e => setTipoEvento(e.target.value)}
              placeholder="Digite o tipo de Evento"
            />
            <input
              value={local}
              onChange={e => setLocal(e.target.value)}
              placeholder="Digite o local"
            />
            <button type="submit">Cadastrar</button>
            <button onClick={VoltarHome} type="button">
              Voltar
            </button>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default Cadastro;
