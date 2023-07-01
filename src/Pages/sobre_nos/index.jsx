import Header from "../../Components/Header"
import './style.css'

export const SobreNos = () => {
    return(
        <>
        
            <Header/>
            <main className="main-sobre-nos">
                <div className="main-sobre-nos-descricao">
                    <div className="main-sobre-nos-descricao-texto">
                        <h1>SOBRE-NOS</h1>
                        <p>Somos especializados em projetos elétricos, hidráulicos e de combate a incêndio. Utilizamos ferramentas avançadas como AutoCAD e REVIT para garantir precisão e eficiência. Nossa equipe qualificada trabalha em estreita colaboração com os clientes, adaptando cada projeto às suas necessidades específicas. Buscamos constantemente aprimorar nossas habilidades e nos manter atualizados com as últimas tecnologias. Se você procura serviços confiáveis e inovadores nessa área, entre em contato conosco.</p>
                    </div>
                    <div className="main-sobre-nos-descricao-img"></div>
                </div>

                <div className="main-sobre-nos-parceiros">
                    <h2>NOSSOS PARCEIROS</h2>
                </div>
            </main>
        </>
    )
}