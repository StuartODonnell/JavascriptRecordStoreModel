const Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
};

Record.prototype.showRecordPropertiesAsString = function(record){
return this.artist+", " + this.title+", " + this.genre+", " + this.price;
}

module.exports = Record;
