import React from "react";
import "./assets/css/empresa.css";

function ComponenteEmpresa(props)
{
    return(
        <div class="content">
            <header>
                <h3>{props.Title}</h3>
            </header>
            <p>
                {props.body}
            </p>
        </div>
    )
}

function AEmpresa()
{
    return(
    <section className="wrapper">
        <div className="inner">
            <main className="special">
            <h2 className="Meio">A EMPRESA</h2>
            </main>
            <div className="highlights">
            <ComponenteEmpresa
                Title="Um ERP completo"
                body={["Entender o funcionamento de todas as empresas e criar softwares de gestão empresarial é um dos focos de nossa empresa. O principal foco é a " ,<strong>SUA</strong>," produtividade.",<br></br>,"Escolha o software de gerenciamento ideal para iniciar uma nova era de possibilidades. Tenha controle total de seu estoque, vendas, orçamentos e notas fiscais em um só sistema integrado, em uma rede local 100% segura e conte com o suporte de nossa equipe dedicada para tornar o dia a dia de seu negócio ainda mais rentável."]}/>
            <ComponenteEmpresa
               Title="Na ponta do lápis"
               body={["Total controle sobre suas finanças, com relatórios intuitivos e de fácil aprendizado. É este o conceito por trás de nosso software, levado à risca por nossos desenvolvedores. Tenha todas as funcionalidades que a sua empresa precisa em um só lugar. Sem planilhas complexas, arquivos espalhados ou dados desconexos.",<br></br>,"Sua empresa precisa de soluções modernas, e o ERP Expert Sistemas é exatamente isso: O necessário para sua organização."]}/>
            <ComponenteEmpresa
               Title="A Empresa"
               body={["A Expert Sistemas oferece agilidade para elaborar relatórios gerenciais de sua empresa. A automatização de processos e integração de módulos evita redigitação e conferência manual. Os relatórios são exibidos diretamente na tela de seu computador, e você ainda pode exportar gráficos e tabelas completas para incluir em apresentações ou estudos detalhados.",<p></p>,"Tenha o melhor atendimento rápido e prático na hora que você precisar, nosso suporte atende você na mesma hora tirando suas dúvidas e questionamentos.", <p></p>,"Venha e confira! Tire suas dúvidas no nosso atendimento online ou em um de nossos telefones de contatos."]}/>
            </div>
        </div>
    </section>
    )
}

export default AEmpresa