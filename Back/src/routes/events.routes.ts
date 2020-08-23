import { Router } from 'express';
import { uuid } from 'uuidv4';
import EventRepository from '../repository/EventRepository';

const eventRouter = Router();
const eventRepository = new EventRepository();

eventRouter.get('/:id', (request, response) => {
  const { id } = request.params;
  const event = eventRepository.FindOne(id);
  response.json(event);
});
eventRouter.get('/', (request, response) => {
  const event = eventRepository.FindAll();
  return response.json(event);
});

eventRouter.put('/:id', (request, response) => {
  const { id } = request.params;

  const {
    titulo,
    descricao,
    dataEvento,
    email,
    telefone,
    tipoEvento,
    local,
  } = request.body;

  const event = eventRepository.update(
    {
      dataEvento,
      email,
      descricao,
      titulo,
      tipoEvento,
      telefone,
      local,
    },
    id,
  );

  return response.json(event);
});
// ROTA DELETAR
eventRouter.delete('/:index', (request, response) => {
  const { id } = request.params; // pego o ID passado via url
  // envio o id pra classe repository
  const event = eventRepository.deleteByid(id);
  return response.json(event);
});

//  Rota de cadastro http://localhost:3000/events

eventRouter.post('/', (request, response) => {
  const {
    id = uuid(),
    titulo,
    descricao,
    dataEvento,
    email,
    telefone,
    tipoEvento,
    local,
  } = request.body;

  const event = eventRepository.create({
    id,
    dataEvento,
    email,
    descricao,
    titulo,
    tipoEvento,
    telefone,
    local,
  });
  return response.json(event);
});

export default eventRouter;
