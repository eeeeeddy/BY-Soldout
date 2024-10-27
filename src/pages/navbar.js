import React from 'react';

function navbar() {
    return (
        <div>
            <nav id="navbar-example2" className="navbar bg-dark bg-opacity-25 px-3">
                <a className="navbar-brand" href="/Portfolio"><strong>분 양 완 판</strong></a>
                <ul className="nav nav-pills">
                    <li className='nav-item'>
                        {/* <a className='nav-link' href='/Portfolio/About'>About</a> */}
                        <a className='nav-link' href='https://www.naver.com'>Menu 1</a>
                    </li>
                    <li className='nav-item'>
                        {/* <a className='nav-link' href='/Portfolio/Skills'>Skills</a> */}
                        <a className='nav-link' href='https://www.naver.com'>Menu 2</a>
                    </li>
                    <li className='nav-item'>
                        {/* <a className='nav-link' href='/Portfolio/Projects'>Projects</a> */}
                        <a className='nav-link' href='https://www.naver.com'>Menu 3</a>
                    </li>
                    <li className='nav-item'>
                        {/* <a className='nav-link' href='/Portfolio/Projects'>Projects</a> */}
                        <a className='nav-link' href='https://www.naver.com'>Menu 4</a>
                    </li>
                    <li className='nav-item'>
                        {/* <a className='nav-link' href='/Portfolio/Projects'>Projects</a> */}
                        <a className='nav-link' href='https://www.naver.com'>Menu 5</a>
                    </li>
                    <li className='nav-item'>
                        {/* <a className='nav-link' href='/Portfolio/Projects'>Projects</a> */}
                        <a className='nav-link' href='https://www.naver.com'>Menu 6</a>
                    </li>
                </ul>
            </nav>    
        </div>
    );
}

export default navbar;