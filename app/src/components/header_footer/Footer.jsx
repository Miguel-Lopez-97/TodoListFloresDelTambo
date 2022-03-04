import Corporation from '../../assets/img/corporation.svg';
import LogoMiguel from '../../assets/img/miguel logo.png';
import LogoLiz from '../../assets/img/Lizzie logo.png';
import './Footer.css';


const Footer = () => {
    return ( 
<>

    <footer className='Containerfooter'>
        <h3>Flores del Tambo 2022</h3>
        <img src={Corporation} alt={'imgcorporation'}/>
        </footer>

    <div className='devContainer'>       
    <p className="devText">Developed By</p>  
    </div> 
    <div className="devFooter">
    <a href='https://github.com/Miguel-Lopez-97'><img className="developerLogo" src={LogoMiguel}/></a>
    <a href='https://github.com/LizzieSevC'><img className="developerLogo" src={LogoLiz}/></a>
    </div>

</>
    );
}

export default Footer;