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
                
                <h3>Name: {player.name}</h3>
                <h3>Breed: {player.breed}</h3>
                <h3>Status: {player.status}</h3>
                <h3>Team: {player.teamId}</h3>
                <img src={player.imageUrl} alt="a cute dog" className="single-pic" />
                <br></br>
                <button onClick={() =>
                    navigate("/")}>Back to Players</button>
                <button onClick={() =>
                    DeletePlayer(player.id)}>Delete Player</button>
            </div>
        </>
    )       
}
