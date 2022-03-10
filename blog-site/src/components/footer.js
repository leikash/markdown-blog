import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div>
        <p className='text-gray-300'>
          We wish fruitful life, {(new Date()).getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer