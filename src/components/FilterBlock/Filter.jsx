import React from 'react'
import './Filter.css'

function Filter({ onSort }) {
  return (
    <div className='filter-block'>
      <ul>
        <li onClick={() => onSort('low')}>
          <input type="radio" name='price' value="lowToHigh" />
          Price - Low to High
        </li>
        <li onClick={() => onSort('high')}>
          <input type="radio" name='price' value="highToLow" />
          Price - High to Low
        </li>
      </ul>
    </div>
  )
}

export default Filter


////