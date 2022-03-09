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

    getMedia(idMedia) {
        const media = this.medias.filter(media => media.id === parseInt(idMedia));
        return media[0];
    }

    getNumberOfLikes() {
        let nbLikes = 0;
        // reduce
        this.medias.forEach(media => {
            nbLikes += media.likes;
        });
        return nbLikes;
    }

    filterMedias(filtre) {
        if (filtre == 'titre') {
            return this.sortMediasByTitle();
        } else if (filtre == 'popularite') {
            return this.sortMediasByPopularite();
        } else if (filtre == 'date') {
            return this.sortMediasByDate();
        }
    }

    sortMediasByTitle() {
        return this.medias.sort(function compare(a, b) {
            if (a.title < b.title)
                return -1;
            if (a.title > b.title)
                return 1;
            return 0;
        });
    }

    sortMediasByPopularite() {
        return this.medias.sort(function compare(a, b) {
            if (a.likes < b.likes)
                return -1;
            if (a.likes > b.likes)
                return 1;
            return 0;
        });
    }

    sortMediasByDate() {
        return this.medias.sort(function compare(a, b) {
            if (a.date < b.date)
                return -1;
            if (a.date > b.date)
                return 1;
            return 0;
        });
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
        html += this.getSinglePhotograherFiltreDom();
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

    getSinglePhotograherFiltreDom() {
        const html = `<div class="medias-filter">
                            <form id="filtre">
                                <label for="liste-filtre">Trier par</label>
                                <select id="liste-filtre" name="liste-filtre">
                                    <option value="popularite">Popularité</option>
                                    <option value="date">Date</option>
                                    <option value="titre">Titre</option>
                                </select>
                            </form>
                        </div>`;

        return html;
    }

    getSinglePhotograherMediasDom() {
        let html = `<div class="medias-photographer">`

        this.medias.forEach(media => {
            html += `<div class="media" id="${media.id}">
                        ${media.displayMedia()}
                        <div class="infos-media">
                            <p>${media.title}</p>
                            <p><span>${media.likes}</span> <i class="fas fa-heart icon-heart" data-id="${media.id}"></i></p>
                        </div>
                    </div>`;
        });

        html += `</div>`;
        return html;
    }

    getSinglePhotograherShortInfosDom() {
        const html = `<div class="short-fixed-infos">
                        <p><span id="global-likes">${this.getNumberOfLikes()}</span> <i class="fas fa-heart"></i></p>
                        <p>${this.price} €/jour</p>
                    </div>`;

        return html;
    }
}