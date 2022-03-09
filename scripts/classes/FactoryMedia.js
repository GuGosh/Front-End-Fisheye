import { Photo } from './Photo.js';
import { Video } from './Video.js';

export class FactoryMedia {
    static init(media) {
        if (media.hasOwnProperty('image')) {
            return new Photo(media);
        } else {
            return new Video(media);
        }
    }
}