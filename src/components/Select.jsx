import React from 'react'

const Select = ({ options, onSelect, allTitle }) => {
  const handleChange = (event) => {
    event.preventDefault();
    onSelect(event.target.value);
  };

  const createOptions = options.map((option, i) => {
    return <option key={i} value={option.id} disabled={!option.active}>{option.name}</option>
  });
  createOptions.unshift(<option key="all" value="all">{allTitle}</option>)

  return (
    <div>
      <p>
        Show routes on
        <select
          onChange={handleChange}>
            {createOptions}
        </select>
      </p>
    </div>
  )
}

export default Select