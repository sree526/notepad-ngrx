import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(notes: any[], text?: any): any {
    console.log(notes);
    if(!notes) return [];
    if(!text) return notes;
text = text.toLowerCase();
return notes.filter( it => {
      return it.notes.toLowerCase().includes(text);
    });
  }

}
