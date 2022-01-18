/* Imagems */
import imgWhite from "../../imagem/Logo-EXP-BRANCA.png";
import imgBlack from "../../imagem/Logo EXP Sem Fundo.png";
//Definir titulo
document.querySelector("#TitlePage").textContent = "Expert Sistemas";



//Efeito NavBar
function scrollteste()
{
    const Navbar = document.querySelector("#header")
    const BtnMenu = document.querySelectorAll("#header a")
    const Btn = document.querySelector("#btn-mobile");
    const LogoImg = document.querySelector("#ImgLogo")

   if(window.scrollY >0 )
   {
       if(!Navbar.classList.contains('scrollactive'))
       {
        Navbar.classList.add('scrollactive')
        BtnColor("black")
        Btn.style.color = "black"
        LogoImg.src = imgBlack

       }
   }
   else if(window.scrollY === 0 )
   {
    if(Navbar.classList.contains('scrollactive'))
       {
        Navbar.classList.remove('scrollactive')
        BtnColor("#F8F9FA")
        Btn.style.color = "#F8F9FA"
        LogoImg.src = imgWhite

       }
   }
   function BtnColor(color)
   {
    for (let i = 0; i < BtnMenu.length; i++) 
    {
        BtnMenu[i].style.color = color;
        if(BtnMenu[i].classList.contains('activeA') || color === "black")
        {
            BtnMenu[i].classList.add('activeA')
        }else
        {
            BtnMenu[i].classList.remove('activeA')
        }
    }
   }
}
window.addEventListener("scroll", scrollteste)