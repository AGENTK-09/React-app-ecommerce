import React, { useState } from 'react'
import { Samplenav } from '../components/Samplenav'
import { Products } from '../products'
import { Productcard } from '../components/Productcard'
import '../styles/Home.css'


export const Home = () => {
    // const [data,setData] = useState(Products)
  return (
    <div>
        <div><Samplenav/></div>
        <div className="Home">
            <div className="hometitle">
                <h1>Scamazon</h1>
            </div>
            <div className="Products">
                {
                    Products.map((product) => (
                        <div key={product.id}>
                          <Productcard data={product} />
                        </div>
                      ))
                }
            </div>
        </div>
    </div>
  )
}
