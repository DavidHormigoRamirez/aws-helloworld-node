const foo = require('./math.js');

test("foobar test", () => {
    // arrange and act
    var result = foo(10)
    
    // assert
    expect(result).toBe(10);
});