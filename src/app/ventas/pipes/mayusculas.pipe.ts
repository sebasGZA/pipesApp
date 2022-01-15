import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayuscula'
})
export class MayusculaPipe implements PipeTransform {

    transform(value: string, enMayuscula: boolean = true): string {
        return enMayuscula ? value.toUpperCase() : value.toLowerCase()
    }

}