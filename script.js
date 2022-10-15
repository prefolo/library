const myLibrary = [];

function Book(title, author, pagesCount, isRead) {
	this.title = title;
	this.author = author;
	this.pagesCount = pagesCount;
	this.isRead = isRead;

	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pagesCount} pages, ${
			this.isRead ? 'read' : 'not read yet'
		}`;
	};
}

function addBookToLibrary(title, author, pagesCount, isRead) {
	myLibrary.push(new Book(title, author, pagesCount, isRead));
}

function displayLibrary() {
	const container = document.querySelector('#cards-container');
    
    let cardCode = '';

	for (const book of myLibrary) {
		cardCode += `<div class="card"><button class="delete-btn"><svg viewBox="0 0 24 24">
		<path fill="currentColor" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
	</svg></button><div class="title">${book.title}</div><div class="book-properties-grid"><div class="property">Author</div><div>${ book.author }</div><div class="property">Pages</div><div>${book.pagesCount}</div><div class="property">Read</div><input type="checkbox" ${ book.isRead ? 'checked' : '' }></div></div>`;
	}

	container.innerHTML = cardCode;
}

function showFormForCreateNewBook() {
	document.querySelector('#overlay').style.display = "grid";
}

function cancelForm() {
	document.querySelector('#overlay').style.display = "none";
	
	document.querySelector('#newbook-title').value = '';
	document.querySelector('#newbook-author').value = '';
	document.querySelector('#newbook-pages').value = 1;
	document.querySelector('#newbook-isRead').checked = false;
}

function saveBook() {
	const title = document.querySelector('#newbook-title').value;
	const author = document.querySelector('#newbook-author').value;
	const pages = document.querySelector('#newbook-pages').value;
	const isRead = document.querySelector('#newbook-isRead').checked;

	if( !( title && author ) ) return;

	addBookToLibrary(title, author, pages, isRead);
	displayLibrary();
	cancelForm();
}


document.querySelector('#showFormForCreateNewBookBttn').addEventListener('click',showFormForCreateNewBook);
document.querySelector('#saveBookBttn').addEventListener('click',saveBook);
document.querySelector('#cancelForm').addEventListener('click',cancelForm);





addBookToLibrary('Odyssey', 'Homer', 344, false);
addBookToLibrary('Divine Comedy', 'Dante Aligheri', 520, false);
addBookToLibrary('Iliad', 'Homer', 210, true);

console.table(myLibrary);
displayLibrary();