import Logo from '../../assets/img/Logo tambo black.png'
import  './Header.css'


const Header = () => {
    return ( 
        <header className='Containerheader'>
            <img className='logoTambo' src={Logo} alt={'logotipo'}/>
        </header>
    );
}
 


export default Header;