import { useState } from 'react'
import { SetimaAulaCardProduto } from '../../components/SetimaAulaCardProduto'
import './style.scss'


export function SetimaAula() {
    // let contador = 0
    const [contador, setContador] = useState(0)
    const [temaEscuro, setTemaEscuro] = useState(true)
    const [nomeProduto, setNomeProduto] = useState('')
    const [precoProduto, setPrecoProduto] = useState('')
    const [fotoProduto, setFotoProduto] = useState('')
    const [formularioErro, setFormularioErro] = useState(false)

    const [allProducts, setAllProducts] = useState([
        {
            id: 1,
            name: 'Xbox',
            price: '3.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
        },
        {
            id: 2,
            name: 'Playstation 5',
            price: '5.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
        },
        {
            id: 3,
            name: 'Switch',
            price: '2.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
        }
    ])

    const newProduct = {
        id: 4,
        name: 'Playstation 4',
        price: '2.000',
        picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
    }

    function somarNumero(numero) {

        setContador(contador + numero)
        //não posso usar contador++ pq estou usando um hook, e o contador ++ iria alterar direto em contador, não usaria o setContador.

    }

    function mudarTema() {
        setTemaEscuro(!temaEscuro)
    }

    function addNewProduct() {
        setAllProducts([...allProducts, newProduct])
    }
    
    function cadastrarProduto(event) {
        event.preventDefault()
        const novoProdutoCadastrado = {
            name: nomeProduto,
            price: precoProduto,
            picture: fotoProduto
        }
        if (nomeProduto === '' || precoProduto === '') {
            setFormularioErro(true)
        } else {  
            setFormularioErro(false)          
        setAllProducts([...allProducts, novoProdutoCadastrado])
        setNomeProduto('')
        precoProduto('')
        fotoProduto('')
        }
    }

    return (

        // <main className={`setima-aula-component ${temaEscuro ? 'dark-theme' : ''}`}>

        //     <h1>Contador</h1>
        //     <button onClick={() => mudarTema()}>Mudar Tema</button>
        //     {/* é como se fosse um eventListener por baixo dos panos. */}
        //     <button onClick={() => somarNumero(3)}>Adicionar</button>
        //     <span>Número atual: {contador}</span>

        // </main>

        <main className="setima-aula-component">
            <div className="tittle-wrapper">
                <h1>Produtos</h1>
                <button onClick={addNewProduct}>Adicionar novo produto</button>
            </div>

            <form className={formularioErro ? 'form-error' : ''} onSubmit={event => cadastrarProduto(event)}>

                <div>
                    <label htmlFor="nomeProduto">Nome Produto</label>
                    <input id="nomeProduto" type="text" value={nomeProduto} onChange={event => setNomeProduto(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="precoProduto">Preço</label>
                    <input id="precoProduto" type="text" value={precoProduto} onChange={event => setPrecoProduto(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="fotoProduto">Foto</label>
                    <input id="fotoProduto" type="text" value={fotoProduto} onChange={event => setFotoProduto(event.target.value)} />
                </div>
                <button type='submit'>Cadastrar Produto</button>
                <button type='reset'>Limpar formulário</button>
            </form>
            {
                formularioErro ? (
                    <span>O seu formulário contem erros</span>
                ) : null
            }

            <section className='products'>
                {
                    allProducts.map(
                        product => {
                            return (
                                <SetimaAulaCardProduto
                                    productData={product}
                                />
                            )
                        }
                    )
                }
            </section>
        </main>
    )
}