function Imagens(){
    const imagens = [
        "file:///C:/Users/Aluno/OneDrive%20-%20SENAC%20-%20SP/Imagens/Imagens%20da%20C%C3%A2mera/WIN_20241028_14_59_53_Pro.jpg",
        "",
        "file:///C:/Users/Aluno/OneDrive%20-%20SENAC%20-%20SP/Imagens/Imagens%20da%20C%C3%A2mera/WIN_20241028_14_59_53_Pro.jpg"
    ]

    
    for(let x in imagens){
        if(imagens[x] === ""){
            imagens.splice(x, 1)
        }
    }

    return(
        imagens.map(imagens =>
            <img src={imagens} alt="gif"/>
        )
    )
}

export default Imagens