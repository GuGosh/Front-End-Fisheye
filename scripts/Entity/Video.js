import { Media } from './Media.js';

export class Video extends Media {
    video;

    constructor(media) {
        super(media);
        this.video = media.video;
    }

    displayMedia(index, autoplay = false) {
        const video = 'assets/videos/' + this.video;
        const html = `<video data-index="${index}"${autoplay ? ' autoplay' : ''} alt="${this.title}">
                        <source src="${video}"
                                type="video/mp4">
                        Sorry, your browser doesn't support embedded videos.
                    </video>`;
        return html;
    }
}