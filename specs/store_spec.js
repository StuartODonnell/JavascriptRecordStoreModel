var assert = require('assert')
var Store = require('../Store.js')
var Record = require('../Record.js')

describe('Store', function () {
let store;
let record;

beforeEach(function(){
    store = new Store("World Records", "Kalamazoo", 100)
    record1 = new Record("Fugees", "The Score", "Hip-Hop", 10);
    record2 = new Record("Cypress Hill", "Black Sunday", "Hip-Hop", 13);
    record3 = new Record("Prodigy", "Music For A Jilted Generation", "Dance", 9);
    record4 = new Record("Beck", "Odelay", "Alternative", 15);
    record5 = new Record("1", "2", "3", 4)
  })

it("should have a name", function(){
assert.strictEqual(store.name, "World Records");
});

it("should have a city", function(){
assert.strictEqual(store.city, "Kalamazoo");
})

it("should have an empty inventory", function(){
assert.strictEqual(store.inventory.length, 0);
})

it("should add a record to a store inventory", function(){
  store.addRecordToInventory(record1);
  assert.strictEqual(store.inventory.length, 1);
})

it("should have a balance", function(){
  assert.strictEqual(store.balance, 100);
})

it("should return inventory as a list", function(){

  store.addRecordToInventory(record1);
  store.addRecordToInventory(record2);
  store.addRecordToInventory(record3);
  store.addRecordToInventory(record4);
  store.addRecordToInventory(record5);

  assert.deepStrictEqual(store.listInventory(), [record1.showRecordPropertiesAsString(), record2.showRecordPropertiesAsString(), record3.showRecordPropertiesAsString(), record4.showRecordPropertiesAsString(), record5.showRecordPropertiesAsString()])
})

it('balance can increase when selling record', function() {
  store.balance = 0;
  store.sellRecord(record1);
  assert.strictEqual(store.balance, 10);


})

})
