import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
/* --------------react Icon Import  start------------------*/
import { GiHamburgerMenu } from "react-icons/gi";
import { GiRingingBell } from "react-icons/gi";
/* --------------react Icon Import  end------------------*/
import './TopHeader.css'
/* --------------images Import  start------------------*/
import logo from "../../../assets/logo/merchant.paypanda-logo.png"
import profile from "../../../assets/logo/profile-pic.png"
/* --------------images Import  end------------------*/


function TopHeader() {
    return (
        <section className='bg-linerGrd'>
            <Container>
                <div className='d-flex justify-content-between align-items-center p-2'>
                    <div className='left'>
                        <Link to={"/"}>
                            <img src={logo} alt='logo' width={100} />
                        </Link>
                    </div>
                    <div className='right'>
                        <div className='d-flex'>
                            <div className='px-2'>
                                <span className='count px-1 text-light rounded'>0</span>
                            </div>
                            <div className='px-2'>
                                <span className='notification' >
                                    <span className='pulse'>
                                        <div class="circle pulse green"></div>
                                    </span>
                                    <GiRingingBell />
                                </span>
                            </div>
                            <div className='px-2'><span className='profile bg-light p-2 rounded-circle'>
                                <img src={profile} alt='profile' width={20} />
                            </span></div>
                            <div className='px-2'><span className='profile text-light'>
                                <GiHamburgerMenu />
                            </span></div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default TopHeader
