import BookmarkHandBase from "../../../bookshelf/hands/bookmark/bookmarkHandBase";
import LocalStorageBookmarkHand from "../../../bookshelf/hands/bookmark/LocalStorageBookmarkHand";

let bookmarkHand = LocalStorageBookmarkHand.getHand();

export function get(req, res, next) {
	let bookmarks = bookmarkHand.getBookmarkStorage();

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
