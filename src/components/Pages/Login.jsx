import React from 'react'

function Login() {
  return (
    <>
    <form>
        
        <label htmlFor='userName'>userName</label>
        <input type="text" name="userName" id="userName" />
    
        <label htmlFor='passward'>passward</label>
        <input type="text" name="passward" id="passward" />
        <button>Login</button>
    </form>
    </>
  )
}

export default Login