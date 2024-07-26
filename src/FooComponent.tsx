import {resolve, useInjection} from "inversify-react";
import {Bar} from "./Bar";
import React, {Component, FC} from "react";
import SERVICE_IDENTIFIER from "./identifiers";
import {observer} from 'mobx-react';

//import {observable} from "mobx";

@observer
export class FooComponent1 extends Component
{
    //@observable //это можно не писать как я понял
    @resolve(SERVICE_IDENTIFIER.BAR)
    private readonly bar!: Bar

    //если бы не this.textAreaDefaultValue = this.bar.V, то можно было бы не писать конструктор
    constructor(p: any, c: any)
    {
        super(p, c);
        //на этом моменте this.bar != undefined
        this.textAreaDefaultValue = this.bar.V
    }

    private readonly textAreaDefaultValue: string = "";


    render()
    {
        return (
            <>
                <div>bar value: {this.bar.V}</div>
                <div>
                    <textarea defaultValue={this.textAreaDefaultValue}
                              onChange={e =>
                              {
                                  this.bar.V = e.target.value
                              }}
                    />
                </div>
            </>
        )
    }
}

// поведение как у класса выше, но кринж какой-то. еще не понятно, как от этого зависеть
// в каком-нибудь другом компоненте или обычном классе
// можно не указывать ": FC", из интереса указал
export const FooComponent : FC = observer(() =>
{
    const bar = useInjection<Bar>(SERVICE_IDENTIFIER.BAR);
    const textAreaDefaultValue = bar.V //не нашел, как посчитать textAreaDefaultValue только 1 раз

    return (
        <>
            <div>bar value: {bar.V}</div>
            <div>
                    <textarea defaultValue={textAreaDefaultValue}
                              onChange={e =>
                              {
                                  bar.V = e.target.value
                              }}
                    />
            </div>
        </>
    )
})
