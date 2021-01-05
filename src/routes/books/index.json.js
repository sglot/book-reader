import { Configurator } from '../../bookshelf/hands/configurator';

let configurator = new Configurator();
let bookRepository = configurator.getBookRepository();
let bookList = bookRepository.getBookList();

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(bookList));
}