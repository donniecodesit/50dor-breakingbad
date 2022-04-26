import React, {useState} from "react";

export default function SearchBar({setSearch}) {
    const [input, setInput] = useState("");
    const handleChange = ({target}) => {
        setInput(target.value);
        setSearch(target.value);
    }
    return (
        <div className="center">
            <section>
                <form>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Search Characters..."
                        autoFocus
                        name="search"
                        value={input}
                        onChange={handleChange}
                        id="search"
                    />
                </form>
            </section>
        </div>
    )
}