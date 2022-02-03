class Photographer {

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

    static getPhotographers() {
        const photographersJson = [
            {
                "name": "Ma data test",
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Autre data test",
                "id": 2,
                "city": "Londres",
                "country": "UK",
                "tagline": "Ceci est ma data test 2",
                "price": 500,
                "portrait": "account.png"
            },
            {
                "name": "Ma data test",
                "id": 3,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Autre data test",
                "id": 4,
                "city": "Londres",
                "country": "UK",
                "tagline": "Ceci est ma data test 2",
                "price": 500,
                "portrait": "account.png"
            },
            {
                "name": "Ma data test",
                "id": 5,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Autre data test",
                "id": 6,
                "city": "Londres",
                "country": "UK",
                "tagline": "Ceci est ma data test 2",
                "price": 500,
                "portrait": "account.png"
            },
        ]

        let photographersObjects = [];
        photographersJson.forEach((photographer) => {
            photographersObjects.push(new Photographer(photographer));
        });

        return photographersObjects;
    }

    static async displayData() {
        const photographers = await Photographer.getPhotographers();
        photographers.forEach((photographer) => {
            const userCardDOM = photographer.getUserCardDOM();
            Photographer.photographersSection.appendChild(userCardDOM);
        });
    };

    getUserCardDOM() {
        const picture = `assets/photographers/${this.portrait}`;
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = this.name;
        const location = document.createElement('p');
        location.classList.add('location');
        location.textContent = this.country + ', ' + this.city;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        return article;
    }
}