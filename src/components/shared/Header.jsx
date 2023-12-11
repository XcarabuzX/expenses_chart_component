import LogoSVG from '../../assets/img/logo.svg?react';
import estilos from './Header.module.css';
function Header() {
    return ( 
        <header className={estilos.header}>
            <div>
                <small>My balance</small>
                <p className={estilos.balance}>$921.48</p>
            </div>
            <LogoSVG className={estilos.logo}/>
        </header>
     );
}

export default Header;