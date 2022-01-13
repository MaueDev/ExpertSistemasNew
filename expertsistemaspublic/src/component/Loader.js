import LogoPng from "../imagem/LogoExpert.png";
import "./css/Loader.css";

window.onload = function()
{
  document.querySelector(".loader").classList.add("fadeOut")
  setTimeout(function()
  {
    
    document.querySelector("#preloder").classList.add("fadeOut")
  },400)
}

export default function Loader()
{
  return (
    <div id="preloder">
        <img src={LogoPng} alt="Logo Da Expert Sistemas" id="LogoLoader"></img>
        <div className="loader"></div>
    </div>
  )  
}