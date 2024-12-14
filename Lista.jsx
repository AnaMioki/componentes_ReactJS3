function Lista() {

    const nomes = [
        "Ana",
        "Adrielle",
        "Ellen",
        "Mariana",
        "Julia"
    ]

    const listItens = nomes.map(item =>
        <li>{item}</li>
    )

    return(
        <ul>
            {listItens}
        </ul>
    )
}

export default Lista