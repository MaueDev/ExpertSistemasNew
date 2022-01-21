import React from "react"


/*Imagem */
import Sl1 from "../../imagem/slide/slide1.gif"
import Sl2 from "../../imagem/slide/slide2.png"
import Sl3 from "../../imagem/slide/slide3.gif"
import Sl4 from "../../imagem/slide/slide4.gif"
import Sl5 from "../../imagem/slide/slide5.png"
import Sl6 from "../../imagem/slide/slide6.png"
/*Imagem */

/* Icones */
import ControleFinImg from "../../imagem/icones/contaspr.png"
import FluxoCaixaImg from  "../../imagem/icones/fluxodecaixa.png"
import ControleDeVendaImg from "../../imagem/icones/Controlevenda.png"
import ControleEstoqueImg from "../../imagem/icones/estoque.png";
import EmissorNfe from "../../imagem/icones/nfe.png";
import CardapioDigital from "../../imagem/icones/Cardapio.png";
import PortalContadorImg from "../../imagem/icones/portalctd.png";
import Suporteimg from "../../imagem/icones/NFCe.png";
import EtiquetaIMG from "../../imagem/icones/etiqueta.png"
/* Icones */
function Software()
{
    
    return(
        <main className="special">
            <h2 className="Meio"> O SOFTWARE </h2>
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
function Item(props)
{
    return(
        <div className="itemFcn">
        <header>
            <img src={props.src} alt={props.info}/>
            <h3>{props.textHeader}</h3>
        </header>
        <p>{props.textContent}</p>
        </div>        
    )
}
function Funcionalidades()
{
    return(
        <main id="FUNCIONALIDADES" className="special">
            <h2 className="Meio">FUNCIONALIDADES</h2>
            <div className="highlights">
            <Item  src={ControleEstoqueImg} textHeader="Controle de Estoque" textContent="O sitema permite gestão adequada dos fluxos de entrada e saída, permite prever necessidades de compras, reduzir perdas por roubo ou vencimento dos produtos."/>
                <Item  src={EmissorNfe} textHeader="Emissor de NF-e e NFC-e" textContent="Emita suas NF-e de produto de forma ágil com um sistema emissor completo. Com a NFC-e você ganha mais agilidade na hora de emitir notas fiscais para seus clientes."/>
                <Item  src={CardapioDigital} textHeader="Cardapio Digital" textContent="Cadastre seus produtos, insira fotos e muito mas. personalize o seu catalogo e ofereça opções de entrega ao seu cliente. receba pedidos diretamente pelo WhatsApp em menos de 5 minutos."/>
                <Item  src={ControleFinImg} textHeader="Controle Financeiro" textContent="Controle suas contas a pagar e a receber de maneira fácil e facilite a gestão de sua empresa."/>
                <Item  src={FluxoCaixaImg} textHeader="Fluxo de Caixa" textContent="Fique por dentro de todas as entradas e saídas de sua empresa por turno."/>
                <Item  src={ControleDeVendaImg} textHeader="Controle de Vendas" textContent="Visualize e Controle suas vendas de forma simples."/>
                <Item  src={PortalContadorImg} textHeader="Portal do Contador" textContent="Plataforma exclusiva para os contadores dos nossos clientes, terem acesso aos arquivos fiscais sem burocracia."/>
                <Item  src={Suporteimg} textHeader="Suporte que funciona" textContent="Aqui você é atendido em instantes sem precisar passar por chatbot ou assistente virtual. Basta ligar para falar diretamente com um atendente."/>
                <Item  src={EtiquetaIMG} textHeader="Gerador de etiquetas" textContent="Defina a quantidade e pronto! Imprima etiquetas em larga escala, em qualquer tipo de impressora compatível com as predefinições do sistema, rápido, eficiente e muito fácil!."/>
               

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
                <Funcionalidades/> 
            </div>
        </section>
    )
}



export default OSoftware