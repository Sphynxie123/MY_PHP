class Book {
    constructor(title, author, year){
    this.title = title;
    this.author = author;
    // this.year = year;
        if (Number.isInteger(year)) {
            this.year = year;
        } else {
            throw 'Parameter is not a number!';
        }
    }
    getTitleAndAuthor() {
        return `${this.title} by ${this.author}`;
    }

    getBookAge() {
        // ismeta 23
        return `${new Date().getFullYear() - this.year}`;
    }
}

