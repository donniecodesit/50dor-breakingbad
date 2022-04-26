import React from "react";
import CharacterItem from "./CharacterItem";

export default function CharacterList({chars}) {
    return (
        <section className="cards">
            {
                chars.map((char) => (
                    <CharacterItem char={char} key={char.char_id} />
                ))
            }
        </section>
    )
}