const Collector = function(wallet){
  this.wallet = wallet;
  this.collection = [];
};

Collector.prototype.addRecordToCollection = function(record){
this.collection.push(record);

}

// Collector.protoype.buyRecord = function(record){
//   return this.wallet -= record.price;
// };

// Collector.protoype.sellRecord = function(record){
//   return this.wallet += record.price;
// };





module.exports = Collector;
