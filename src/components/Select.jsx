import React from 'react'

const Select = ({ options, onSelect, allTitle }) => {
  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    onSelect(event.target.value);
  };

  const createOptions = options.map((option, i) => {
    return <option key={i} value={option.id || option.code} disabled={!option.active}>{option.name}</option>
  });
  createOptions.unshift(<option key="all" value="all">{allTitle}</option>)

  return (
    <select
      onChange={handleChange}>
        {createOptions}
    </select>
  )
}

export default Select