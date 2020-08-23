import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useHistory, Link } from 'react-router-dom';

import { Title, Linha, Box, BoxFilhas } from './styles';
import api from '../../services/api';

interface Event {
  id: string;
  titulo: string;
  descricao: string;
  dataEvento: string;
  email: string;
  telefone: string;
  tipoEvento: string;
  local: string;
}
const Home: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const history = useHistory();

  async function hundleDeletEevent(index: string) {
    try {
      await api.delete(`events/${index}`);
      setEvents(events.filter(event => event.id !== index));
    } catch (error) {
      alert('erro ao deletar');
    }
  }
  useEffect(() => {
    api.get('/events').then(response => {
      setEvents(response.data);
    });
  }, []);
  async function hundleUpdateEvent(index: string) {
    history.push('/update', { id: index });
  }
  return (
    <>
      <Title>Eventos Disponiveis</Title>
      <Link to="/Cadastro">Novo evento</Link>

      <Box>
        {events.map(event => (
          <BoxFilhas key={event.id}>
            <Linha>
              <h4>{event.titulo}</h4>
              <button type="button">
                <FaTrash
                  onClick={() => hundleDeletEevent(event.id)}
                  style={{ color: 'red' }}
                  size={15}
                />
              </button>
              <button type="button">
                <FaEdit
                  onClick={() => hundleUpdateEvent(event.id)}
                  style={{ color: 'black' }}
                  size={15}
                />
              </button>
            </Linha>
            <ul>
              <li>
                <strong>Descricao:</strong>
                {event.descricao}
              </li>
              <li>
                <strong>Data:</strong>
                {event.dataEvento}
              </li>
              <li>
                <strong>Tipo do evento:</strong>
                {event.tipoEvento}
              </li>
              <li>
                <strong>Telefone:</strong>
                {event.telefone}
              </li>
              <li>
                <strong>E-mail:</strong>
                {event.email}
              </li>
              <li>
                <strong>Local:</strong>
                {event.local}
              </li>
            </ul>
          </BoxFilhas>
        ))}
      </Box>
    </>
  );
};

export default Home;
