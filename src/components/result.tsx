import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/results.css'
import ResultTable from './resultTable'

export default function Result() {

  function onRestart(){
    console.log('restart')
  }
  return (
    <div className='container'>
       <h1 className="title test-light">Quiz Session</h1>

       <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className='bold'>Daily Tution</span>
        </div>

        <div className="flex">
          <span>Total Quiz Points :</span>
          <span className='bold'>50</span>
        </div>
        <div className="flex">
          <span>Total Questions :</span>
          <span className='bold'>05</span>
        </div>
        <div className="flex">
          <span>Total Attempts :</span>
          <span className='bold'>03</span>
        </div>
        <div className="flex">
          <span>Quiz Result :</span>
          <span className='bold'>Passed</span>
        </div>
       </div>

       <div className="start">
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
       </div>

       <ResultTable />
    </div>
  )
}
