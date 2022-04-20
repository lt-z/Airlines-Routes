import React, { useState } from 'react'
import DATA, { getAirlineById, getAirportByCode } from './data'
import Table from './components/Table'
import Select from './components/Select'
import './App.css'

const App = () => {
  const [airline, setAirline] = useState('all')
  const [airport, setAirport] = useState('all')

  const filteredRoutes = DATA.routes.filter((route) => {
    return (
      (route.airline === airline || airline === 'all') &&
      (route.src === airport || route.dest === airport || airport === 'all')
    )
  })

  const filteredAirlines = DATA.airlines.map((airline) => {
    const active = !!filteredRoutes.find(
      (route) => route.airline === airline.id
    )
    return { ...airline, active }
  })

  const filteredAirports = DATA.airports.map((airport) => {
    const active = !!filteredRoutes.find(
      (route) => route.src === airport.code || route.dest === airport.code
    )
    return { ...airport, active }
  })

  const selectAirline = (value) => {
    if (value !== 'all') {
      value = Number(value)
    }
    setAirline(value)
  }

  const selectAirport = (value) => setAirport(value)

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
        <p>
          Show routes on
          <Select
            options={filteredAirlines}
            onSelect={selectAirline}
            allTitle='All Airlines'
          />
          flying in or out of
          <Select
            options={filteredAirports}
            onSelect={selectAirport}
            allTitle='All Airports'
          />
        </p>

        <Table
          className='routes-table'
          routes={filteredRoutes}
          columns={columns}
          format={formatValue}
        />
      </section>
    </div>
  )
}

export default App
