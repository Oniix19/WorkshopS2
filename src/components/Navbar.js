import React from 'react'
import { Star } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const Navbar = ({ data, onSendTime, restartData }) => {
  const sendTime = (e) => {
    const getTime = new Date(e.target.value).getTime()
    onSendTime(getTime)
  }

  return (
    <div>
      <div className='dateDiv'>
        {
          data.map((reg, index) =>
          (
            <div className="dateCont" key={index}>
              <button className='dateBtn' type='button' onClick={sendTime} value={reg.date}>{new Date(reg.date).toDateString()}</ button>
            </div>
          )
          )
        }
      </div>

    </div>
  )
}

export default Navbar