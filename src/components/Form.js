import { useState } from "react";

function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        if (description) {
            const newItem = { id: Date.now(), description, quantity, packed: false };
            onAddItems(newItem);
        }
    }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 Trip? </h3>
            <select onChange={(e) => setQuantity(Number(e.target.value))}>
                {
                    Array.from({ length: 20 }, (_, index) =>
                        index + 1)
                        .map(
                            num => <option value={num} key={num}>
                                {num}
                            </option>
                        )
                }
            </select>
            <input type="text" placeholder="Item ..." value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>
        </form>
    )
}


export default Form
