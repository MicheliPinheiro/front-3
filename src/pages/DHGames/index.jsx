import './style.scss'
import { NewGamesItem } from "../../components/NewGamesItem"
import { HalloweenOffersItem } from '../../components/HalloweenOffersItem'
import { EarlyAccessGamesItem } from '../../components/EarlyAccessGamesItem'
import { CheapGamesItem } from '../../components/CheapGamesItem'

export function DHGAmes() {
    const newGames = [
        {
            name: 'Hollow Knight',
            plataforms: ['windows'],
            categories: ['Metroidvania', 'Souls-like', 'Platformer2D'],
            price: '20,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg'
        },
        {
            name: "Don't Starve",
            plataforms: ['windows'],
            categories: ['SurvivalOpen', 'World Survival', 'CraftCrafting'],
            price: '30,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg'
        },
        {
            name: 'Cult of the Lamb',
            plataforms: ['windows'],
            categories: ['Horror', 'Cute', 'Roguelike'],
            price: '45,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1313140/header.jpg'
        }
    ]

    const halloweenGames = [
        {
            name: 'Inscryption',
            categories: ['Card', 'BattlerCard', 'GameStory Rich'],
            oldPrice: '100,00',
            newPrice: '30,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1092790/header.jpg'
        },
        {
            name: 'Hades',
            categories: ['Action', 'Roguelike', 'Indie', 'Action'],
            oldPrice: '80,00',
            newPrice: '15,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg'
        },
        {
            name: 'Darkest Dungeon',
            categories: ['Turn-BasedCombat', 'DarkFantasy', 'Roguelike'],
            oldPrice: '30,00',
            newPrice: '15,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/262060/header.jpg'
        },
        {
            name: 'Outlast',
            categories: ['Horror', 'First-Person', 'Survival Horror'],
            oldPrice: '100,00',
            newPrice: '40,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/238320/header.jpg'
        }
    ]

    const earlyAccessGames = [
        {
            name: 'Stardew Valleyt',
            plataforms: ['windows'],
            categories: ['Farming Sim', 'Life Sim', 'Pixel Graphics'],
            price: '20,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg'
        },
        {
            name: "Little Nightmares",
            plataforms: ['windows'],
            categories: ['Horror', 'Atmospheric', 'Adventure'],
            price: '30,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/424840/header.jpg'
        },
        {
            name: 'Bendy and the Ink Machine',
            plataforms: ['windows'],
            categories: ['Horror', 'First-Person', 'Singleplayer', 'PuzzleDark'],
            price: '45,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/622650/header.jpg'
        }
    ]

    const cheapGames = [
        {
            name: 'Little Misfortune',
            categories: ['Adventure', 'Point & Click', 'Indie'],
            oldPrice: '100,00',
            newPrice: '19,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/714120/header.jpg'
        },
        {
            name: 'Limbo',
            categories: ['Puzzle', 'Platformer', 'Indie'],
            oldPrice: '80,00',
            newPrice: '15,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/48000/header.jpg'
        },
        {
            name: 'Darkwood',
            categories: ['Horror', 'Survival'],
            oldPrice: '30,00',
            newPrice: '10,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/274520/header.jpg'
        },
        {
            name: 'Slender: The Arrival',
            categories: ['Horror', 'Survival Horror', 'First-Person'],
            oldPrice: '100,00',
            newPrice: '20,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/252330/header.jpg'
        }
    ]

    return (
        <><div>
            <h1>DH Games</h1>
            <h2>STORE</h2>
            <h2>LIBRARY</h2>
            <h2>COMMUNITY</h2>
            <h2>ABOUT</h2>
            <h2>PROFILE</h2>
        </div>
            <div>
                {/* COLOCAR O BANNER */}
                <section>
                    <h1 className='main title'>New Games</h1>
                    <ul className='components-new-games'> {newGames.map(
                        component => {
                            return (
                                <NewGamesItem
                                    key={component.id}
                                    item={component} />
                            )
                        }
                    )}
                    </ul>
                </section>
                <section>
                    <h1 className='main title'>Halloween Offers</h1>
                    <ul className='components-halloween-offers'> {halloweenGames.map(
                        component => {
                            return (
                                <HalloweenOffersItem
                                    key={component.id}
                                    item={component} />
                            )
                        }
                    )}
                    </ul>
                </section>
                <section>
                    <h1 className='main title'>Early Access Games</h1>
                    <ul className='components-early-access-games'> {earlyAccessGames.map(
                        component => {
                            return (
                                <EarlyAccessGamesItem
                                    key={component.id}
                                    item={component} />
                            )
                        }
                    )}
                    </ul>
                </section>
                <section>
                    <h1 className='main title'>Cheap Games</h1>
                    <ul className='components-cheap-games'> {cheapGames.map(
                        component => {
                            return (
                                <CheapGamesItem
                                    key={component.id}
                                    item={component} />
                            )
                        }
                    )}
                    </ul>
                </section>
            </div></>
    )
}

// https://www.figma.com/file/Eb2HlHiNayieo69MiqI3jy/Definitely-not-Steam-at-Halloween-%3Ap?node-id=0%3A1&t=TEUgtPyMsuaN3hn8-0