import React from "react";
import "./DropDown.css";

export const DropDown = (props) => {
  const [type, setType] = [props.type, props.setType];

  return (
    <>
      <div className="drop-down__inner">
      <label htmlFor="insertId"><h2>Question 1</h2>
        <div className="drop-down__inner-select">
          <select
            id="insertId"
            onChange={(event) => setType(event.target.value)}
            value={type}
          >
            <option label="select" value="" disabled>Select</option>
            <option label={props.option1} value={props.option1}> {props.option1} </option>
            <option label={props.option2} value={props.option2}> {props.option2} </option>
            <option label={props.option3} value={props.option3}> {props.option3} </option>
            <option label={props.option4} value={props.option4}> {props.option4} </option>
            <option label={props.option5} value={props.option5}> {props.option5} </option>
          </select>
        </div>
        </label>
        </div>
    </>
  );
};
