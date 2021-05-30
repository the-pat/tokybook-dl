import processInput from '../../src/cli/processInput';

describe('processing inputs', () => {
  describe('integer', () => {
    describe('should throw when', () => {
      const actCallbackBy = (argument: string) => () => processInput.integer(argument);
      it('given a letter', () => {
        // arrange
        const argument = 'A';

        // act
        const actCallback = actCallbackBy(argument);

        // assert
        expect(actCallback).toThrow();
      });

      it('given a symbol', () => {
        // arrange
        const argument = '@';

        // act
        const actCallback = actCallbackBy(argument);

        // assert
        expect(actCallback).toThrow();
      });

      it('given whitespace', () => {
        // arrange
        const argument = ' ';

        // act
        const actCallback = actCallbackBy(argument);

        // assert
        expect(actCallback).toThrow();
      });
    });

    it('should give an integer as input when the argument in a string integer', () => {
      // arrange
      const argument = '1';
      const expected = 1;

      // act
      const actual = processInput.integer(argument);

      // assert
      expect(actual).toBe(expected);
    });

    it('should give a floored integer when the argument is a floating-point string number', () => {
      // arrange
      const argument = '1.9';
      const expected = 1;

      // act
      const actual = processInput.integer(argument);

      // assert
      expect(actual).toBe(expected);
    });
  });
});
