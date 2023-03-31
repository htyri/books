document.addEventListener('DOMContentLoaded', getBooks)

const booksTable = document.querySelector('#books')
booksTable.addEventListener('click', deleteBook)

function deleteBook(event){
    if(event.target.textContent === 'X'){
        if(confirm('Are you sure to delete this book?')){
            event.target.parentElement.parentElement.remove()
            const isbn = event.target.parentElement.previousElementSibling
            const author = event.target.parentElement.previousElementSibling.previousElementSibling
            const title = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling

            const book = [title.textContent, author.textContent, isbn.textContent]

            let books // array for LS data
            if(localStorage.getItem('books') === null){
                books = []
            } else {
                books = JSON.parse(localStorage.getItem('books'))
            }
            books.forEach(function(bookFromLS, index){
                if( bookFromLS[0] === book[0] && bookFromLS[1] === book[1] && bookFromLS[2] === book[2]){
                    books.splice(index, 1)
                }
            })
            localStorage.setItem('books', JSON.stringify(books))
        }
    }
}

function getBooks(){
    let books // array for LS data
    if(localStorage.getItem('books') === null){