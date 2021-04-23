import React from 'react'

import github from '../assets/github.png';

const Home = () => (
    <div className="div-home"> 
        <div>
            <h1>OPEN <b>NOTES</b></h1>
            <h4>by Álypher Mansano</h4>
        </div>
        <img src={github} onClick={() => window.open("https://github.com/alypher/open-notes")}/>
    </div>
)

export default Home