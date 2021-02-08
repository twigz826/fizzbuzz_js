describe ("JavaBuzz", function() {

  var number;

  beforeEach(function() {
    number = new JavaBuzz();
  });

  describe('knows when a number is', function() {

    it ("returns fizz when the number is divisble by 3", function() {
      expect(number.fizzBuzz(6)).toEqual('fizz');
    });

    it ("returns buzz when the number is divisible by 5", function() {
      expect(number.fizzBuzz(5)).toEqual('buzz');
    });

    it ("returns fizzbuzz when the number is divisible by 15", function() {
      expect(number.fizzBuzz(15)).toEqual('fizzbuzz');
    });

    it ("returns the number when the number is not divisible by 3, 5 or 15", function() {
      expect(number.fizzBuzz(2)).toEqual(2);
    });

  });

});
