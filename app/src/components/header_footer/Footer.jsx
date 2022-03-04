import Corporation from '../../assets/img/corperation.svg'
import './Footer.css' 


const Footer = () => {
    return ( 
        <footer className='Containerfooter' >
            <h3>Flores del Tampo 2022</h3>
            <img  src={Corporation} alt={'imgcorporation'}/>
        </footer>
    );
}
 


export default Footer;