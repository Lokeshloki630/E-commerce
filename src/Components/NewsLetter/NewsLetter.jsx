import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newslettet'>
        <h1>Get Exclusive Offers O Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email Id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter