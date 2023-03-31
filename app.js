const form = document.querySelector('#book-form')
form.addEventListener('submit', addBook)

document.addEventListener('DOMContentLoaded', getBooks)

function getBooks(){
    let books // array for LS data
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach(function(book){
        const bookRow = document.createElement('tr')
        bookRow.innerHTML = `
                        <td>${book[0]}</td>
                        <td>${book[1]}</td>   
                        <td>${book[2]}</td>   
                        <td><a href="#">X</a></td>`
        const booksTable = document.querySelector('#books')
        booksTable.appendChild(bookRow)
    })
}

function addBook(event){
    // read user inputs
    const title = document.querySelector('#title').value