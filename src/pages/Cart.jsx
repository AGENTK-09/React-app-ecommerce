import React from 'react'
import { Samplenav } from '../components/Samplenav'

export const Cart = () => {
  return (
    <div>
        <Samplenav/>
        <div className='cart'>
          <div>
            <h1>Your Cart Items</h1>
          </div>
        </div>
    </div>
  )
}
