import { Api } from './Api.js';
import { Photo } from './Photo.js';
import { Video } from './Video.js';

export class Photographer {

    id;
    name;
    city;
    country;
    tagline;
    price;
    portrait;
    medias;

    static photographersSection = document.querySelector('.photographer_section');
    static singlePhotographerSection = document.querySelector('.single-photographer');

    constructor(photographer, medias) {
        this.id = photographer.id;
        this.name = photographer.name;
        this.city = photographer.city;
        this.country = photographer.country;
        this.tagline = photographer.tagline;
        this.price = photographer.price;
        this.portrait = photographer.portrait;
        this.medias = medias;
    }

    getNumberOfLikes() {
        let nbLikes = 0;
        this.medias.forEach(media => {
            nbLikes += media.likes;
        });
        return nbLikes;
    }

    getUserCardDOM() {
        const picture = 'assets/photographers/' + this.portrait;
        const html = `<a href="./photographer.html?idPhotographer=${this.id}">
                        <article>
                            <img src="${picture}" alt="${this.name}" />
                            <h2>${this.name}</h2>
                            <p class="location">${this.country}, ${this.city}</p>
                            <p class="description">${this.tagline}</p>
                            <span class="price">${this.price} €/jour</span>
                        </article>
                    </a>`;
        return html;
    }

    getSinglePhotograherDom() {
        let html = this.getSinglePhotograherHeaderDom();
        html += this.getSinglePhotograherMediasDom();
        html += this.getSinglePhotograherShortInfosDom();

        return html;
    }

    getSinglePhotograherHeaderDom() {
        const picture = 'assets/photographers/' + this.portrait;
        const html = `<div class="photograph-header">
                            <div class="infos-photographer">
                                <h1 class="secondary">${this.name}</h1>
                                <span>${this.country}, ${this.city}</span>
                                <p>${this.tagline}</p>
                            </div>
                            <div class="contact-photographer">
                                <button class="contact open-modal">Contactez-moi</button>
                            </div>
                            <div class="image-photographer">
                                <img src="${picture}" alt="${this.name}" />
                            </div>
                        </div>`

        return html;
    }

    getSinglePhotograherMediasDom() {
        let html = `<div class="medias-photographer">`

        this.medias.forEach(media => {
            html += `<div class="media">
                        ${media.displayMedia()}
                        <div class="infos-media">
                            <p>${media.title}</p>
                            <p>${media.likes} <i class="fas fa-heart"></i></p>
                        </div>
                    </div>`;
        });

        html += `</div>`;
        return html;
    }

    getSinglePhotograherShortInfosDom() {
        const html = `<div class="short-fixed-infos">
                        <p>${this.getNumberOfLikes()} <i class="fas fa-heart"></i></p>
                        <p>${this.price} €/jour</p>
                    </div>`;

        return html;
    }
}