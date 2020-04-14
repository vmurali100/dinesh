import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchuser",
})
export class SearchuserPipe implements PipeTransform {
  transform(value: [], ...args): unknown {
    if (args[0]) {
      return value.filter((obj: any) => {
        return obj["email"].indexOf(args[0]) > -1;
      });
    }
    return value;
  }
}
