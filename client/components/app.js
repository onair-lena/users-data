//  НЕ РАБОТАЕТ СМ. DUMMY

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from './head'
import DataItem from './data-item'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios('https://randomuser.me/api/?results=10').then((item) => {
      setUsers(item.data.results)
    })
  }, [])// eslint-disable-line

  const checkArray = users.map((it, index) => {
    return {
      id: `checkbox${index}`,
      firstName: it.name.first,
      lastName: it.name.last,
      age: it.dob.age,
      active: false
    }
  })

  // console.log(users)// eslint-disable-line

  return (
    <div className="w-3/4 border border-solid border-gray-800">
      <Head title="Hello" />
      <div className="items-center">
        <div className="flex flex-row justify-around text-center bg-gray-300">
          <div className="border border-solid border-gray-800 bg-gray-400 min-w-56 text-black font-bold shadow-lg p-2 m-2">
            <input type="checkbox" className="text-center" />
          </div>
          <div className="border border-solid border-gray-800 bg-gray-400 min-w-150 text-black font-bold shadow-lg p-2 m-2">
            First Name
          </div>
          <div className="border border-solid border-gray-800 bg-gray-400 min-w-200 text-black font-bold shadow-lg p-2 m-2">
            Second Name
          </div>
          <div className="border border-solid border-gray-800 bg-gray-400 min-w-66 text-black font-bold shadow-lg p-2 m-2">
            Age
          </div>
        </div>
      </div>
      {checkArray.map((it) => (
        <DataItem data={it} />
      ))}
      <div className="bg-gray-300 w-full text-black font-bold shadow-lg p-4">
        users checked: {111}
      </div>
    </div>
  )
}

export default App
