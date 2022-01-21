import React from "react";
import "./assets/css/MaisFun.css"
function PainelAcordion(props)
{
    let hrefprop = "#"+props.Numb;
    return(
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">
                        <a className="btn-accordion" role="button" data-toggle="collapse" data-parent="#accordion" href={hrefprop} aria-expanded="true" aria-controls={props.Numb}>
                            <p className="btn-accordion" >{props.title}</p>
                        </a>
                    </h4>
                </div>
                <div id={props.Numb} className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <div className="panel-body">
                        {props.body}
                    </div>
                </div>
            </div>
        </div>
    )
}
function MaisFun()
{
    return(
        <section className="wrapper">
            <div className="inner">
                <main className="special">
                    <h2 className="Meio">Mais algumas funções do nosso software para a sua empresa </h2>
                </main>
                <div className="Colum">
                    <div className="ColumLeft">
                        <PainelAcordion Numb="collapseOne" title="ACESSO DE USUÁRIOS POR NÍVEIS HIERÁRQUICOS" body="Maior segurança para a sua empresa. Tenha o controle de quais funções estarão disponíveis para os funcionários qualificados e quais usuários terão acesso administrativo total."/>
                        <PainelAcordion Numb="collapseTwo" title="CADASTRO DE PRODUTOS AVANÇADO" body="Cadastre todas as variações de produtos, facilite notavelmente sua organização de produtos e estoques para e-commerce, exporte relatórios detalhados."/>
                        <PainelAcordion Numb="collapseTwo" title="CADASTRO DE CLIENTES" body="Crie novas possibilidades, como promoções e descontos. Organize seus clientes recorrentes e disponibilize diversas formas de pagamento para diversos tipos de negociações:Varejo, atacado e B2B."/>
                    </div>
                    <div className="ColumRight">
                        <PainelAcordion Numb="collapseOne1" title="CONTAS A PAGAR E RECEBER" body="Organize e produza relatórios precisos do fluxo de caixa da sua empresa. Controle gastos e investimentos de forma eficiente. Ter uma visão ampla das finanças é um passo importante para um crescimento sustentável."/>
                        <PainelAcordion Numb="collapseTwo1" title="DIVERSIDADE DE PAGAMENTOS" body="Escolha entre carnês, boletos, cartão de crédito, cheque, dinheiro e débito. Mais diversidade de escolhas para seus clientes."/>
                        <PainelAcordion Numb="collapseThree1" title="SISTEMA INTEGRADO" body="Tenha um ERP completo em um só programa. Não dependa mais de softwares de terceiros para sua organização empresarial."/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MaisFun