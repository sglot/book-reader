import BookHand from '../../bookshelf/hands/book/bookHand';

let hand = BookHand.getHand();
let bookList = hand.getBookList();

export function get(req, res) {

	if (bookList) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify(bookList));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}