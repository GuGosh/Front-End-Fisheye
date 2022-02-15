import { Photographer } from './Photographer.js';

export class Api {

    static urlApi = './data/photographers.json';
    static photographers;

    static async getPhotographers() {
        if (self.photographers) {
            return self.photographers;
        }

        let response = await fetch(Api.urlApi);
        const photographersJson = await response.json();

        self.photographers = photographersJson.photographers.map(photographer => {
            const medias = null;
            //const medias = response.medias.filter(photographerMedia => photographer.id === photographerMedia.id);
            // passer instance de medias
            return new Photographer(photographer, medias);
        })
        return self.photographers;
    }

    static async getPhotographer(idPhotographer) {

        const photographers = await self.getPhotographers();

        return photographers.find(photographer => photographer.id === idPhotographer);
    }
}