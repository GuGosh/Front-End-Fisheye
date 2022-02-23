import { Photographer } from './Photographer.js';
import { FactoryMedia } from './FactoryMedia.js';

export class Api {

    static urlApi = './data/photographers.json';
    static photographers;

    static async getPhotographers() {
        if (Api.photographers) {
            return Api.photographers;
        }

        let response = await fetch(Api.urlApi);
        const photographersJson = await response.json();

        Api.photographers = photographersJson.photographers.map(photographer => {
            let medias = photographersJson.media.filter(photographerMedia => photographerMedia.photographerId === photographer.id);
            medias = medias.map(media => FactoryMedia.init(media));

            return new Photographer(photographer, medias);
        })
        return Api.photographers;
    }

    static async getPhotographer(idPhotographer) {

        const photographers = await Api.getPhotographers();

        return photographers.find((photographer) => photographer.id === idPhotographer);
    }
}