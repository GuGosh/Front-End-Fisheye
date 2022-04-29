import { Photo } from './../Entity/Photo.js';
import { Video } from './../Entity/Video.js';

export class FactoryMedia {
    static init(media) {
        if (Object.prototype.hasOwnProperty.call(media, 'image')) {
            return new Photo(media);
        } else {
            return new Video(media);
        }
    }
}