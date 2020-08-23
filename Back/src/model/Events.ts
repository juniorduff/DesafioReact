import { uuid } from 'uuidv4';

class Event {
  id: string;

  titulo: string;

  descricao: string;

  dataEvento: string;

  email: string;

  telefone: string;

  tipoEvento: string;

  local: string;

  constructor({
    email,
    telefone,
    tipoEvento,
    titulo,
    descricao,
    dataEvento,
    local,
  }: Omit<Event, 'id'>) {
    this.id = uuid();
    this.titulo = titulo;
    this.descricao = descricao;
    this.dataEvento = dataEvento;
    this.email = email;
    this.telefone = telefone;
    this.tipoEvento = tipoEvento;
    this.local = local;
  }
}

export default Event;
