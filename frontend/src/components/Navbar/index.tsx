import {ReactComponent as GithunIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar(){
    
    return( 
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                     <h1>DSMovie</h1>
                     <a href="https://github.com/cristiano-ramos08">
                        <div className="dsmovie-contact-container">
                            <GithunIcon />
                            <p className="dsmovie-contract-link">/devsuperior</p>
                        </div>
                    </a>  
                </div>
            </nav>
        </header>
    );
}

export default Navbar;