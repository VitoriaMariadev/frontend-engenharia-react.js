import Header from "../../Components/Header"
import './style.css'

export const SobreNos = () => {
    return(
        <>
        
            <Header/>
            <main className="main-sobre-nos">
                <div className="main-sobre-nos-fundo"></div>
                <div className="main-sobre-nos-descricao">
                    <div className="main-sobre-nos-descricao-texto">
                        <h1>SOBRE-NOS</h1>
                        <p>Somos especializados em projetos elétricos, hidráulicos e de combate a incêndio. Utilizamos ferramentas avançadas como AutoCAD e REVIT para garantir precisão e eficiência. Nossa equipe qualificada trabalha em estreita colaboração com os clientes, adaptando cada projeto às suas necessidades específicas. Buscamos constantemente aprimorar nossas habilidades e nos manter atualizados com as últimas tecnologias. Se você procura serviços confiáveis e inovadores nessa área, entre em contato conosco.</p>
                    </div>
                    <div className="main-sobre-nos-descricao-img"></div>
                </div>

                <div className="main-sobre-nos-parceiros">
                    <h2>NOSSOS PARCEIROS</h2>
                    <div className="main-sobre-nos-parceiros-container">
                        <div className="main-sobre-nos-parceiros-container-img">
                            <img src="https://lh4.googleusercontent.com/UWX9rGtxa6wAK1duiV9Cehk9KxNcu72dFJg8BXNRN6gdL14OxyC5uv9kWF2WI_79NBQvkgcNL2zyL2Twc78cKyqCbuogr7FLSjfyCoSD9JRZMivC1mKiVfW_wI1lDcAa0nAKCNIGa0IXIwl15Q" alt="" />
                        </div>

                        <div className="main-sobre-nos-parceiros-container-img caixa">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Caixa_Econ%C3%B4mica_Federal_logo.svg/2560px-Caixa_Econ%C3%B4mica_Federal_logo.svg.png" alt="" />
                        </div>

                        <div className="main-sobre-nos-parceiros-container-img">
                            <img src="https://pt.org.br/wp-content/uploads/2022/08/partido-dos-trabalhadores.png" alt="" />
                        </div>

                        <div className="main-sobre-nos-parceiros-container-img">
                            <img src="https://images.tcdn.com.br/img/img_prod/561233/10_canetas_bic_cristal_azul_ponta_media_10_unidades_173_1_3acf224207adf567e6b86eb5260cb05f.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}