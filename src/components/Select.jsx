import React from 'react'

const Select = ({ options, onSelect, allTitle, value }) => {
  const handleChange = (event) => {
    event.preventDefault();
    onSelect(event.target.value);
  };

  const createOptions = options.map((option, i) => {
    return <option key={i} value={option.id || option.code} disabled={!option.active}>{option.name}</option>
  });
  createOptions.unshift(<option key="all" value="all" defaultValue>{allTitle}</option>)

  return (
    <select
      value={value}
      onChange={handleChange}>
        {createOptions}
    </select>
  )
}

export default Select