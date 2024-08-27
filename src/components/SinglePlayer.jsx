import { useNavigate } from "react-router-dom"

export default function SinglePlayer({ player }) {
    const navigate = useNavigate();

    async function DeletePlayer(playerId) {
        try {
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2407-ftb-et-web-ft/players/${playerId}`,
        {
            method: "DELETE",
        });
        navigate("/") 
        } catch (error) {
            
        }
    }

    return (
        <>
            <div>
                
                <h3>{player.name}</h3>
                <h3>{player.breed}</h3>
                <h3>{player.imageUrl}</h3>
                <button onClick={() =>
                    navigate("/")}>Back to Players</button>
                <button onClick={() =>
                    DeletePlayer(player.id)}>Delete Player</button>
            </div>
        </>
    )       
}
