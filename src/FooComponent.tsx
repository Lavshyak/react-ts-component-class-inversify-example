import {resolve, useInjection} from "inversify-react";
import {Bar} from "./Bar";
import {Component} from "react";
import SERVICE_IDENTIFIER from "./identifiers";

//it works
export class FooComponent extends Component
{
    @resolve(SERVICE_IDENTIFIER.BAR)
    private readonly bar!: Bar

    render()
    {
        console.log("bar value: " + this.bar.v);
        return (<div>bar value: {this.bar.v}</div>)
    }
}

//it works
export function FooComponent1()
{
    const bar = useInjection<Bar>(SERVICE_IDENTIFIER.BAR);
    return (<div>bar value: {bar.v}</div>)
}