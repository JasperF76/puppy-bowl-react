import { useState, useEffect } from "react";
import SinglePlayer from "./SinglePlayer";
import { useNavigate } from "react-router-dom";
import NewPlayerForm from "./NewPlayerForm";

export default function AllPlayers({ setPlayer }) {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [searchParam, setSearchParam] = useState("");

    useEffect(() => {
        async function FetchAllPlayers() {
            try {
                const response = await fetch(
                    "https://fsa-puppy-bowl.herokuapp.com/api/2407-ftb-et-web-ft/players"
                );
                const result = await response.json();
                console.log(result);

                setPlayers(result.data.players);


            } catch (error) {
                console.error(error);
            }
        }

        FetchAllPlayers()
    }, []);

    const playersToDisplay = searchParam
        ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParam)) : players;

    return (<>
        <NewPlayerForm />
        <label>
            Search:{" "}
            <input type="text" placeholder="search" onChange={(e) => setSearchParam(e.target.value.toLowerCase())} />
        </label>

        {playersToDisplay.map((player) => {
            return (
                <div>

                    <h2 onClick={() => {
                        setPlayer(player);
                        navigate(`/players/${player.id}`)
                    }}>{player.name}</h2>
                    <h4>{player.breed}</h4>
                    <img src={player.imageUrl} alt="a cute dog" />
                </div>)
        })
        }
    </>

    )
}