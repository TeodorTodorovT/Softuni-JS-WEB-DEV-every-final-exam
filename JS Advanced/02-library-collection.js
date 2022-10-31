class LibraryCollection{
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor){
        if(this.books.length >= this.capacity){
            throw new Error('Not enough space in the collection.');
        }
        let book = {
            bookName,
            bookAuthor,
            payed: false,
        }

        this.books.push(book);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName){
        let isFound = false;
        let isPaid = false;

        for (const book of this.books) {
            if(book.bookName === bookName){
                isFound = true;
            }
        }
        for (const book of this.books) {
            if(book.bookName === bookName && book.payed === true){
                isPaid = true;
            }
        }

        if(isFound === false){
            throw new Error(`${bookName} is not in the collection.`)
        }else if(isPaid === true){
            throw new Error(`${bookName} has already been paid.`)
        }else{
            for (const book of this.books) {
                if(book.bookName === bookName){
                    book.payed = true;
                }
            }
            return `${bookName} has been successfully paid.`
        }
    }

    removeBook(bookName){
        let isFound = false;
        let isPaid = false;

        for (const book of this.books) {
            if(book.bookName === bookName){
                isFound = true;
            }
        }
        for (const book of this.books) {
            if(book.bookName === bookName && book.payed === true){
                isPaid = true;
            }
        }

        if(isFound === false){
            throw new Error('The book, you\'re looking for, is not found.')
        }
        if(isPaid === false){
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }

        for (const book of this.books) {
            if(book.bookName === bookName && book.payed === true){
                this.books.splice(this.books.indexOf(book), 1);
                return `${bookName} remove from the collection.`
            }
        }
    }

    getStatistics(bookAuthor){
        let result = '';
        let isFound = false;
        for (const book of this.books) {
            if(book.bookAuthor === bookAuthor){
                isFound = true
            }
        }

        if(!bookAuthor){
            result += `The book collection has ${this.capacity - Number(this.books.length)} empty spots left.\n`

           this.books
            .sort((a,b) => a.bookName.localeCompare(b.bookName))
            .forEach(x => {
                if(x.payed === true){
                    x.payed = 'Has Paid'
                }else{
                    x.payed = 'Not Paid'
                }
                result += `${x.bookName} == ${x.bookAuthor} - ${x.payed}.\n`
                })
        }else if(bookAuthor && isFound === true && bookAuthor != true){
            let bookName;
            let paid;
            for (const book of this.books) {
                if(book.bookAuthor === bookAuthor){
                    bookName = book.bookName;
                    if(book.payed === true){
                        book.payed = 'Has Paid'
                    }else{
                        book.payed = 'Not Paid'
                    }
                    paid = book.payed;
                }
            }
            result += `${bookName} == ${bookAuthor} - ${paid}.`
        }else{

            if(isFound === false){
                result = `${bookAuthor} is not in the collection.`
            }
        }
        return result.trim();
    }
}


const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics(true));





















