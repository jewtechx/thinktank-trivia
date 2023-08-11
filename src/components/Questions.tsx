import React from 'react'
import data from '../database/data'

function Questions() {

    React.useEffect(() => {

    })

    const [checked,setChecked] = React.useState()

    function onSelect() {
        console.log('Radio button clicked')
    }

    const question:any  =  data[0]
  return (
    <div className='questions'>
      <h2 className="text-light">{question.question}</h2>

      <ul key={question.id}>
         {
          question.options.map((q: any,i: any) => {
            return (
              <li key={q.id}>
                <input
                value={`${true}`}
                name='options'
                id={`q${i}-option` }
                type='radio'
                onChange={() => onSelect()}
                />
    
                <label htmlFor={`q${i}-option` } className="text-primary">{q}</label>
            </li>
            )
          })
         }
      </ul>
    </div>
  )
}

export default Questions
