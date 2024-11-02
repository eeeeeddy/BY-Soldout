import React from 'react';
import '../css/Main.css';
import { PC, Mobile } from "../components/Responsive";
import Navbar from './navbar';
import ActionButton from './actionButton';

function Main() {
    return (
        <div className='' style={{ fontFamily: 'Nanum Gothic' }}>
            <div className='Navbar'>
                <Navbar />
            </div>

            <PC>
                <div className="scrollspy-example bg-white p-3 rounded-2 mt-5" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex={0}>
                    <div className='image-container'>
                        <div id="sec01" className='mb-4'></div>
                        <img src={`${process.env.PUBLIC_URL}/images/001.jpg`} alt="img001"/>
                        <img src={`${process.env.PUBLIC_URL}/images/002.jpg`} alt="img002"/>
                        <img src={`${process.env.PUBLIC_URL}/images/003.jpg`} alt="img003"/>
                        <div id="sec02" className='mb-4'></div>
                        <img src={`${process.env.PUBLIC_URL}/images/004.jpg`} alt="img004"/>
                        <img src={`${process.env.PUBLIC_URL}/images/005.jpg`} alt="img005"/>
                        <div id="sec03" className='mb-4'></div>
                        <img src={`${process.env.PUBLIC_URL}/images/006.jpg`} alt="img006"/>
                        <img src={`${process.env.PUBLIC_URL}/images/007.jpg`} alt="img007"/>
                        <img src={`${process.env.PUBLIC_URL}/images/008.jpg`} alt="img008"/>
                        <img src={`${process.env.PUBLIC_URL}/images/009.jpg`} alt="img009"/>
                        <div id="sec04" className='mb-4'></div>
                        <img src={`${process.env.PUBLIC_URL}/images/010.jpg`} alt="img010"/>
                        <img src={`${process.env.PUBLIC_URL}/images/011.jpg`} alt="img011"/>
                        <img src={`${process.env.PUBLIC_URL}/images/012.jpg`} alt="img012"/>
                        <img src={`${process.env.PUBLIC_URL}/images/013.jpg`} alt="img013"/>
                    </div>
                </div>
            </PC>

            <Mobile>
                <div className="scrollspy-example bg-white p-3 rounded-2 mt-5" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex={0}>
                    <div className='image-container'>
                        <div id="sec01" className='mb-4'></div>
                        <img src={`${process.env.PUBLIC_URL}/images/001.jpg`} alt="img001"/>
                        <img src={`${process.env.PUBLIC_URL}/images/002.jpg`} alt="img002"/>
                        <img src={`${process.env.PUBLIC_URL}/images/003.jpg`} alt="img003"/>
                        <div id="sec02" className='mb-4'></div>
                        <img src={`${process.env.PUBLIC_URL}/images/004.jpg`} alt="img004"/>
                        <img src={`${process.env.PUBLIC_URL}/images/005.jpg`} alt="img005"/>
                        <div id="sec03" className='mb-4'></div>
                        <img src={`${process.env.PUBLIC_URL}/images/006.jpg`} alt="img006"/>
                        <img src={`${process.env.PUBLIC_URL}/images/007.jpg`} alt="img007"/>
                        <img src={`${process.env.PUBLIC_URL}/images/008.jpg`} alt="img008"/>
                        <img src={`${process.env.PUBLIC_URL}/images/009.jpg`} alt="img009"/>
                        <div id="sec04" className='mb-4'></div>
                        <img src={`${process.env.PUBLIC_URL}/images/010.jpg`} alt="img010"/>
                        <img src={`${process.env.PUBLIC_URL}/images/011.jpg`} alt="img011"/>
                        <img src={`${process.env.PUBLIC_URL}/images/012.jpg`} alt="img012"/>
                        <img src={`${process.env.PUBLIC_URL}/images/013.jpg`} alt="img013"/>
                    </div>
                </div>
            </Mobile>

            <ActionButton />
        </div>
    )
}

export default Main;