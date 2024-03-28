//document.addEventListener("DOMContentLoaded", function() {

let form = document.getElementById("book-form")
let booksBox = document.getElementById('listBooks')
const booksList = []

// Book constructor
function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read 
}
// Creating new book and adding it from inputs to books array
form.addEventListener('submit', (event) => {
    event.preventDefault()
    let author = document.getElementById("author").value 
    let title = document.getElementById("title").value 
    let pages = document.getElementById("pages").value 
    let read = document.getElementById("read").checked ? true : false
    const book = new Book(title, author, pages, read)
    booksList.push(book)
    booksBox.innerHTML = ''
    showBooks()
    document.getElementById("author").value = ''
    document.getElementById("title").value = ''
    document.getElementById("pages").value = ''
    document.getElementById("read").checked = false
})
// Showing books from the array in the DOM, if any
function showBooks (){
    
    let index = 0
    booksList.forEach((element) => {
        let bookDiv = document.createElement("div")
        bookDiv.classList.add('book')
        element.id = `book:${index}`
        let contentDiv = 
        `<h3>${element.title}</h3>
        <p>Author: ${element.author}</p>
        <p>Pages: ${element.pages}</p>
        <p>Read: ${element.read ? 'Yes' : "No"}</p>
        <button class='btn-delete' id='delete-btn' data-id='${element.id}'>Delete Book</button>`
        bookDiv.innerHTML = contentDiv
        booksBox.appendChild(bookDiv)
        index++    

        const delButton = document.getElementById('delete-btn')
        delButton.addEventListener('click', () => { 
        let id = delButton.getAttribute('data-id')
        bookIndex = booksList.indexOf(id)
        console.log(bookIndex, id)
        let bookDiv = delButton.parentNode
        const indexBook = booksList.findIndex(book => book.id === id)
            if (indexBook !== -1) {
                booksList.splice(bookIndex, 1)
                bookDiv.remove()
                showBooks()
                index--
            } return
        })
    }) 
}



