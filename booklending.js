/**
 Name: Obumma Ernest Ndukwe
 Project: Book Lending Service
 Week: 6
**/

//Using Module Design Pattern

var bookServModule = (
    function() {
        // privates
        var __currentBooks = [
            {Author: 'CHINUA ACHEBE', Title: 'THINGS FALL APART', Date: '1958'},
            {Author: 'GEORGE R R MARTIN', Title: 'A GAME OF THRONES', Date: '1996'},
            {Author: 'PHIL JACKSON', Title: 'THE SOUL OF SUCCESS', Date: '2013'}
        ];
        var __rentedBooks = [
            {Author: 'J R R TOLKIEN', Title: 'THE LORD OF THE RINGS', Date: '1954'},
            {Author: 'WALTER ISAACSON', Title: 'STEVE JOBS', Date: '2011'}
        ];

        //Public API
        return {

            // Add books to store
            addBook: function(author, title, date) {
                let book = {Author:author.toUpperCase(), Title:title.toUpperCase(), Date: date.toUpperCase()}
                __currentBooks.push(book);
                console.log(`${book.Title} by ${book.Author} added to store!!`);
                return `${book.Title} by ${book.Author} added to store!!`;
            },

            // Lend books from store
            lendBook: function(title) {
                __currentBooks.forEach(function(book) {
                    if (book.Title == title.toUpperCase()) {
                        __rentedBooks = [...__rentedBooks,book]
                        __currentBooks = [...__currentBooks].filter((book)=>book.Title !== title.toUpperCase())
                        console.log(`${book.Title} by ${book.Author} has been lent!!!`);
                    }
                })
            },

            // Return lent books
            returnBook: function(title) {
                __rentedBooks.forEach(function(book) {
                    if (book.Title == title.toUpperCase()) {
                        __currentBooks = [...__currentBooks,book]
                        __rentedBooks = [...__rentedBooks].filter((book)=>book.Title !== title.toUpperCase())
                        console.log(`${book.Title} by ${book.Author} has been returned to store!!!`);
                    }
                })
            },

            // Display current collection
            displayBooks: function() {
                console.log('***BOOKS CURRENTLY IN STORE***')
                if (__currentBooks[0] !== undefined) {
                    __currentBooks.forEach(function(book) {
                        console.log(`Author: ${book.Author} || Title: ${book.Title} || Date: ${book.Date}`);
                    })
                    return __currentBooks;
                }else {
                    console.log('All books have been rented!!');
                }
            },

            // Display lent books
            lentBooks: function() {
                console.log('***BOOKS ON RENT***')
                if (__rentedBooks[0] !== undefined) {
                    __rentedBooks.forEach(function(book) {
                        console.log(`Author: ${book.Author} || Title: ${book.Title} || Date: ${book.Date}` || []);
                    })
                    return __rentedBooks;
                }else {
                    console.log('There are no books rented out!!');
                }
            }
        }
    }
)();

/** Test: uncomment code snippets to test or test directly on console.
    All inputs should be strings.
**/
//Display all books
bookServModule.displayBooks();

//Display books on rent
//bookServModule.lentBooks();

//Add book
//bookServModule.addBook('ERNEST OBUMMA', 'GREATEST EVER', '1890');

//Lend book
//bookServModule.lendBook('THINGS FALL APART');

//Return book
//bookServModule.returnBook('STEVE JOBS');


module.exports = bookServModule;