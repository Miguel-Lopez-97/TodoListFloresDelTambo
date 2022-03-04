import Corporation from '../../assets/img/corporation.svg';
import LogoMiguel from '../../assets/img/miguel logo.png';
import LogoLiz from '../../assets/img/Lizzie logo.png';
import LogoSanti from '../../assets/img/LogoSantiago.svg';
import './Footer.css';


const Footer = () => {
    return ( 
<footer className='Containerfot'>

    <div className='Containerfooter'>
        <h3>Flores del Tambo 2022</h3>
        <img src={Corporation} alt={'imgcorporation'}/>
        </div>

    <div className='devContainer'>       
    <p className="devText">Developed By</p>  
    </div> 
    <div className="devFooter">
    <a href='https://github.com/Miguel-Lopez-97'><img className="developerLogo" src={LogoMiguel} alt={'LogoMiguel'}/></a>
    <a href='https://github.com/LizzieSevC'><img className="developerLogo" src={LogoLiz} alt={'LogoLizzie'}/></a>
    <a href='https://github.com/santilopezco'><img className='developerLogo' src={LogoSanti} alt={'logosanti'} /></a>
    </div>

</footer>
    );
}

export default Footer;