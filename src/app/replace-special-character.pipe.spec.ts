import { ReplaceSpecialCharacterPipe } from './replace-special-character.pipe';

describe('ReplaceSpecialCharacterPipe', () => {
  let replaceSpecialCharacterPipe: ReplaceSpecialCharacterPipe;

  beforeEach(() => {
    replaceSpecialCharacterPipe = new ReplaceSpecialCharacterPipe();
  });

  it('create an instance', () => {
    const pipe = new ReplaceSpecialCharacterPipe();
    expect(pipe).toBeTruthy();
  });

  //! 1.

  it(' It should return the original string if the second argument passed is not a special character', () => {
    const inputString = 'Test String';
    const specialCharacter = '@';
    const output = replaceSpecialCharacterPipe.transform(
      inputString,
      specialCharacter
    );
    expect(output).toEqual(inputString);
  });

  //! 2.

  it('It should replace the special character in string to the specified character', () => {
    const inputString = 'Test string with special character #';
    const specialCharacter = '%';
    const output = replaceSpecialCharacterPipe.transform(
      inputString,
      specialCharacter
    );
    expect(output).toEqual('Test string with special character %');
  });

  //! 3.
  it('It should return the original string when second argument is not passed', () => {
    const inputString = 'Test string with special character %';
    const specialCharacter = '';
    const output = replaceSpecialCharacterPipe.transform(
      inputString,
      specialCharacter
    );
    expect(output).toEqual(inputString);
  });

  //! 4.
  it('It should handle multiple special characters in the input string', () => {
    const inputString = 'Test string with multiple special character @ and #';
    const specialCharacter = '$';
    const output = replaceSpecialCharacterPipe.transform(
      inputString,
      specialCharacter
    );
    expect(output).toEqual(
      'Test string with multiple special character $ and $'
    );
  });


});
