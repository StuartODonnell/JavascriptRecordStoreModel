var assert = require('assert')
var Record = require('../Collector.js')
var Record = require('../Store.js')
var Record = require('../Record.js')




describe('Collector', function () {

let collector;

beforeEach(function(){
    collector1 = new Collector(50);
    collector2 = new Collector(40);
    store = new Store("World Records", "Kalamazoo", 100)
    record1 = new Record("Run The Jewels", "Run The Jewels: III", "Hip-Hop", 18);
    record2 = new Record("Dr. Dre", "THe Chronic", "Hip-Hop", 13);
    record3 = new Record("Faithless", "Reverence", "Dance", 9);
    record4 = new Record("The Offspring", "Ixnay On The Hombre", "Alternative", 15);
    record5 = new Record("Van Morrison", "Into The Mystic", "Jazz", 25);
  })

  xit("should have cash that increase and decreases with buying and selling", function(){

  });
  xit("shouldn't be able to buy a Record if he can't afford it", function(){

  });
  xit("should be able to view the total value of their collection", function(){

  });
  xit("should be able to view the total value of all records of a given Genre", function(){

  });
  xit("should be able to view their most valuable record.", function(){

  });
  xit("should be able to sort their records by value. (ascending or descending)", function(){

  });
  xit("should be able to compare the value of their collection with another RecordCollector", function(){
  });
