const Store = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];

};

Store.prototype.addRecordToInventory = function (record) {
  this.inventory.push(record);
}

Store.prototype.listInventory = function(){
 return this.inventory.map(function(record){
   return record.showRecordPropertiesAsString();
 });

}
module.exports = Store;
