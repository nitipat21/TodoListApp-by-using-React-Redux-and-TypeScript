import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterComponent = () => {

    const currentYear = React.useMemo(()=>{
        const d = new Date(); 
        return d.getFullYear();
    },[])
    
    return (

        <footer>
            <div className="icons">
                <a href='https://github.com/nitipat21' target='_blank'><FaGithub className='github'/></a>
                <a href='https://linkedin.com/in/nitipat-ruengsatawit-42077b182' target='_blank'><FaLinkedin className='linkedin'/></a>
            </div>
            <small>&copy; Copyright {currentYear}, Nitipat Ruengsatawit</small>
        </footer>

    )
}

export default FooterComponent;