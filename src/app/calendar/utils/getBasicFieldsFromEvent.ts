import { IEvent } from '../store/events.models';

export default ({ start, summary }: IEvent) => ({
  start,
  summary,
});
