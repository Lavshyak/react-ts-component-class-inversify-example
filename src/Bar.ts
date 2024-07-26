import {injectable} from "inversify";
import { makeAutoObservable } from "mobx"

@injectable()
export class Bar {
    private _v : string
    constructor(v : string)
    {
        this._v = v
        makeAutoObservable(this) // есть еще аттрибуты/функции, которыми можно заменить это, см. доку к mobx (mobx-react)
    }

    public get V() : string
    {
        return this._v
    }

    public set V(v : string)
    {
        this._v = v
    }
}