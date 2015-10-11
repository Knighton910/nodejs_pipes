var fs = require('fs');
var zlib = require('zlib');
// zlib compressing files.

var readable = fs.createReadStream(__dirname+
   '/words.txt');

var writable = fs.createWriteStream(__dirname+
  '/newWords.txt')

var compressed = fs.createWriteStream(__dirname+
  '/copy.txt.gz')

var gzip = zlib.createGzip();

readable.pipe(writable)

readable.pipe(gzip).pipe(compressed)
