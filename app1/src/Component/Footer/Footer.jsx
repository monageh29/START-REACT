import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='continer Footer  w-100 '>
      <div className='row adress mx-auto text-center'>
        <div className='col-md-4'>
        <h4 class="">Location</h4>
                        <p class="john">
                            2215 John Daniel Drive
                            <br />
                            Clark, MO 65243
                        </p>
        </div>
        <div className='col-md-4'>
        <h5 class="">Around the Web</h5>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a>          
        </div>
        <div className='col-md-4'>
        <h6 class="">About Freelancer</h6>
                        <p class="Freelance">
                            Freelance is afree to use, MIT licensed Bootstrap theme created by Route
                        </p>          
        </div>
      </div>
      <div className='Copyright bg-dark text-center'>
        <p >Copyright © Your Website 2021</p>
      </div>
    </div>
  
    </>
  )
}
