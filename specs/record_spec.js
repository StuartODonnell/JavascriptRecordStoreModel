var assert = require('assert')
var Record = require('../Record.js')



describe('Array tasks', function () {

let record;

beforeEach(function(){
    record1 = new Record("Fugees", "The Score", "Hip-Hop", 10);
    record2 = new Record("Cypress Hill", "Black Sunday", "Hip-Hop", 13);
    record3 = new Record("Prodigy", "Music For A Jilted Generation", "Dance", 9);
    record4 = new Record("Beck", "Odelay", "Alternative", 15);
  })

it("should have an artist", function(){
assert.strictEqual(record1.artist, "Fugees");
});

it("should have a title", function(){
assert.strictEqual(record2.title, "Black Sunday");
})
xit("should have a genre", function(){

})
xit("should have a price", function(){

})











})
