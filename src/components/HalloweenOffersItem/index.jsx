import './style.scss'

export function HalloweenOffersItem(props) {
    return (
        <div className='halloween-offers-item-componente'>
            <li>
                <h1>{props.item.name} </h1>
                <h2>{props.item.categories} </h2>
                <h2>{props.item.oldPrice} </h2>
                <h2>{props.item.newPrice} </h2>
                <img src= {props.item.picture} />
            </li>
        </div>
    )
}