import './style.scss'
import batataGif from './../../assets/images/batata.gif'

export function TerceiraAula() {

    const components = [
        { name: 'Component Card', description: 'teste', image: 'https://pa1.narvii.com/6493/52de3cd66259f5d9d95a1beba05a65c7d4793a33_hq.gif' },
        { name: 'Component Card 2', description: 'teste 2', image: '' },
        { name: 'Component Card 3', description: 'teste 3', image: '' },
        { name: 'Component Card 4', description: 'teste 4', image: '' },
        { name: 'Component Card 5', description: 'teste 5', image: '' },
    ]

    return (
        <div>
            <img src={batataGif} />
            <h1>Lista de componentes encontrados em um sistema</h1>
            <ul>
                {
                    components.map(component => (
                        <li>
                            <img src= { component.image}/>
                            <h1>{ component.name }</h1>
                            <p>{ component.description }</p>
                        </li>   
                    ))
                }    
            </ul>
        </div>
    )
}