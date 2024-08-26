import { useState, useEffect } from "react";


    export default function AllPlayers() {
        const [players, setPlayers] = useState([]);
        console.log(players);
        const [error, setError] = useState(null);

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
        

return (<>
{
    players.map((player) => {
        return <h3>{player.name}</h3>
    })
}
</>

)
}