import React, { useState } from 'react';
import { Slider } from "react-semantic-ui-range";
import { Label } from "semantic-ui-react";

function TwoSlider() {
    const [twoValues, setTwoValues] = useState([2, 5]);
    const settings = {
        start: [2, 4],
        min: 0,
        max: 20,
        step: 1,
        onChange: value => {
            setTwoValues(value);
        }
    };

    return (
        <React.Fragment>
            <Slider discrete multiple color="red" settings={settings} />
            {
                twoValues.map((val, i) => (
                    <Label color="black" content={val} key={i} />
                ))
            }
        </React.Fragment>

    );
}

