export class Media {
    id;
    photographerId;
    title;
    likes;
    date;
    price;

    constructor(media) {
        this.id = media.id;
        this.photographerId = media.photographerId;
        this.title = media.title;
        this.likes = media.likes;
        this.date = media.date;
        this.price = media.price;
    }
}