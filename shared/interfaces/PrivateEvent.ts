import { PrivateEventsTypes } from '../enum/private-events-types.enum';

export interface PrivateEvent {
    id: string;
    eventType: PrivateEventsTypes;
    peopleLimit: string;
    reservation: Array<string>;
}
