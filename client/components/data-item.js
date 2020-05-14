//  НЕ РАБОТАЕТ СМ. DUMMY

import React from 'react'

const DataItem = (props) => {
  const { id, firstName, lastName, age, active } = props
  console.log('props', props)// eslint-disable-line

  return (
    <div className="flex flex-row justify-around text-center">
      <div className="border border-solid border-gray-800 min-w-56 text-black font-bold shadow-lg p-2 m-2">
        <input
          type="checkbox"
          checked={active}
          id={id}
          // onChange={getInputChecked} // eslint-disable-line
        />
      </div>
      <div className="border border-solid border-gray-800 min-w-150 text-black font-bold shadow-lg p-2 m-2">
        {firstName}
      </div>
      <div className="border border-solid border-gray-800 min-w-200 text-black font-bold shadow-lg p-2 m-2">
        {lastName}
      </div>
      <div className="border border-solid border-gray-800 min-w-66 text-black font-bold shadow-lg p-2 m-2">
        {age}
      </div>
    </div>
  )
}

export default DataItem
