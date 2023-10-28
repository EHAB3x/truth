import React from 'react'
import './Landing.css'
import news from '../../../Images/news.jfif'
import {Button} from "@nextui-org/react";
import  {Link}  from 'react-router-dom';
const Landing = () => {
  return (
    <div className='landing'>
        <div className="left">
            <h1>Welcome To <span>TRUTH</span> Website</h1>
            <p>Here you can find the all truth about palestine & israel war.</p>
            <Button as='a' href='#' color="success">
                Show More Articles
            </Button>
        </div>

        <div className="right">
            <Link to={'/occupier'} className="card">
                <div className="left">
                    <img src={news} alt="news" />
                </div>

                <div className="right">
                    <h3>Who is the occupier?</h3>
                    <p>This is an image.</p>
                </div>
            </Link>

            <Link to={'/terrorism'} className="card">
                <div className="left">
                    <img src={news} alt="news" />
                </div>

                <div className="right">
                    <h3>Who is the terrorist?</h3>
                    <p>This is an image.</p>
                </div>
            </Link>

            <Link to={'/history'} className="card">
                <div className="left">
                    <img src={news} alt="news" />
                </div>

                <div className="right">
                    <h3>History of the Palestinian-Israeli conflict.</h3>
                    <p>This is an image.</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Landing