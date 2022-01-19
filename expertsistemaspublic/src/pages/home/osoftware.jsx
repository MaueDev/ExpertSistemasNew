import React from "react"


/*Imagem */
import Sl1 from "../../imagem/slide/slide1.gif"
import Sl2 from "../../imagem/slide/slide2.png"
import Sl3 from "../../imagem/slide/slide3.gif"
import Sl4 from "../../imagem/slide/slide4.gif"
import Sl5 from "../../imagem/slide/slide5.png"
import Sl6 from "../../imagem/slide/slide6.png"

/*Imagem */
function Software()
{
    
    return(
        <main className="special">
            <h2> O SOFTWARE </h2>
            <div id="slide" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={Sl1} alt="Primeiro Slide"/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Sl2} alt="Segundo Slide"/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Sl3} alt="Terceiro Slide"/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Sl4} alt="Terceiro Slide"/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Sl5} alt="Terceiro Slide"/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Sl6} alt="Terceiro Slide"/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                </div>
                <a id="btnslide" className="carousel-control-prev" href="#slide" role="button" data-slide="prev">
                <span  aria-hidden="true"></span>
                <span className="sr-only">Anterior</span>
                </a>
                <a  className="carousel-control-next" href="#slide" role="button" data-slide="next">
                <span id="btnslide"  aria-hidden="true"></span>
                <span className="sr-only">Próximo</span>
                </a>
            </div>
        </main>
    )
}

function OSoftware()
{
    return(
        <section className="wrapper">
            <div className="inner">
                <Software/>
            </div>
        </section>
    )
}



export default OSoftware