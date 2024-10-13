import React from 'react'
import Category from "./Sidebar/Category/Category"
import Price from "./Sidebar/Price/Price"
import Colors from "./Sidebar/Colors/Colors"
import "./Sidebar.css";

export default function Sidebar({handleChange}) {
  return (
   <>
       <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
   </>
  )
}
