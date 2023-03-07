import React from 'react'

function Card(props) {
  return (
    <section className={`card flex bg-slate-50 rounded-lg shadow-md ${props.className}`}>
      {props.children}
    </section>
  )
}

export default Card