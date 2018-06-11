var assert = require('assert')
var Collector = require('../Collector.js')
var Store = require('../Store.js')
var Record = require('../Record.js')


describe('Collector', function () {

let collector;

beforeEach(function(){
    collector1 = new Collector(5000);
    collector2 = new Collector(40);
    store = new Store("World Records", "Kalamazoo", 100)
    record1 = new Record("Run The Jewels", "Run The Jewels: III", "Hip-Hop", 18);
    record2 = new Record("Dr. Dre", "The Chronic", "Hip-Hop", 13);
    record3 = new Record("Faithless", "Reverence", "Dance", 9);
    record4 = new Record("Soundgarden", "Superunknown", "Alt-Metal", 15);
    record5 = new Record("Van Morrison", "Into The Mystic", "Jazz", 25);
  })

  it("should have wallet", function(){
    assert.strictEqual(collector1.wallet, 5000);
  });

  it("should have an emplty record collection", function(){
    assert.strictEqual(collector2.collection.length, 0);
  });

  it("should add a record to collection", function(){
    collector1.addRecordToCollection(record1);
    collector1.addRecordToCollection(record2);
    assert.strictEqual(collector1.collection.length, 2);
  });

  it("should remove a record from collection", function(){
    collector1.addRecordToCollection(record1);
    collector1.addRecordToCollection(record2);
    collector1.removeRecordFromCollection(record1);
    assert.strictEqual(collector1.collection.length, 1);
  })

  it("should decrease wallet when buying a record", function(){
    collector1.buyRecord(record1);
    assert.strictEqual(collector1.wallet, 4982);
  });

  it("should increase wallet when selling a record", function(){
    collector2.sellRecord(record2);
    assert.strictEqual(collector2.wallet, 53);
  });

  it("shouldn't be able to buy a Record if he can't afford it", function(){
    collector2.buyRecord(record5);
    collector2.buyRecord(record1);
    assert.strictEqual(collector2.collection.length, 1);
  });

  it("should be able to view the total value of their collection", function(){
    collector1.buyRecord(record1);
    collector1.buyRecord(record2);
    collector1.buyRecord(record3);
    collector1.buyRecord(record4);
    collector1.buyRecord(record5);
    assert.strictEqual(collector1.collectionValue(), 80)

  });

  it("should be able to view the all records of a given Genre", function(){
    collector1.buyRecord(record1);
    collector1.buyRecord(record2);
    collector1.buyRecord(record3);
    assert.deepStrictEqual(collector1.findRecordsByGenre("Hip-Hop"), [record1, record2])

  });

  xit("should be able to view the total value of all records of a given Genre", function(){
    collector1.buyRecord(record1);
    collector1.buyRecord(record2);
    collector1.buyRecord(record3);
  });

  xit("should be able to view their most valuable record.", function(){

  });

  xit("should be able to sort their records by value. (ascending or descending)", function(){

  });

  xit("should be able to compare the value of their collection with another RecordCollector", function(){
  });

})
