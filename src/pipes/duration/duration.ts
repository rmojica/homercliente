import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DurationPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(concat:any, hourInit:any, hourEnd:any) {
    console.log(hourInit, hourEnd)
     // Expresión regular para comprobar formato
     var formatohora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

     // Si algún valor no tiene formato correcto sale
     if (!(hourInit.match(formatohora)
           && hourEnd.match(formatohora))){
       return;
     }

     // Calcula los minutos de cada hora
     var minutos_inicio = hourInit.split(':')
       .reduce((p, c) => parseInt(p) * 60 + parseInt(c));
     var minutos_final = hourEnd.split(':')
       .reduce((p, c) => parseInt(p) * 60 + parseInt(c));

     // Si la hora final es anterior a la hora inicial sale
     if (minutos_final < minutos_inicio) return;

     // Diferencia de minutos
     var diferencia = minutos_final - minutos_inicio;

     // Cálculo de horas y minutos de la diferencia
     var horas = Math.floor(diferencia / 60);
     var minutos = diferencia % 60;

     // return (horas + ':' + (minutos < 10 ? '0' : '') + minutos);
     console.log(concat + horas)
     return concat + horas
  }
}
