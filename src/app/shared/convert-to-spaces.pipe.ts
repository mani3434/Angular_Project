import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform{
    transform (i:string,c:string):string{
            return i.replace(c,' ');
    }
}