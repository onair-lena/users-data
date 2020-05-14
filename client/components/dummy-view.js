import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import Head from './head'

const DummyView = () => {
  const [users, setUsers] = useState([])

  const getUsers = () =>
    axios('https://randomuser.me/api/?results=10')
      .then((item) => item.data.results)
      .then((item2) =>
        setUsers(
          item2.map((it, index) => {
            return {
              id: `checkbox${index}`,
              firstName: it.name.first,
              lastName: it.name.last,
              age: it.dob.age,
              active: false
            }
          })
        )
      )

  useEffect(() => {
    getUsers()
  }, []) // eslint-disable-line

  const getInputChecked = (e) => {
    console.log(e.target.checked)// eslint-disable-line
    console.log(e.target.id)// eslint-disable-line
  }

  console.log(users) // eslint-disable-line

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
      {users.map((it) => (
        <div className="flex flex-row justify-around text-center">
          <div className="border border-solid border-gray-800 min-w-56 text-black font-bold shadow-lg p-2 m-2">
            <input
              type="checkbox"
              checked={it.active}
              id={it.id}
              onChange={getInputChecked} // eslint-disable-line
            />
          </div>
          <div className="border border-solid border-gray-800 min-w-150 text-black font-bold shadow-lg p-2 m-2">
            {it.firstName}
          </div>
          <div className="border border-solid border-gray-800 min-w-200 text-black font-bold shadow-lg p-2 m-2">
            {it.lastName}
          </div>
          <div className="border border-solid border-gray-800 min-w-66 text-black font-bold shadow-lg p-2 m-2">
            {it.age}
          </div>
        </div>
      ))}
      <div className="bg-gray-300 w-full text-black font-bold shadow-lg p-4">
        users checked: {111}
      </div>
    </div>
  )
}

DummyView.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DummyView)
