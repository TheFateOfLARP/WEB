export class EventType {
    public id: number;
    public name: string;
    public slug: string;

    constructor(
        data?: EventType
    ) {
        this.id = data['id'];
        this.name = data['name'] || 'whaaa';
        this.slug = data['slug'] || 'whaaas';
    }
}
