import { useState } from "react";

export default function NewPlayerForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("");
    const [team, setTeam] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch(
                "https://fsa-puppy-bowl.herokuapp.com/api/2407-ftb-et-web-ft/players",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name, breed, status, team, imageUrl
                    }),
                }
            );
            const result = await response.json();
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <>
            <h2>Sign Up!</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    <strong>Name:</strong> <input type="text" onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    <strong>Breed:</strong> <input type="text" onChange={(e) => setBreed(e.target.value)} />
                </label>
                <label>
                    <strong>Status:</strong> <input type="text" onChange={(e) => setStatus(e.target.value)} />
                    <select id="status" type="text" name="status">
                    <option value="field">Field</option>
                    <option value="bench">Bench</option>
                </select>
            </label>
            <label>
                <strong>Team:</strong> <input type="text" onChange={(e) => setTeam(e.target.value)} />
            </label>
            <label>
                <strong>Image:</strong> <input type="text" onChange={(e) => setImageUrl(e.target.value)} />
            </label>
            <button>Submit</button>
        </form >
        </>
    )
}