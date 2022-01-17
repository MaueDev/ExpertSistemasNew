//Definir titulo
document.querySelector("#TitlePage").textContent = "Expert Sistemas";


//Efeito NavBar

function scrollteste()
{
    const Navbar = document.querySelector("#header")
    const BtnMenu = document.querySelectorAll("#header a")
    const Btn = document.querySelector("#btn-mobile");
    const Menu = document.querySelector("#menu");

   if(window.scrollY >0 )
   {
       if(!Navbar.classList.contains('scrollactive'))
       {
        Navbar.classList.add('scrollactive')
        BtnColor("black")
        Btn.style.color = "black"
        Menu.style.backgroundColor = "#F8F9FA"
        Menu.style.transition = "background-color 500ms linear"
       }
   }
   else if(window.scrollY === 0 )
   {
    if(Navbar.classList.contains('scrollactive'))
       {
        Navbar.classList.remove('scrollactive')
        BtnColor("#F8F9FA")
        Btn.style.color = "#F8F9FA"
        Menu.style.backgroundColor = "transparent"

       }
   }
   function BtnColor(color)
   {
    for (let i = 0; i < BtnMenu.length; i++) 
    {
        BtnMenu[i].style.color = color;
        if(BtnMenu[i].classList.contains('activeA') || color == "black")
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