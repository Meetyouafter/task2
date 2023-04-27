import React, { useState } from 'react';
import "./App.css";

const suggestions = [
    "111",
    "222",
    "333",
    "444",
    "555",
    "666",
    "456",
    "112",
    "113",
    "114",
    "115",
    "116",
    "117",
    "121",
    "122",
    "123",
    "124",
    "125",
    "126",
    "127",
    "211",
    "212",
    "213",
    "214",
    "221",
    "223",
    "224",
]

const loadSuggestions = (value: string): Promise<Array<string>> =>
    new Promise<Array<string>>(resolve => {
        setTimeout(
            () => {
                resolve(suggestions.filter(suggestion => suggestion.includes(value)));
            },
            Math.random() * 3000
        );
    })

const Autosuggest: React.FC = () => {
    const [value, setValue] = useState("");

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setValue(evt.target.value);
    };

    return (
       <div className="pretty-autosuggest">
            <input
                value={value}
                onChange={onChange}
                className="pretty-input"
                type="text"
                autoFocus
            />
            <div className="suggestions-wrapper">
                <div className="suggestion">123123</div>
                <div className="suggestion">456456</div>
                <div className="suggestion">789789</div>
            </div>
        </div>
    );
}

const App: React.FC = () => {
    return <Autosuggest />;
}

export default App;
