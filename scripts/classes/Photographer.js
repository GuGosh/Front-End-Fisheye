import { Api } from './Api.js';

export class Photographer {

    id;
    name;
    city;
    country;
    tagline;
    price;
    portrait;

    static photographersSection = document.querySelector('.photographer_section');

    constructor(photographer) {
        this.id = photographer.id;
        this.name = photographer.name;
        this.city = photographer.city;
        this.country = photographer.country;
        this.tagline = photographer.tagline;
        this.price = photographer.price;
        this.portrait = photographer.portrait;
    }

    static async displayData() {
        const photographers = await Api.getPhotographers();
        photographers.forEach((photographer) => {
            const userCardDOM = photographer.getUserCardDOM();
            Photographer.photographersSection.insertAdjacentHTML('beforeend', userCardDOM);
        });
    };

    getUserCardDOM() {
        const picture = 'assets/photographers/' + this.portrait;
        let html = '';
        html += '<article>';
        html += '<img src="' + picture + '" alt="' + this.name + '" />';
        html += '<h2>' + this.name + '</h2>';
        html += '<p class="location">' + this.country + ', ' + this.city + '</p>';
        html += '<p class="description">' + this.tagline + '</p>';
        html += '<span class="price">' + this.price + '€/jour</span>'
        html += '</article>';
        return html;
    }
}