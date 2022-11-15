import { DressCode } from '../enum/dress-code-types.enum';

export interface PublicEvent {
    id: string;
    eventType: string;
    startingDate: string;
    endDate: string;
    peopleLimit: string;
    dressCode: DressCode;
    reservation: Array<string>;
}
