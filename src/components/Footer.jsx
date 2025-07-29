export default function Footer({ items }) {
    const availableItem = items.length ? items.length : 0;
    const checkedItem = items.filter((i) => i.isChecked === true).length;
    const percentageItem = availableItem ? parseFloat(Math.floor((checkedItem / availableItem) * 100)) : 0;
    return (
        <footer className="stats">
            Ada {availableItem} barang di daftar, {checkedItem} barang sudah selesai <span className="progress">({percentageItem}%)</span>
            <div className="progress-container">
                <progress value={percentageItem} max="100"></progress>
                <p className="progress-counter">{percentageItem}%</p>
            </div>
        </footer>
    );
}
