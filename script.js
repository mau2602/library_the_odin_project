
let form = document.getElementById("book-form")
let booksBox = document.getElementById('listBooks')
const booksList = [{title : 'Atlas Rebelion', author : 'Ayn Rand', pages : 1232, read : true}, {title: 'Atomics Habits', author: 'James Clear', pages:320, read: false},{title : 'Si lo crees, lo creas', author : 'Brian Tracy', pages : 218, read : true}]

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
    let read = document.getElementById("read").checked
    const book = new Book(title, author, pages, read)
    booksList.push(book)
    booksBox.innerHTML = ''
    showBooks()
    document.getElementById("author").value = ''
    document.getElementById("title").value = ''
    document.getElementById("pages").value = ''
    document.getElementById("read").checked = false
})
booksBox.innerHTML = ''
showBooks()

// Showing books from the array in the DOM, if any
function showBooks (){
    
    booksList.forEach((element, index) => {
        let bookDiv = document.createElement("div")
        bookDiv.classList.add('book')
        element.id = `book:${index}`
        let contentDiv = 
        `<h3>${element.title}</h3>
        <p>Author: ${element.author}</p>
        <p>Pages: ${element.pages}</p>
        <p>Read: ${element.read ? 'Yes' : 'No'}</p>
        <button class='btn-delete' id='delete-btn' data-id='${element.id}'>Delete Book</button>`
        bookDiv.innerHTML = contentDiv
        booksBox.appendChild(bookDiv)
        console.log(index)  
    }) 
}
// Deleting desired book using it's button 'data-id' attribute
    const delButton = document.getElementById('listBooks')
    if(delButton){
        delButton.addEventListener('click', (event) => { 
        let btn = event.target.dataset
        let btnId = btn.id
        const indexBook = booksList.findIndex(book => book.id === btnId)
        if (indexBook !== -1) {
            booksList.splice(indexBook, 1)
            booksBox.innerHTML = ''
    }   showBooks()
    })
}