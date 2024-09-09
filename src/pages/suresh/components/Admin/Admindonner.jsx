import React from 'react'
import "./Admindonner.css"

const Admindonner = () => {
  return (
    <div class="ad-donner-container">
    <h1>DONORS LIST</h1>
    <div class="ad-donner-table-container">
      <table className='ad-donner-table'>
        <thead className='ad-donner-thead'>
          <tr>
            <th className='d-th'>NAME</th>
            <th className='d-th'>CITY</th>
            <th className='d-th'>AREA</th>
            <th className='d-th'>CONTACT NUMBER</th>
            <th className='d-th'>BLOOD GROUP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='d-td'></td>
            <td className='d-td'></td>
            <td className='d-td'></td>
            <td className='d-td'></td>
            <td className='d-td'></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="ad-donner-download-button">
      <button className='ad-don-btn'>DOWNLOAD</button>
    </div>
  </div>
  )
}

export default Admindonner
