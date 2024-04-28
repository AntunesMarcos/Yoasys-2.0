

const Container = ({ children }) => {
    return(
        <div className="nome">
            <img id="img" src="/Marcos2.0.jpg" alt='foto'></img>
            <h1>Marcos Antunes</h1>
            <p>Belo Horizonte</p>
            <p>Software Engineer</p>
            <p>Puc Minas - Coreu</p>
            <div>
                {children}
            </div>
        </div>
    );
}


export default  Container;


