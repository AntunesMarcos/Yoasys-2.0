const LinkBox = () => { 
    
    const links = [
        {
            id: 1,
            url: "https://www.linkedin.com/in/marcos-antunes-7190572ba/",
            name: "Linkedin",
        },
        {
            id: 2,
            url: "https://github.com/AntunesMarcos",
            name: "GitHub",
        },
        {
            id: 3,
            url: "https://www.instagram.com/_marcosfxp_/",
            name: "Instagram",
        },
        {
            id: 4,
            url: "https://twitter.com/_marcosfxp_",
            name: "X",
        }
    ]
        
    function openLink(url) {
        window.open(url, "_blank");
    }
        
    return (
        <div >
            {
                links.map(link => {
                    return(
                        <button key={link.id} onClick={() => openLink(link.url)}>{link.name}</button>
                    );
                })
            }
        </div>
    );
}
export default LinkBox;