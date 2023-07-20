import React from "react";
import './FilterCheckbox.css'

function FilterCheckbox({ onChange, checked }) {
  return (
    <label className="switch">
      <input onChange={onChange} checked={checked} type="checkbox" name='isShortsMovie' id='switch' />
      <span className="switch__slider"></span>
    </label>
  )
}

export default FilterCheckbox;


