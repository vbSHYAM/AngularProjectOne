// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'replaceSpecialCharacter'
// })
// export class ReplaceSpecialCharacterPipe implements PipeTransform {

//   //arg1 : string , arg2 : Spl character to be replaced with
//   transform(value: string, replaceWith:string=' '): string {

// // SPL characters
//     const regexPattern = /[!-@#$%^&*(),.?":{}|<>]/g

//     // replace the SPL character with the specified character
//    const replaceSplCharacter = value.replace(regexPattern,replaceWith)

//     return replaceSplCharacter;
//   }

// }
// -----------------------------------------------------------

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpecialCharacter',
})
export class ReplaceSpecialCharacterPipe implements PipeTransform {
  //arg1 : string , arg2 : Spl character to be replaced with
  transform(value: string, replaceWith: string = ' '): string {

    //matches any character that is not a character or white space character
    const regexPattern = /[^\w\s]/gi;
    if(regexPattern.test(replaceWith)){
      return value.replace(regexPattern,replaceWith)
    }else{
      return value
    }
  }
}
