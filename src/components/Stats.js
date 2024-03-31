
function Stats({ items }) {
    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const precentagePackedItems = Math.round((numPacked / numItems) * 100);
    return (

        items.length ?
            <footer className="stats">
                <em>
                    {precentagePackedItems === 100 ? "you Have got Everything! Ready to go ✈️" : `        🧳 You Have ${numItems} Items on your list, and you already packed ${numPacked} (${precentagePackedItems}%)`}
                </em>
            </footer>
            :
            <footer className="stats">
                <em>
                    Start Adding some Items to your packing list 🚀
                </em>
            </footer>
    )
}


export default Stats
