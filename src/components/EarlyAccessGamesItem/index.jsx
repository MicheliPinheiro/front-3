import './style.scss'

export function EarlyAccessGamesItem(props) {
    return (
        <div className='early-access-games-item-componente'>
            <li>
                <h1>{props.item.name} </h1>
                <h2>{props.item.plataforms} </h2>
                <h2>{props.item.categories} </h2>
                <h2>{props.item.price} </h2>
                <img src= {props.item.picture} />
            </li>
        </div>
    )
}