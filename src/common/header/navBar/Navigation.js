import React from 'react'
import { Link } from 'react-router-dom'
/* --------------react Icon Import  start------------------*/
import { RiDashboard3Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
/* --------------react Icon Import  end------------------*/
/* --------------import css   start------------------*/
import "./Navigation.css"
/* --------------import css   end------------------*/
function Navigation() {
  return (
    <section>
      <div className='container'>
        <div className='d-flex navsbar'>
          <div className='nav-item active'><span className='nav-icon px-2'><RiDashboard3Fill /></span><Link>Dashboard</Link></div>
          <div className='nav-item'><span className='nav-icon px-2'><FaUsers /></span><Link>Members <span className='px-2'><IoChevronDownSharp /></span></Link>
            <div class="dropdown-content px-3">
              <div className='menus-items'>
                <span className='pe-2 '><MdOutlineKeyboardDoubleArrowRight /></span>
                <Link to={""}>Distributor <span>(0)</span></Link>
              </div>
              <div className='menus-items'>
                <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                <Link to={""}>Retailer <span>(0)</span></Link>
              </div>
              <div className='menus-items'>
                <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                <Link to={""}>Suspended Uers
                </Link>
              </div>
              <div className='menus-items'>
                <span className='pe-2'><MdOutlineKeyboardDoubleArrowRight /></span>
                <Link to={""}>Not Working Users </Link>
              </div>
            </div>
          </div>
          <div className='nav-item'><span className='nav-icon px-2'><FaUsers /></span><Link>Report <span className='px-2'><IoChevronDownSharp /></span></Link></div>
          <div className='nav-item'><span className='nav-icon px-2'><FaUsers /></span><Link>Payment <span className='px-2'><IoChevronDownSharp /></span></Link></div>
          <div className='nav-item'><span className='nav-icon px-2'><FaUsers /></span><Link>Dispute <span className='px-2'><IoChevronDownSharp /></span></Link></div>
          <div className='nav-item'><span className='nav-icon px-2'><FaUsers /></span><Link>User Income  <span className='px-2'><IoChevronDownSharp /></span></Link></div>
          <div className='nav-item'><span className='nav-icon px-2'><FaUsers /></span><Link>
            <span>BAL :</span>
            <span>0.00 </span>
            <span>Aeps :</span>
            <span>0.00 </span>
          </Link></div>

        </div>
      </div>
    </section>
  )
}

export default Navigation
