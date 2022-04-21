import React from 'react'
import { getAirportByCode } from '../data'

const Map = ({ routes }) => {
  const getCoords = (route) => {
    const { long: x1, lat: y1 } = getAirportByCode(route.src)
    const { long: x2, lat: y2} = getAirportByCode(route.dest)
    return { x1, y1, x2, y2 }
  }

  const mapRoutes = routes.map(route => getCoords(route))

  return (
    <svg className="map" viewBox="-180 -90 360 180">
      <g transform="scale(1 -1)">
        <image xlinkHref="equirectangular_world.jpg" href="equirectangular_world.jpg" x="-180" y="-90" height="100%" width="100%" transform="scale(1 -1)"/>
        
        {mapRoutes.map(({x1, y1, x2, y2 }, i) => {
          return (
            <g key={i}>
            <circle className="source" cx={x1} cy={y1}>
              <title></title>
            </circle> 
            <circle className="destination" cx={x2} cy={y2}>
              <title></title>
            </circle>
            <path d={`M${x1} ${y1} L ${x2} ${y2}`} />
          </g>
          )
        })}
      </g>
    </svg>
  )
}

export default Map