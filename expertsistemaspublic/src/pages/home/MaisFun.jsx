import React from "react";

function MaisFun()
{
    return(
        <section className="wrapper">
            <div className="inner">
                <main className="special">
                    <h2>Mais algumas funções do nosso software para a sua empresa </h2>
                </main>
                <div className="Colum">
                    <div className="ColumLeft">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a className="btn-accordion" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <p className="btn-accordion" >ACESSO DE USUÁRIOS POR NÍVEIS HIERÁRQUICOS</p>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                        Maior segurança para a sua empresa. Tenha o controle de quais funções estarão disponíveis para os funcionários qualificados e quais usuários terão acesso administrativo total.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingTwo">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <p className="btn-accordion" >CADASTRO DE PRODUTOS AVANÇADO</p>
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div className="panel-body">
                                    Cadastre todas as variações de produtos, facilite notavelmente sua organização de produtos e estoques para e-commerce, exporte relatórios detalhados
                                </div>
                            </div>
                        </div>

                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingTwo">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <p className="btn-accordion" >CADASTRO DE CLIENTES</p>
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div className="panel-body">
                                Crie novas possibilidades, como promoções e descontos. Organize seus clientes recorrentes e disponibilize diversas formas de pagamento para diversos tipos de negociações:
                                Varejo, atacado e B2B
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    
                    
                </div>
            </div>
        </section>
    )
}

export default MaisFun