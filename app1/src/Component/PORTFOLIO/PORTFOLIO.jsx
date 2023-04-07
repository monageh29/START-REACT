import React from 'react'
import png404 from '../../assets/404.png.png'
import cake from '../../assets/cake.png'
import circus from '../../assets/circus.png'
import game from '../../assets/game.png'
import safe from '../../assets/safe.png'
import submarine from '../../assets/submarine.png'


export default function PORTFOLIO() {
  return (
    <>
    
    <div className='continer PORTFOLIO w-100 vh-100 text-center '>
      
     <div className='contant-two '>
        <h2>PORTFOLIO</h2>
        <h3><i class="fas fa-star "></i></h3>
      </div>
      <div className="row g-5 image">
      

      <div className=' image-one d-flex w-100    '>
 
       <img className=''  src={png404} alt="gg" />
     


       <img src={cake} alt="gg" />
       <img src={circus} alt="gg" />
     
   
        </div>
    
  
        <div className=' image-two d-flex w-100 g2  '>

       <img  src={game} alt="gg" />
       <img src={safe} alt="gg" />
       <img src={submarine} alt="gg" />

        </div>
 
        </div>
      </div>
   
    </>
  )
}
