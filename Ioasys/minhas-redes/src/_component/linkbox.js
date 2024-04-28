const LinkBox = () => {

    function openLink(url) {
        window.open(url, "_blank");
    }
        
    return (
        <div>
            <button onClick={() => openLink("https://www.linkedin.com/in/marcos-antunes-7190572ba/")}>Linkedin</button>
            <button onClick={() => openLink("https://github.com/AntunesMarcos")}>GitHub</button>
            <button onClick={() => openLink("https://www.instagram.com/marcos_antune5/")}>Instagram</button>
            <button onClick={() => openLink("https://twitter.com/_marcosfxp_")}>X</button>
        </div>
    );
}
export default LinkBox;