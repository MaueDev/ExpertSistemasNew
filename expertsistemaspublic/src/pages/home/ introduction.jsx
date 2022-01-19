/*Midia*/
import ExpertLogo from "../../imagem/svgicone.svg";
import TeamViewerLogo from "../../imagem/ts.png";
/*CSS JS */
import "./assets/css/introduction.css"

function Introduction()
{
    return (
       <section id="banner">
        <div className="innerIntroduction">
            <p>Permita-nos apresentar uma nova forma de gestão para sua empresa e descubra uma maneira simplificada de acompanhar seus resultados e alcançar seus objetivos! </p>
            <p></p>
            <h1>UM SISTEMA PENSADO PARA VOCÊ!</h1>
            <div id="btn">
                <button id="btn_baixar1" className="btn_baixar" download>
                    <img src={ExpertLogo} className="img_btn" alt="Download do Setup Expert Sistemas"/>
                    <b>VERSÃO DE DEMONSTRAÇÃO</b>
                </button>
                <button id="btn_baixar2" className="btn_baixar" download>
                    <img src={TeamViewerLogo} className="img_btn" alt="Download do Setup Expert Sistemas"/>
                    <b>VERSÃO DE DEMONSTRAÇÃO</b>
                </button>
            </div>
        </div>
       </section>
    )
}



export default Introduction