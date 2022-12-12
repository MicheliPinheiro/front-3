import './style.scss'
import youtubeImage from './../../assets/images/youtube.png'
import canvaImage from './../../assets/images/canva.png'
import { QuintaAulaItem } from '../../components/QuintaAulaItem'

export function QuintaAula() {
    
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
            title: 'Outro Component',
            image: canvaImage,
            text: 'Lorem ipsum, dolor sit.'
        }
    ]
    return (
        <div className='quinta-aula-componente' >
            {/* Isolei um trecho de código e chamei aqui. */}
            <h1 className='main title'>Componentes identificados</h1>
            <ul className='components-finded'> {
                componentsFinded.map(
                    component => {
                        return (
                            <QuintaAulaItem
                                // a key precisa ficar no primeiro elemento, por isso devo manter aqui e não no arquivo QuintaAulaItem.
                                key={component.id} 
                                item={component}
                            />
                        )
                    }
                )
            }
            </ul>
        </div>
    )
}