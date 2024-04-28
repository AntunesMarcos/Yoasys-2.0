const LinkBox = () => { 
    
    const links = [
        {
            url: "https://www.linkedin.com/in/marcos-antunes-7190572ba/",
            name: "Linkedin",
        },
        {
            url: "https://github.com/AntunesMarcos",
            name: "GitHub",
        },
        {
            url: "https://www.instagram.com/_marcosfxp_/",
            name: "Instagram",
        },
        {
            url: "https://twitter.com/_marcosfxp_",
            name: "X",
        }
    ]
        
    function openLink(url) {
        window.open(url, "_blank");
    }
        
    return (
        <div>
            {
                links.map(link => {
                    return(
                        <button onClick={() => openLink(link.url)}>{link.name}</button>
                    );
                })
            }
        </div>
    );
}
export default LinkBox;