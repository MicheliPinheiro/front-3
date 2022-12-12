import './style.scss'

export function QuintaAulaItem(props) {
    return (
        <div className='quinta-aula-item-componente'>
            <li>
                <img src= {props.item.image} />
                <h1>{props.item.title} </h1>
                <p>{props.item.text} </p>
            </li>
        </div>
    )
}