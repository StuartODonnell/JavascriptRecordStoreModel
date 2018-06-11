const Collector = function(wallet){
  this.wallet = wallet;
  this.collection = [];
};

Collector.prototype.addRecordToCollection = function(record){
this.collection.push(record);

};

Collector.prototype.removeRecordFromCollection = function(record){
let index = this.collection.indexOf(record);
if(index > -1){
  this.collection.splice(index,1);
}

};

Collector.prototype.buyRecord = function(record){
  if (this.wallet >= record.price){
    this.collection.push(record);
    return this.wallet -= record.price;
}
};

Collector.prototype.sellRecord = function(record){
  return this.wallet += record.price;
};

Collector.prototype.collectionValue = function(){
  return this.collection.reduce( (accumulator, record) =>
{return accumulator += record.price}, 0)
};



module.exports = Collector;
