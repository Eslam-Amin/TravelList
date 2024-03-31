import { useState } from "react"
import Item from "./Item";


function PackingList({ items, onDeleteItem, onCheckItem, onClearList }) {

    const [sortBy, setSortBy] = useState("input")

    let sortedItems;
    if (sortBy === "input") sortedItems = items;
    else if (sortBy === "description") sortedItems = items.slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    else if (sortBy === "packed") sortedItems = items.slice()
        .sort((a, b) => Number(b.packed) - Number(a.packed));
    else if (sortBy === "quantity") sortedItems = items.slice()
        .sort((a, b) => a.quantity - b.quantity);

    return (
        <div className="list">
            <ul>
                {
                    sortedItems.map(item => <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onCheckItem={onCheckItem} />)
                }
            </ul>


            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort By input Order</option>
                    <option value="description">Sort By Description</option>
                    <option value="packed">Sort By Packed Status</option>
                    <option value="quantity">Sort By Quantity</option>
                </select>
                <button onClick={onClearList}>Clear list</button>
            </div>
        </div>
    )
}


export default PackingList
