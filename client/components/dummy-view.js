import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import Head from './head'

const Dummy = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    Age: 0
  }

  const getUsers = () => {axios('https://randomuser.me/api/?results=10').then((data) => console.log(data.data.results))// eslint-disable-line
  }
  // const [count, setCount] = useState(0)
  // console.log(initialState)// eslint-disable-line
  getUsers()

  return (
    <div>
      <Head title="Hello" />
      <div>
        <div className="grid grid-cols-4 gap-4 flex flex-row justify-left mt-4">
          <div className="border border-solid border-gray-800 text-black font-bold border shadow-lg p-4 m-2">
            <input type="checkbox" />
          </div>
          <div className="border border-solid border-gray-800 text-black font-bold border shadow-lg p-4 m-2">
            First Name
          </div>
          <div className="border border-solid border-gray-800 text-black font-bold border shadow-lg p-4 m-2">
            Second Name
          </div>
          <div className="border border-solid border-gray-800 text-black font-bold border shadow-lg p-4 m-2">
            Age
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-4 flex flex-row justify-left mt-4">
        <div className="border border-solid border-gray-800 text-black font-bold border shadow-lg p-4 m-2">
          <input type="checkbox" />
        </div>
        <div className="border border-solid border-gray-800 text-black font-bold border shadow-lg p-4 m-2">
          it
        </div>
        <div className="border border-solid border-gray-800 text-black font-bold border shadow-lg p-4 m-2">
          {initialState.d}
        </div>
        <div className="border border-solid border-gray-800 text-black font-bold border shadow-lg p-4 m-2">
          it
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
