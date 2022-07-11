import './styles.css';
import GitHub from '../../assets/img/GitHub-Mark-32px.svg';
import NavImg from '../../assets/img/image 1.svg';

export const NavBar = () => {

    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={NavImg} alt=""/>
                        <h1>DsMeta</h1>
                        <p>Desenvolvido por: <img src={GitHub} className="logo-gitHub" alt="logo github" /><a href="https://github.com/FelipeSdsilva">FelipeSdsilva</a></p>
                </div>
            </header>
        </>
    );
}