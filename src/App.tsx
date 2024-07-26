import React from 'react';
import './App.css';
import {FooComponent} from "./FooComponent";

function App()
{
    return (
        <div className="App">
            {"Foo: "}<FooComponent/>
        </div>
    );
}

export default App;
