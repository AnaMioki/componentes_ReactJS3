function Children(props) {
    let recebe = ""

    if (props.contagem){
        recebe = props.contagem.length
    }

    return (
        <h1>{recebe}</h1>
    )
}

export default Children