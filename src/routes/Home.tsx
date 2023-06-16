import axios from "axios"
import { useEffect, useState } from "react"

type Burgers = {
    category: string;
    img: string;
    name: string;
    price: number;
    id: number;
}

const Home = () => {
    const [requestItens, setRequestItens] = useState<Burgers[]>([])
    const [filteredValues, setFilteredValues] = useState('')
    const [list, setList] = useState(['Item 1', 'Item 2', 'Item 3']);

    const burgersFilter = requestItens.filter(elem => elem.name.toLowerCase().includes(filteredValues.toLowerCase()))

    const removeItem = (index: number) => {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
    };

    useEffect(() => {

        const dataRequest = async () => {

            try {
                const { data } = await axios.get<Burgers[]>("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")

                setRequestItens(data)
            } catch (error) {
                console.error(error)
            }
        }
        dataRequest()

    }, [])

    console.log(filteredValues)

    return (
        <div>
            <h2>Home</h2>

            <input type="text" value={filteredValues} onChange={((e) => setFilteredValues(e.target.value))} />

            {
                burgersFilter.map((elem, index) =>
                    <div key={elem.id}>
                        <h2>{elem.name}</h2>
                        <img src={elem.img} alt={elem.name} />
                        <h2>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(elem.price)}</h2>
                        {/* <button onClick={() => removeItem(index)}>Remover</button> */}
                    </div>
                )
            }

            <div>
                <h1>Lista de Itens</h1>
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => removeItem(index)}>Remover</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Home
