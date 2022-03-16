import { Media } from './Media.js';

export class Video extends Media {
    video;

    constructor(media) {
        super(media);
        this.video = media.video;
    }

    displayMedia() {
        const video = 'assets/videos/' + this.video;
        const html = `<video>
                        <source src="${video}"
                                type="video/mp4">
                        Sorry, your browser doesn't support embedded videos.
                    </video>`;
        return html;
    }
}