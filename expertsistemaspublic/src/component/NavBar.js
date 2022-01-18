import LogoExpert from "../imagem/Logo EXP Sem Fundo.png"
import { Link } from "react-router-dom"
import { Component } from "react";
import "./css/NavBar.css";

class NavBarExpert extends Component
{

    toggleMenu = (e) => {
        const Btn = document.querySelector("#btn-mobile");
        const header = document.querySelector("#header")
        if(e.type === 'touchstart') e.preventDefault();
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        e.currentTarget.setAttribute('aria-expanded', active)
        if(!header.classList.contains("scrollactive") && active === true)
        {
            const BtnMenu = document.querySelectorAll("#header a")
            Btn.style.color = "black"
            header.classList.add("scrollactive");
             for (let i = 0; i < BtnMenu.length; i++) 
             {
                 BtnMenu[i].style.color = "black";
                 if(BtnMenu[i].classList.contains('activeA'))
                 {
                     BtnMenu[i].classList.add('activeA')
                 }else
                 {
                     BtnMenu[i].classList.remove('activeA')
                 }
             }
            
        }else if(window.scrollY === 0  && active === false && header.classList.contains("scrollactive"))
        {
            Btn.style.color = "#F8F9FA"
            header.classList.remove("scrollactive");
        }
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