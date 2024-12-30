import { useState } from 'react'

const PasswordErrorMessage = () => {
  return (
    <p className='FieldError'>Password should have at least 8 characters</p>
  )
}

function App() {
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState({
    value: '',
    isTouched: false,
  })
  const [role, setRole] = useState('role')

  const getIsFormValid = () => {
    if (
      !firstName ||
      !lastName ||
      !validateEmail(email) ||
      !password.value.length >= 8 ||
      (role !== 'individual' && role !== 'business')
    )
      return false

    return true
  }

  const clearForm = () => {
    // Implement this function
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Account created!')
    clearForm()
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className='Field'>
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder='First name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='Field'>
            <label>Last name</label>
            <input
              placeholder='Last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='Field'>
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              placeholder='Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='Field'>
            <label>
              Password <sup>*</sup>
            </label>
            <input
              placeholder='Password'
              // type='password'
              value={password.value}
              onChange={(e) =>
                setPassword({ value: e.target.value, isTouched: true })
              }
            />
          </div>
          {password.value.length < 8 &&
            password.isTouched &&
            PasswordErrorMessage()}
          <div className='Field'>
            <label>
              Role <sup>*</sup>
            </label>
            <select onChange={(e) => setRole(e.target.value)}>
              <option value='role'>Role</option>
              <option value='individual'>Individual</option>
              <option value='business'>Business</option>
            </select>
          </div>
          <button type='submit' disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default App
