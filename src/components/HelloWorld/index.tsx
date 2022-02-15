import React from "react";
import {createStore} from "redux";

import counterReducer from "../../reducer";

const store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

const HelloWorld = () => (
    <>
        <h1>Hello World</h1>

        <hr />

        <h3>Environmental variables:</h3>
        <p>
            process.env.PRODUCTION: <b>{process.env.PRODUCTION.toString()}</b>
        </p>
        <p>
            process.env.NAME: <b>{process.env.NAME}</b>
        </p>
        <p>
            process.env.VERSION: <b>{process.env.VERSION}</b>
        </p>

        <p>
            <button
                onClick={() => {
                    store.dispatch({type: "counter/incremented"});
                }}
            >
                Increment
            </button>
        </p>
    </>
);

export default HelloWorld;
