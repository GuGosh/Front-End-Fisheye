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
            Photographer.photographersSection.appendChild(userCardDOM);
        });
    };

    getUserCardDOM() {
        // template string
        const picture = `assets/photographers/${this.portrait}`;
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute('alt', this.name);
        const h2 = document.createElement('h2');
        h2.textContent = this.name;
        const location = document.createElement('p');
        location.classList.add('location');
        location.textContent = this.country + ', ' + this.city;
        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = this.tagline;
        const price = document.createElement('span');
        price.classList.add('price');
        price.textContent = this.price + '€/jour';
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(description);
        article.appendChild(price);
        return article;
    }
}