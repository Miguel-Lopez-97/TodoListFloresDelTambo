import Logo from '../../assets/img/Logo_Flores_del_Tambo.svg'
import  './Header.css'


const Header = () => {
    return ( 
        <header className='Containerheader'>
            <img  src={Logo} alt={'logotipo'}/>
        </header>
    );
}
 


export default Header;