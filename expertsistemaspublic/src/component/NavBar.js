import LogoExpert from "../imagem/LogoExpert.png"
import { Link } from "react-router-dom"


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event)
{
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active)
}



function NavBarExpert()
{
    return (
        <header>
            <a href="#"> <img src={LogoExpert} alt="Logo da Expert Sistema"></img> </a>
            <nav id="header">
                <button onClick={()=> {alert("teste")}} aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">Menu
                    <span id="hamburger"></span>
                </button>
                <ul id="Menu">
                    <li><a href="/">Baixar</a></li>
                    <li><Link to="">Tutoriais</Link></li>
                    <li><Link to="">Contabilidade</Link></li>
                    <li><Link to="">Área do Cliente</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBarExpert