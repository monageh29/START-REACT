import React from 'react'

export default function CONTACT() {
  return (
    <>
    <div className='continer  CONTACT w-100 vh-100  '>
      
      <div className='contant-four text-center '>
         <h2>CONTACT ME</h2>
         <h3><i class="fas fa-star "></i></h3>
       </div>
      
      <div className='label col-md-6 text-center mx-auto'>
  <input type="email" className="form-control" id="floatingInput" placeholder="Name"/>
  <label for="floatingInput"></label>
  <hr />
<input type="password" className="form-control" id="floatingPassword" placeholder="EmailAddress"/>
  <label for="floatingPassword"></label>
  <hr />
  <input type="password" className="form-control" id="floatingPassword" placeholder="PhoneNumber"/>
  <label for="floatingPassword"></label>
  <hr />
  <input type="password" className="form-control" id="floatingPassword" placeholder="Message"/>
  <label for="floatingPassword"></label>
 
  </div>
  <button class="btn btn-primary btn-x1"  type="submit">Send</button>
       </div>
      
    </>
  )
}
