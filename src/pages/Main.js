import React from 'react';
import '../css/Main.css';
import Navbar from './navbar';

function Main() {
    return (
        <div className='' style={{ fontFamily: 'Nanum Gothic' }}>
            <div className='Navbar'>
                <Navbar />
            </div>
            <div className="scrollspy-example bg-white p-3 rounded-2 mt-5" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex={0}>

                {/* <img src="../../public/images/003.jpg" alt="example" style={{ width: "100%", height: "auto" }} /> */}
                
                <img src={`${process.env.PUBLIC_URL}/images/001.jpg`} alt="img001"/>
                <img src={`${process.env.PUBLIC_URL}/images/002.jpg`} alt="img002"/>
                <img src={`${process.env.PUBLIC_URL}/images/003.jpg`} alt="img003"/>
                <img src={`${process.env.PUBLIC_URL}/images/004.jpg`} alt="img004"/>
                <img src={`${process.env.PUBLIC_URL}/images/005.jpg`} alt="img005"/>
                <img src={`${process.env.PUBLIC_URL}/images/006.jpg`} alt="img006"/>
                <img src={`${process.env.PUBLIC_URL}/images/007.jpg`} alt="img007"/>
                <img src={`${process.env.PUBLIC_URL}/images/008.jpg`} alt="img008"/>
                <img src={`${process.env.PUBLIC_URL}/images/009.jpg`} alt="img009"/>
                <img src={`${process.env.PUBLIC_URL}/images/010.jpg`} alt="img010"/>
                <img src={`${process.env.PUBLIC_URL}/images/011.jpg`} alt="img011"/>
                <img src={`${process.env.PUBLIC_URL}/images/012.jpg`} alt="img012"/>
                <img src={`${process.env.PUBLIC_URL}/images/013.jpg`} alt="img013"/>

                
                



                {/* About */}
                {/* <About /> */}

                {/* Skills */}
                {/* <Skills /> */}
                
                {/* Projects */}
                {/* <Projects /> */}
            </div>
        </div>
    )
}

export default Main;