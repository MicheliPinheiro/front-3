import './style.scss'
import youtubeImage from './../../assets/images/youtube.png'
import canvaImage from './../../assets/images/canva.png'

export function QuartaAula() {

    //deixar um dado mokado, deixar um dado fixo pra suar pra teste, pode vim de uma api ou banco de dados
    const componentsFinded = [
        {
            id: 1,
            title: 'Youtube Component',
            image: youtubeImage,
            text: 'Lorem ipsum, dolor sit.'
        },
        {
            id: 2,
            title: 'Canva Component',
            image: canvaImage,
            text: 'Lorem ipsum, dolor sit.'
        },
        {
            id: 3,
            title: 'Canva Component',
            image: canvaImage,
            text: 'Lorem ipsum, dolor sit.'
        }
    ]
    return (
        <div className='quarta-aula-componente' >
        <h1 className='main title'>Componentes identificados</h1>
        <ul className='components-finded'> {
            componentsFinded.map(
                component => {
                    return (
                        //pro react não se perder, ele pede pra adicionar uma key
                        <li key={component.id}>
                            <img src= {component.image} />
                            <h1>{component.title} </h1>
                            <p>{component.text }</p>
                        </li>
                    )
                }
            )
        }
        </ul>
        </div>
    )
}