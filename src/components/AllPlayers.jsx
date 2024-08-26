export default async function AllPlayers() {
    const [players, setPlayers] = useState(null)
    try {
       const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2407-ftb-et-web-ft/players"
       );
       const result = await response.json();
       setPlayers(result);

    } catch (error) {
        console.error(error);
    }
}