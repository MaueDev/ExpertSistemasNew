import LogoExpert from "../imagem/LogoExpert.png"
import { Link } from "react-router-dom"
import { Component } from "react";
import "./css/NavBar.css";

class NavBarExpert extends Component
{

    toggleMenu = (e) => {
        console.log("funciona")
        if(e.type === 'touchstart') e.preventDefault();
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        e.currentTarget.setAttribute('aria-expanded', active)
    }
    
    
    
    render()
    {
        return (
            <header id="header">
            <a href="#" id="logo"> <img src={LogoExpert} alt="Logo da Expert Sistema"></img> </a>
            <nav id="nav">
                <button onClick={this.toggleMenu} aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">Menu
                    <span id="hamburger"></span>
                </button>
                <ul id="menu" role="menu">
                    <li><a href="/">Baixar</a></li>
                    <li><Link to="">Tutoriais</Link></li>
                    <li><Link to="">Contabilidade</Link></li>
                    <li><Link to="">Área do Cliente</Link></li>
                </ul>
            </nav>
        </header>
    )
}
}

export default NavBarExpert