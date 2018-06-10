const Store = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];

};

Store.prototype.addRecordToInventory = function (record) {
  this.inventory.push(record);
}
module.exports = Store;
