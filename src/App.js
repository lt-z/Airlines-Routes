import React from 'react'
import DATA, { getAirlineById, getAirportByCode } from './data'
import Table from './components/Table'
import './App.css'

const App = () => {
  const routes = DATA.routes.map((route) => {
    return {
      airline: getAirlineById(route.airline).name,
      src: getAirportByCode(route.src).name,
      dest: getAirportByCode(route.dest).name,
    }
  })

  const cols = [
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
        <Table routes={routes} cols={cols} />
      </section>
    </div>
  )
}

export default App
