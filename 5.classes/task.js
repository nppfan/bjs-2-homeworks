class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
    fix() {
      this.state = this.state * 1.5;
    }
    set state(state) {
      if (state < 0) {
        this._state = 0;
      } else if (state > 100) {
        this._state = 100;
      } else {
        this._state = state;
      }
    }
    get state() {
      return this._state;
    }
  }
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state, type);
      this.type = "magazine";
    }
  }
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state, type);
      this.author = author;
      this.type = "book";
    }
  }
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
      super(author, name, releaseDate, pagesCount, state, type);
      this.type = "novel";
    }
  }
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
      super(author, name, releaseDate, pagesCount, state, type);
      this.type = "fantastic";
    }
  }
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
      super(author, name, releaseDate, pagesCount, state, type);
      this.type = "detective";
    }
  }
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
    findBookBy(type, value) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i][type] === value) {
          return this.books[i];
        }
      }
      return null;
    }
    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                const removedBook = this.books[i];
                this.books.splice(i, 1);
                return removedBook;
            }
        }
        return null;
    } 
  }