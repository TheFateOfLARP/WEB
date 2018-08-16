import { EventType } from './event-type.model';
import { User } from './user.model';

export class EventItem {
    public id: number;
    public name: string;
    public imgUrl: string;
    public description: string;
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
        this.name = data['name'];
        this.imgUrl = data['imageUrl'];
        this.description = data['description'];
        this.price = data['price'] || {};
        this.location = data['location'] || '';
        this.latlng = data['latlng'] || {};
        this.maxPlayers = data['maxPlayers'] || 0;
        this.type = new EventType(data['type']);
        this.owner = new User(data['owner']);
        this.dateStart = data['dateStart'] || new Date('1970-01-01');
        this.dateEnd = data['dateEnd'] || new Date('1970-01-01');
        this.appDeadline = data['appDeadline'] || new Date('1970-01-01');
    }
}
