import React from 'react'
import Card from './card'

const hero = () => {
  return (
    <div className='hero flex gap-2 m-5 mt-15 flex-col lg:flex-row items-center '>
      <Card className="bg-amber-700" />
      <Card className="bg-amber-700" />
      <Card className="bg-blue-600" />
    </div>
  );
}

export default hero