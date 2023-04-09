import React, {useState} from "react";
import data from "./components/data";
import "./styles.css"

export default function App(props) {
    const [search, setNewSearch] = useState('')
    function handleSearchChange(e){
        setNewSearch(e.target.value);
    }
    const filtered = !search ? data : data.filter(item => item.firstName.toLowerCase().includes(search.toLowerCase()));
    return(
        <div className="container">
            <input 
                className="input"
                placeholder="Search by firstname..."
                type="text"
                value={search}
                onChange={handleSearchChange}
                />
            <main>
                {filtered.map(item => {
                    return (
                        <div className="profile-container">
                            <img src={item.picture}/>
                            <div>
                                <p>{item.id}</p>
                                <h4>{item.title}. {item.firstName} {item.lastName}</h4>
                            </div>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}