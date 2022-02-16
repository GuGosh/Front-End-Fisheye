import { Media } from './Media.js';

export class Photo {
    id;
    photographerId;
    title;
    likes;
    date;
    price;
    image;

    constructor(media) {
        this.id = media.id;
        this.photographerId = media.photographerId;
        this.title = media.title;
        this.likes = media.likes;
        this.date = media.date;
        this.price = media.price;
        this.image = media.image;
    }

    displayMedia() {
        const picture = 'assets/images/' + this.image;
        return `<img src='${picture}' alt="${this.title}"/>`;
    }
}