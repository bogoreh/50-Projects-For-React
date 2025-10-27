import React from 'react'

const Vehicle = ({ type, position, size }) => {
  const getVehicleImage = () => {
    switch(type) {
      case 'car1': return '/images/car1.png'
      case 'car2': return '/images/car2.png'
      case 'truck': return '/images/truck.png'
      default: return '/images/car1.png'
    }
  }

  return (
    <div
      className={`vehicle ${type}`}
      style={{
        width: size * (type === 'truck' ? 3 : 2),
        height: size,
        left: position.x * size,
        top: position.y * size,
        backgroundImage: `url('${getVehicleImage()}')`
      }}
    />
  )
}

export default Vehicle