var mg = require('mongoose');

var bookSchema = mg.Schema({
	name: String,
	author: String
});

var books = module.exports = mg.model('books', bookSchema);

module.exports.getbooks = function(callback, limit){
	books.find(callback).limit(limit);
};


