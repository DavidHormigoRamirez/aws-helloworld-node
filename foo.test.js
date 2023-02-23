const foo = require('./foo');

test("foobar test", () => {
    // arrange and act
    let expected = 5;
    var actual = foo(10)
    
    // assert
    expect(actual).toBe(expected);
});