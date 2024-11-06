export function ListItems() {

    const products = [
        { title: 'Repolho', id: 1 },
        { title: 'Alho', id: 2 },
        { title: 'Maçã', id: 3 },
    ];

    const listItems = products.map(product => {
        return <li key={product.id}>{product.title}</li>

    })

    return (
        <ul
            style={{
                border: '1px solid'
            }}>
            Lista de Produtos:
            {listItems}
        </ul>
    )
}