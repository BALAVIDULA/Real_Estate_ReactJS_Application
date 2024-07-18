import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-conatiner">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Homyz</span>
                <span className='secondaryText'>Subscribe and find super attractive price quotes from Homyz
                    <br />
                    Find your residence soon
                </span>
                <button className="button">
                    <a href='mailto:balavidulab@gmail.com'>Get started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted