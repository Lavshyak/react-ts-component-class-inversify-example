import {injectable} from "inversify";

@injectable()
export class Bar {
    public v : string
    constructor(v : string)
    {
        this.v = v
    }
}