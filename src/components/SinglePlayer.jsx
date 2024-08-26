export default async function SinglePlayer() {
    const [singlePlayer, setSinglePlayer] = useState(null)
    try {
       const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2407-ftb-et-web-ft/players/player-id"
       );
       const result = await response.json();
       setSinglePlayer(result);

    } catch (error) {
        console.error(error);
    }
}