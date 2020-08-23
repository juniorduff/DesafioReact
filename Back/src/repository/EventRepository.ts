import { uuid } from 'uuidv4';
import Event from '../model/Events';

interface CreateEventDTO {
  id: string;
  titulo: string;
  descricao: string;
  dataEvento: string;
  email: string;
  telefone: string;
  tipoEvento: string;
  local: string;
}
interface UpdateEventDTO {
  // Interface para definir a tipagem dos atributos
  titulo: string;
  descricao: string;
  dataEvento: string;
  email: string;
  telefone: string;
  tipoEvento: string;
  local: string;
}
class EventRepository {
  // declaro um array de evento
  private event: Event[];

  constructor() {
    // inicializo o vetor com um evento ja

    this.event = [
      {
        id: uuid(),
        titulo: 'Churrasqueira',
        dataEvento: '24/08/2020',
        descricao: 'evento top',
        email: 'teste@teste',
        local: 'Casa branca',
        telefone: '55-98595959',
        tipoEvento: 'fisico',
      },
    ];
  }

  // METODO  para criar um novo Evento
  public create({
    descricao,
    dataEvento,
    email,
    telefone,
    tipoEvento,
    titulo,
    local,
  }: CreateEventDTO): Event {
    // afirmo que metodo é do tipo Evento , e tipo os parametros
    const events = new Event({
      titulo,
      descricao,
      dataEvento,
      email,
      telefone,
      tipoEvento,
      local,
    });

    this.event.push(events);
    return events;
  }

  // metodo Update
  public update(
    {
      descricao,
      dataEvento,
      email,
      telefone,
      tipoEvento,
      titulo,
      local,
    }: UpdateEventDTO,
    id: string,
  ): Event[] {
    const event = {
      id,
      titulo,
      descricao,
      dataEvento,
      email,
      telefone,
      tipoEvento,
      local,
    };
    // BUSCO O evento pelo index
    const EventIndex = this.event.findIndex(x => x.id === id);

    this.event[EventIndex] = event;
    console.log(id);

    return this.event.filter(x => x.id === id);
  }

  /**
   * FindAll
   */
  public FindAll(): Event[] {
    return this.event;
  }

  public FindOne(id: string): Event[] {
    return this.event.filter(x => x.id === id);
  }

  public deleteByid(id: string): Event[] {
    const EventIndex = this.event.findIndex(x => x.id === id);

    this.event.splice(EventIndex, 1);

    return this.event;
  }
}
export default EventRepository;
