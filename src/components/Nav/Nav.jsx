import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { Link, useLocation} from "react-router-dom"



export default function NavBar({onSearch, logout}) {

    const location = useLocation()


    return(
        
<div className={styles.nav}>
        
        {location.pathname === "/home" &&
            <SearchBar  onSearch={onSearch}></SearchBar>
        }


{/** Links en home */}
        <div>           
                {
                    location.pathname === "/home" &&
                        <button><Link to = "/favorites" className={styles.links}> Favorites </Link> </button>
                }
       
                {
                    location.pathname === "/home" &&
                        <button><Link to = "/about" className={styles.links}> About Me </Link> </button>
                }
      
                {
                    location.pathname === "/home" &&
                        <button onClick={logout} className={styles.logout}>  Logout  </button>
                }
       
        </div>

{/** Links en about */}
        <div>           
                {
                    location.pathname === "/about" &&
                        <button><Link to = "/favorites" className={styles.links}> Favorites </Link> </button>
                }
       
          
                {
                    location.pathname === "/about" &&
                        <button onClick={logout} className={styles.logout}>  Logout  </button>
                }
       
        </div>

{/** Links en detail */}
        <div>           
                {
                    location.pathname === "/detail" &&
                        <button><Link to = "/favorites" className={styles.links}> Favorites </Link> </button>
                }

                {
                    location.pathname === "/detail" &&
                        <button><Link to = "/about" className={styles.links}> About Me </Link> </button>
                }
       
          
                {
                    location.pathname === "/detail" &&
                        <button onClick={logout} className={styles.logout}>  Logout  </button>
                }
       
        </div>

{/** Links en favorite */}
        <div>           
              

                {
                    location.pathname === "/favorites" &&
                        <button><Link to = "/about" className={styles.links}> About Me </Link> </button>
                }
       
          
                {
                    location.pathname === "/favorites" &&
                        <button onClick={logout} className={styles.logout}>  Logout  </button>
                }
       
        </div>


</div> 

) 
}