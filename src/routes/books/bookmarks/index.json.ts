	import { Configurator } from '../../../bookshelf/hands/configurator';

	let configurator = new Configurator();
	let bookmarkHand = configurator.getBookmarkHand();

export function get(req, res, next) {
	let bookmarks = bookmarkHand.getBookmarkStorage();
	console.log(bookmarks);
	if (bookmarks) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify(bookmarks));
		
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
