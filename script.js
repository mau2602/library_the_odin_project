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
Book.prototype.toggleBtn = function(book) {
    book.read = !book.read
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
        bookDiv.dataset.bookId =`book:${index}`
        let h3Element = document.createElement('h3')
        h3Element.textContent = element.title
        let pAuthor = document.createElement('p')
        pAuthor.textContent = `Author: ${element.author}` 
        let pPages = document.createElement('p')
        pPages.textContent = `Pages: ${element.pages}`
        let pRead = document.createElement('p')
        pRead.classList.add('toggleRead')
        pRead.textContent = element.read ? 'Read: Yes' : 'Read: No'
        let delBtn = document.createElement('button')
        delBtn.classList.add('btn-delete')
        delBtn.textContent = 'Delete Book'
        let toggleBtn = document.createElement('button')
        toggleBtn.classList.add('btn-read')
        toggleBtn.dataset.btnId = `${index}` 
        pRead.dataset.btnId = `book:${index}`
        toggleBtn.textContent = 'Read Toggle'
        
        bookDiv.appendChild(h3Element)
        bookDiv.appendChild(pAuthor)
        bookDiv.appendChild(pPages)
        bookDiv.appendChild(pRead)
        bookDiv.appendChild(delBtn)
        bookDiv.appendChild(toggleBtn)
        booksBox.appendChild(bookDiv)
    }) 
}
const delButton = document.getElementById('boxBooks')
// Deleting desired book using it's button 'data-id' attribute

    delButton.addEventListener('click', (e) => { 
    if (e.target.classList.contains('btn-delete')){
        let btn = e.target.dataset
        let btnId = btn.id
        const indexBook = booksList.findIndex(book => book.id === btnId)
        if (indexBook !== -1) {
            booksList.splice(indexBook, 1)
            booksBox.innerHTML = ''
        }
    }
// Toggling Read attribute 
    if (e.target.classList.contains('btn-read')){
        let btn = e.target.dataset
        let btnId = btn.btnId
        let toBeToggled = booksList[btnId]
        Book.prototype.toggleBtn(toBeToggled)
        booksBox.innerHTML = ''
    } showBooks()
})