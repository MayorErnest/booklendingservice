/**
 Name: Obumma Ernest Ndukwe
 Project: Book Lending Service Test with Jest
 Week: 11
**/

const bookServModule = require('./booklending');

//add books test
test('adds book to store', () => {
    let avaliableBooks = bookServModule.displayBooks();
    bookServModule.addBook('ERNEST OBUMMA', 'GREATEST EVER', '1890')
    expect(avaliableBooks)
        .toContainEqual({Author: 'ERNEST OBUMMA', Title: 'GREATEST EVER', Date: '1890'});
});

//lend books test
test('lends out book', () => {
    bookServModule.lendBook('THE SOUL OF SUCCESS')
    let rentedBooks = bookServModule.lentBooks();
    expect(rentedBooks)
        .toContainEqual({Author: 'PHIL JACKSON', Title: 'THE SOUL OF SUCCESS', Date: '2013'});
});


//return lent books test 
test('returns book lent out', ()=> {
    bookServModule.returnBook('STEVE JOBS');
    let avaliableBooks = bookServModule.displayBooks();
    expect(avaliableBooks)
        .toContainEqual({Author: 'WALTER ISAACSON', Title: 'STEVE JOBS', Date: '2011'});
})

//Display books and rented books test
test('Display rented books and avaliable books', ()=> {
    expect(bookServModule.displayBooks).toBeDefined();
    expect(bookServModule.lentBooks).toBeDefined();
})