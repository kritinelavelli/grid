import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'uppercase'})
export class UpperCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}

@Pipe({name: 'lowercase'})
export class LowerCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase();
  }
}

@Pipe({name: 'internetcase'})
export class InternetCasePipe implements PipeTransform {
  transform(value: string): string {
    return [...value].reduce((accumulator, character, index) => accumulator += index % 2 ? character.toLowerCase() : character.toUpperCase());
  }
}