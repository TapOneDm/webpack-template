export default class Post {
    constructor(title, image) {
        this.title = title;
        this.image = image
        this.date = new Date();
    }

    toString() {
        return JSON.stringify({
                title: this.title,
                img: this.image,
                date: this.date.toJSON(),
            }
        );
    }

    sayHi(message) {
        return `Hello ${message}`;
    }


}