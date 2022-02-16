import { Photo } from './Photo.js';
import { Video } from './Video.js';

export class Media {

    constructor(media) {
        if (media.image) {
            return new Photo(media);
        } else {
            return new Video(media);
        }
    }
}