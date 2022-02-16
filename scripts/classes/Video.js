import { Media } from './Media.js';

export class Video {
    id;
    photographerId;
    title;
    likes;
    date;
    price;
    video;

    constructor(media) {
        this.id = media.id;
        this.photographerId = media.photographerId;
        this.title = media.title;
        this.likes = media.likes;
        this.date = media.date;
        this.price = media.price;
        this.video = media.video;
    }

    displayMedia() {
        const video = 'assets/videos/' + this.video;
        const html = `<video controls>
                        <source src="${video}"
                                type="video/mp4">
                        Sorry, your browser doesn't support embedded videos.
                    </video>`;
        return html;
    }
}