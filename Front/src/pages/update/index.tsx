import React, { useState, FormEvent, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Content } from './styles';
import api from '../../services/api';

interface Event {
  index: number;
  titulo: string;
  descricao: string;
  dataEvento: string;
  email: string;
  telefone: string;
  tipoEvento: string;
  local: string;
}
const Cadastro: React.FC = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataEvento, setDataEvento] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tipoEvento, setTipoEvento] = useState('');
  const [local, setLocal] = useState('');
  const history = useHistory();
  const location = useLocation<LocationProps>();

  interface LocationProps extends Location {
    id: number;
  }

  let id = 0;
  try {
    id = location.state.id;
  } catch (err) {
    history.replace('/');
  }

  async function LoadEvent() {
    const response = await api.get(`/events/${id}`);

    setTitulo(response.data[0].titulo);
    setDescricao(response.data[0].descricao);
    setDataEvento(response.data[0].dataEvento);
    setEmail(response.data[0].email);
    setTelefone(response.data[0].telefone);
    setTipoEvento(response.data[0].tipoEvento);
    setLocal(response.data[0].local);
  }
  useEffect(() => {
    LoadEvent();
  }, []);

  async function handleUpdate(event: FormEvent) {
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
    console.log(titulo);
    try {
      await api.put(`/events/${id}`, data);
      alert('Evento Atualizado');
      history.push('/update');
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
          <h2>Editar Evento</h2>

          <form onSubmit={handleUpdate}>
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
            <button type="submit">Atualizar</button>
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
