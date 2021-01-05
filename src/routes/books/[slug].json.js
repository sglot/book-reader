	import Hand from '../../bookshelf/hands/hand';
	import { Configurator } from '../../bookshelf/hands/configurator';

	let configurator = new Configurator();
	let hand = new Hand(configurator.getBookRepository());
	let bookList = hand.getBookList();

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	let book = hand.getBook(slug); 

	if (book) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify(book));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
