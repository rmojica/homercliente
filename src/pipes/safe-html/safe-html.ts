import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SafeHtmlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(Unixdate:number) {
   let f =  new Date(Unixdate * 1000).toISOString().slice(0, 19);

   console.log(f);
   return f;

  }

}
