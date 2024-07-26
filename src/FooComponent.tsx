import {useInjection} from "inversify-react";
import {Bar} from "./Bar";
import {Component} from "react";
import SERVICE_IDENTIFIER from "./identifiers";
import container from "./ioc_config";
import getDecorators from "inversify-inject-decorators";

const {lazyInject} = getDecorators(container);
console.log(JSON.stringify(lazyInject))

//it doesn't work
export class FooComponent extends Component
{
    @lazyInject(SERVICE_IDENTIFIER.BAR)
    private readonly bar!: Bar

    render()
    {
        //this.bar is undefined
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