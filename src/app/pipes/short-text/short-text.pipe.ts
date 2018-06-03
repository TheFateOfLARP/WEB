import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

    transform(str: string, id: number, strLength: number = 250): any {
        const withoutHtml = str.replace(/(<([^>]+)>)/gi, '');
        if (str.length >= strLength) {
            return `${withoutHtml.slice(0, strLength)}`;
        }
        return withoutHtml;
    }

}
