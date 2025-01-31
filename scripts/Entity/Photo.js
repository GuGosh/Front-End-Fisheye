import { Media } from './Media.js';

export class Photo extends Media {
    image;

    constructor(media) {
        super(media);
        this.image = media.image;
    }

    displayMedia(index) {
        const picture = 'assets/images/' + this.image;
        return `<img src='${picture}' alt="${this.title}" data-index="${index}" />`;
    }
}