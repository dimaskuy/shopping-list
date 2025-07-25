import Item from "./Item";

function EmptyItemMsg({ items }) {
    {
        return items === undefined || items.length === 0 ? <p className="emptyItemMsg">Belum ada apa-apa disini! 🔥</p> : null;
    }
}

export default function ListItem({ items, sortBy, setSortBy, onDeleteItem, onToggleCheck, onClearAll }) {
    let sortedItems = [...items];

    switch (sortBy) {
        case "name":
            sortedItems.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "length":
            sortedItems.sort((a, b) => a.name.length - b.name.length);
            break;
        case "checked":
            console.log(sortedItems);
            sortedItems.sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
            break;

        case "input":
        default:
            sortedItems = items;
            break;
    }

    return (
        <>
            <div className="list">
                {items === undefined || sortedItems.length === 0 ? (
                    <EmptyItemMsg items={items} />
                ) : (
                    <ul>{items === undefined || sortedItems.map((item) => <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleCheck={onToggleCheck} />)}</ul>
                )}
            </div>

            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Berdasarkan urutan input</option>
                    <option value="name">Berdasarkan nama barang</option>
                    <option value="length">Berdasarkan karakter terpendek</option>
                    <option value="checked">Berdasarkan ceklis</option>
                </select>
                <button onClick={onClearAll}>&#9888; Bersihkan Semua</button>
            </div>
        </>
    );
}
