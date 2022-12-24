import { FormEvent } from "react";

export default function Form() {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            first: event.currentTarget.first.value,
            last: event.currentTarget.last.value,
        };

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/form";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);

        const result = await response.json();
        alert(`Is this your full name: ${result.data}`);
    };
    return (
        <form onSubmit={handleSubmit} method="post">
            <label htmlFor="first">First name:</label>
            <input type="text" id="first" name="first" />
            <label htmlFor="last">Last name:</label>
            <input type="text" id="last" name="last" />
            <button type="submit">Submit</button>
        </form>
    );
}
