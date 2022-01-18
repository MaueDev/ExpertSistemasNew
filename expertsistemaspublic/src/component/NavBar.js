import LogoExpert from "../imagem/Logo-EXP-BRANCA.png"
import { Link } from "react-router-dom"
import { Component } from "react";
import "./css/NavBar.css";


/* Imagems */
import imgWhite from "../imagem/Logo-EXP-BRANCA.png";
import imgBlack from "../imagem/Logo EXP Sem Fundo.png";
class NavBarExpert extends Component
{

    toggleMenu = (e) => {
        const Btn = document.querySelector("#btn-mobile");
        const header = document.querySelector("#header")
        const Logo = document.querySelector("#ImgLogo")
        const BtnMenu = document.querySelectorAll("#header a")

        if(e.type === 'touchstart') e.preventDefault();
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        e.currentTarget.setAttribute('aria-expanded', active)
        if(!header.classList.contains("scrollactive") && active === true)
        {
            Btn.style.color = "black"
            header.classList.add("scrollactive");
             for (let i = 0; i < BtnMenu.length; i++) 
             {
                 BtnMenu[i].style.color = "black";
                 Logo.src = imgBlack
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
            Logo.src = imgWhite
            for (let i = 0; i < BtnMenu.length; i++) 
             {
                 BtnMenu[i].style.color = "#F8F9FA";
                 if(BtnMenu[i].classList.contains('activeA'))
                 {
                     BtnMenu[i].classList.add('activeA')
                 }else
                 {
                     BtnMenu[i].classList.remove('activeA')
                 }
             }
        }
    }
    
    
    
    render()
    {
        return (
            <header id="header">
            <a href="/" id="logo"> <img src={LogoExpert} id="ImgLogo" alt="Logo da Expert Sistema"></img> </a>
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