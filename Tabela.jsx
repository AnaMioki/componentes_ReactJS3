function Tabela(){
    const usuarios = [
        { id: 1, nome: "Ana", idade: 20 },
        { id: 2, nome: "Dri", idade: 22 },
        { id: 3, nome: "Ellen", idade: 20 },
        { id: 4, nome: "Marinha", idade: 18 },
        { id: 5, nome: "Julinha", idade: 18 },
    ]

    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map(usuario => 
                    <tr>
                        <td>{usuario.id}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.idade}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Tabela