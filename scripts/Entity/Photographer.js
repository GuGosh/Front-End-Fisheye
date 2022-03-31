
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

    getMediaByIndex(indexMedia) {
        return this.medias[indexMedia];
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
                                <img src="${picture}" alt="Portrait de ${this.name}" />
                            </div>
                        </div>`

        return html;
    }

    getSinglePhotograherFiltreDom() {
        const html = `<div class="medias-filter">
                            <div id="filtre">
                                <span for="liste-filtre">Trier par</span>
                                <div role="menu" class="list-options">
                                    <div class="container-select-option">
                                        <span role="button" class="selected-option option-filtre" data-option="popularite">Popularité</span><i class="fas fa-angle-down"></i>
                                    </div>
                                    <div class="other-options hide" role="list" aria-expanded="false">
                                        <span class="option-filtre" data-option="popularite">Popularité</span>
                                        <span class="option-filtre" data-option="date">Date</span>
                                        <span class="option-filtre" data-option="titre">Titre</span>
                                    </div>
                                </div>
                            </div>
                        </div>`;

        return html;
    }

    getSinglePhotograherMediasDom() {
        let html = `<div class="medias-photographer">`
        let i = 0;
        this.medias.forEach(media => {
            html += `<div class="media" id="${media.id}">
                        ${media.displayMedia(i)}
                        <div class="infos-media">
                            <p>${media.title}</p>
                            <p><span>${media.likes}</span> <i class="fas fa-heart icon-heart" data-id="${media.id}" aria-label="Ajouter un j'aime" role="button"></i></p>
                        </div>
                    </div>`;
            i++;
        });

        html += `</div>`;
        return html;
    }

    getSinglePhotograherShortInfosDom() {
        const html = `<div class="short-fixed-infos">
                        <p><span id="global-likes" aria-label="Nombre de j'aime global récolté par le photographe">${this.getNumberOfLikes()}</span> <i class="fas fa-heart" aria-hidden></i></p>
                        <p>${this.price} €/jour</p>
                    </div>`;

        return html;
    }
}