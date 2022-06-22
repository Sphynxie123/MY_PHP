// Susikurkite objektų konstruktorių naudojant new pavadinimu Book, 
// kuris galės kurti objektus, kurie turės šias savybes 
// (properties): name, author, year ir metodus (naudojant prototype), 
// kurių vienas parašys pavadinima ir autorių, o kitas parodys knygos amžių (senumą)
let book = new Book ('Harry Poter', 'Author1', 1999);
console.log(book.getTitleAndAuthor());
console.log(book.getBookAge());
 
