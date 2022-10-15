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

addBookToLibrary('Odyssey', 'Homer', 344, false);
addBookToLibrary('Divine Comedy', 'Dante Aligheri', 520, false);
addBookToLibrary('Iliad', 'Homer', 210, true);

console.table(myLibrary);