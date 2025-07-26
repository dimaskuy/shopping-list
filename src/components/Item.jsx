export default function Item({ item, onDeleteItem, onToggleCheck }, onSortedCheck) {
    // item.id, item.name, item.quantity, item.isChecked;
    const checkItemID = "check-item" + item.id;
    const maxCharName = 28;
    let isSortedCheck = onSortedCheck;

    function seeMoreBtn(e) {
        e.target.classList.toggle("view");
        e.target.parentElement.classList.toggle("height-full");
        e.target.textContent = `tampilkan ${e.target.classList.contains("view") ? "sedikit" : "lebih"}`;
    }

    return (
        // ${item.isDeleted ? "disappear-animate" : ""}
        <>
            <li key={item.id} className={`popup-animate ${item.isChecked ? "checked" : ""} ${item.name.length >= maxCharName ? "overload-text" : ""}`} data-id={item.id}>
                <span title={item.name} className="item">
                    {item.name}
                </span>
                {item.name.length >= maxCharName ? (
                    <p className="see-more" onClick={seeMoreBtn}>
                        tampilkan lebih
                    </p>
                ) : (
                    ""
                )}
                <span className="qty-txt">
                    jmlh: <span className="qty">{item.quantity}</span>
                </span>
                <div className="btn-container">
                    <label htmlFor={checkItemID}>
                        Selesai
                        <input type="checkbox" id={checkItemID} checked={item.isChecked} onChange={() => onToggleCheck(item.id, isSortedCheck)} />
                    </label>
                    <button onClick={() => onDeleteItem(item.id)}>
                        Hapus <span>&times;</span>
                    </button>
                </div>
            </li>
        </>
    );
}
