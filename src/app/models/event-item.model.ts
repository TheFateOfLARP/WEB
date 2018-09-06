import { EventType } from './event-type.model';
import { User } from './user.model';

export class EventItem {
    public id: number;
    public name: string;
    public imageURL: string;
    public descr: string;
    public price: object;
    public dateStart?: Date;
    public dateEnd?: Date;
    public location: string;
    public latlng: object;
    public appDeadline?: Date;
    public maxPlayers: number;
    public type: EventType;
    public owner: User;

    constructor(
        data?: EventItem
    ) {
        this.id = data['id'];
        this.name = data['name'] || 'Jhon Doe';
        this.imageURL = data['imageURL'] || 'https://material.angular.io/assets/img/examples/shiba1.jpg';
        this.descr = data['descr'] || 'whololo';
        this.price = data['price'] || {};
        this.location = data['location'] || '';
        this.latlng = data['latlong'] || {};
        this.maxPlayers = data['max_players'] || 0;
        this.type = new EventType(data['event_type_id']);
        this.owner = new User(data['owner_id']);
        this.dateStart = data['date_start'] || new Date('1970-01-01');
        this.dateEnd = data['date_end'] || new Date('1970-01-01');
        this.appDeadline = data['app_deadline'] || new Date('1970-01-01');
    }
}
