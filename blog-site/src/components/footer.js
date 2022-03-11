import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div>
        <h1 className="text-green-700 font-bold underline">Leikash Blog</h1>
        We wish fruitful life, { (new Date()).getFullYear() }
      </div>
    </footer>
  )
}

export default Footer