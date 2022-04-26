export default function CharacterItem({char}) {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={char.img} alt="character" />
                </div>
                <div className="card-back">
                    <h1>{char.name}</h1>
                    <ul>
                        <li><strong>Nickname: {char.nickname}</strong></li>
                        <li><strong>Actor Name: {char.portrayed}</strong></li>
                        <li><strong>Birthday:  {char.birthday}</strong></li>
                        <li>
                            <strong>Status: </strong>
                            <span style={{color: char.status === "Alive" ? "green" : "red"}}>
                                {char.status}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}