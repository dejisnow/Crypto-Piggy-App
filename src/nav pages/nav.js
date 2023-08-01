import {React} from "react"
import { Link, Outlet } from "react-router-dom"
import homeIcon from '../svg folder/piggy home icon.svg'
import earnIcon from '../svg folder/piggy invest icon.svg'
import learnIcon from '../svg folder/piggy course icon.svg'
import accountIcon from '../svg folder/piggy profile display.svg'
import saveIcon from '../svg folder/piggy-bank-svgrepo-com.svg'


export function Nav(){
    return(
    <div className="nav__div">
    <nav>
        <ul>
            <li><img src ={homeIcon} alt="home icon" />
                <Link to='/'
                onClick={()=>{
                    window.scroll(0,0)
                }}>Home</Link>
            </li>
            <li>
            <img src ={saveIcon} alt='savings icon' />
                <Link to='/save'
                onClick={()=>{
                    window.scroll(0,0)
                }}>Save</Link>
            </li>
            <li><img src ={earnIcon} alt="earnings icon" />
                <Link to='/investments'
                onClick={()=>{
                    window.scroll(0,0)
                }}>Earn</Link>
            </li>
           
            <li>
                <img src ={learnIcon} alt='courses icon' />
                <Link to='/learn' 
                 onClick={()=>{
                    window.scroll(0,0)
                }}>Learn</Link>
            </li>
            <li>
            <img src ={accountIcon} alt='account icon' />
                <Link to='/account' onClick={()=>{
                    window.scroll(0,0)
                }}>Account</Link>
            </li>
           
          
        </ul>
       
    
    </nav>
    <Outlet />
    </div>
    )
}