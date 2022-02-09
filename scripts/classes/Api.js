import { Photographer } from './Photographer.js';

export class Api {

    static async getPhotographers() {
        let url = './data/photographers.json';
        let response = await fetch(url);
        const photographersJson = await response.json();

        // utiliser map
        let photographersObjects = [];
        photographersJson.photographers.map((photographer) => { })
        photographersJson.photographers.forEach((photographer) => {
            photographersObjects.push(new Photographer(photographer));
        });

        return photographersObjects;
    }

    //static async getPhotographer(id);
}