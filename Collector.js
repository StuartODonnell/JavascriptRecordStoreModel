const Collector = function(wallet){
  this.wallet = wallet;
  this.collection = [];
};

Collector.prototype.addRecordToCollection = function(record){
this.collection.push(record);

}

Collector.prototype.removeRecordFromCollection = function(record){
let index = this.collection.indexOf(record);
if(index > -1){
  this.collection.splice(index,1);
}

}


Collector.prototype.buyRecord = function(record){
  return this.wallet -= record.price;
};

// Collector.protoype.sellRecord = function(record){
//   return this.wallet += record.price;
// };





module.exports = Collector;
