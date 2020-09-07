import classes from "./HorizontalRule.module.css";
import React from "react";

const HorizontalRule = (props) => {
    let className = "";

    const addPropToClassName = (propName, possibleValues, representationCharacter, defaultVal = null) => {
        if (props[propName] != null) {
            if (possibleValues.includes(props[propName])) {
                className = `${className} ${classes[`${representationCharacter}${props[propName]}`]}`;
            } else if (defaultVal != null) {
                className = `${className} ${classes[`${representationCharacter}${defaultVal}`]}`;
            } else {
                console.error(`${propName} prop should be one of ${possibleValues.join(', ')}.`);
            }
            className = `${className} ${classes[`${representationCharacter}${props[propName]}`]}`
        }
    }
    addPropToClassName("width", [1, 2, 3, 4, 5], "w");
    addPropToClassName("float", ["l", "r"], "f");
    addPropToClassName("height", [1, 2, 3, 4, 5], "height");

    return <hr className={className} />
};

export default HorizontalRule;