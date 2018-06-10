const Store = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];

}

Store.prototype.addRecordToInventory = function (record) {
  this.inventory.push(record);
};

Store.prototype.listInventory = function(){
 return this.inventory.map(function(record){
   return record.showRecordPropertiesAsString();
 })
};

Store.prototype.sellRecord = function(record){
  return this.balance += record.price;
};


Store.prototype.calculatedValue = function () {
  return this.inventory.reduce( (accumulator, record) =>
  { return accumulator += record.price }, this.balance )
};

Store.prototype.findByGenre = function (genre) {
  return this.inventory.filter( record => record.genre
    === genre)
};


module.exports = Store;
