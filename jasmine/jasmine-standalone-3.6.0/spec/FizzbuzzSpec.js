describe ("JavaBuzz", function() {

  var fizzbuzz;

  describe('knows when a number is', function() {

    it ("Returns fizz when the number is divisble by 3", function() {
      fizzbuzz = new JavaBuzz();
      expect(fizzbuzz.fizzBuzz(3)).toEqual('fizz');
    });

  });

});