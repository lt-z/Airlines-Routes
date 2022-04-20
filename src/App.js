import React from 'react'
import DATA, { getAirlineById, getAirportByCode } from './data'
import Table from './components/Table'
import './App.css'

const App = () => {
  const routes = DATA.routes

  const formatValue = (property, value) => {
    if (property === 'airline') {
      return getAirlineById(value).name
    }
    return getAirportByCode(value).name
  }

  const columns = [
    { name: 'Airline', property: 'airline' },
    { name: 'Source Airport', property: 'src' },
    { name: 'Destination Airport', property: 'dest' },
  ]

  return (
    <div className='app'>
      <header className='header'>
        <h1 className='title'>Airline Routes</h1>
      </header>
      <section>
        <p>Welcome to the app!</p>
        <Table
          className='routes-table'
          routes={routes}
          columns={columns}
          format={formatValue}
        />
      </section>
    </div>
  )
}

export default App
