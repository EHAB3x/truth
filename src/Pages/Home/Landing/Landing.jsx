import React, { useEffect, useState } from 'react'
import './Landing.css'
import news from '../../../Images/news.jfif'
import {Button} from "@nextui-org/react";
import  {Link}  from 'react-router-dom';
import { useSelector } from 'react-redux';
const Landing = () => {
    const landingText = useSelector(state => state.Languages.landing[0]);
    console.log(landingText);
    if(landingText === undefined){
        return <h1>Loading...</h1>
    }else{
        return (
            <div className='landing'>
        <div className="left">
            <h1>{landingText.title}</h1>
            <p>{landingText.titleDesc}</p>
            <Button as='a' href='#' color="success">
                {landingText.button}
            </Button>
        </div>

        <div className="right">
            <Link to={'/occupier'} className="card">
                <div className="left">
                    <img src={news} alt="news" />
                </div>

                <div className="right">
                    <h3>{landingText.firstCardHead}</h3>
                    <p>{landingText.firstCardDesc}</p>
                </div>
            </Link>

            <Link to={'/terrorism'} className="card">
                <div className="left">
                    <img src={news} alt="news" />
                </div>

                <div className="right">
                    <h3>{landingText.secondCardHead}</h3>
                    <p>{landingText.secondCardDesc}</p>
                </div>
            </Link>

            <Link to={'/history'} className="card">
                <div className="left">
                    <img src={news} alt="news" />
                </div>

                <div className="right">
                    <h3>{landingText.thirdCardHead}</h3>
                    <p>{landingText.thirdCardDesc}</p>
                </div>
            </Link>
        </div>
    </div>
          )
    }
  
}

export default Landing