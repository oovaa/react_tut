import React, { useState } from 'react'
function App() {
  const [score, setScore] = useState('10')
  const [comment, setcomment] = useState('')
  const handelSubmit = (e) => {
    e.preventDefault()
    if (score <= 5 && comment.length <= 10) {
      alert('Please provide  comment')
      return
    }
    console.log('Submitted')
    setScore('9')
    setcomment('')
  }

  return (
    <div className='App' style={{ backgroundColor: '#333', color: '#fff' }}>
      <form onSubmit={handelSubmit}>
        <fieldset>
          <h2>FeedBack form</h2>
          <div>
            <label>Score: {score} ⭐</label> <br></br>
            <input
              type='range'
              min='0'
              max='10'
              value={score}
              onChange={(e) => setScore(e.target.value)}
            ></input>
          </div>
          <div>
            <label>comment: </label>
            <textarea
              value={comment}
              onChange={(e) => setcomment(e.target.value)}
            ></textarea>
          </div>
          <button type='submit'>submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default App
