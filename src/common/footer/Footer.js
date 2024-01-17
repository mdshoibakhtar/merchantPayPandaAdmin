import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section>
        {/* !-------------Footer Opened--------------! */}
      <div class="main-footer ht-50  my-2">
            <div class="container-fluid pd-t-0-f ht-100 text-center" style={{fontSize:"14px"}}>
                <span >Copyright © 2024 <Link to="https://www.abarissoftech.com" target='bank' className='text-decoration-none'>Abaris Softech Pvt Ltd.</Link> All rights reserved.</span>
            </div>
        </div>
         {/* !-------------Footer closed--------------! */}
    </section>
  )
}

export default Footer
