import { useState } from "react";
import { quotes } from "./App.jsx";

export default function AddForm({ onNewItem }) {
    const quantityNum = [...Array(20)].map((x, i) => (
        <option key={i + 1} value={i + 1}>
            {i + 1}
        </option>
    ));
    const [name, setName] = useState("");
    const [qty, setQty] = useState(1);

    function handleSubmit(e) {
        // setelah mengisikan input/submit
        e.preventDefault();
        if (!name || name === "") {
            console.error("isikan input dulu!");
            return;
        }

        const newItem = { name, quantity: qty, isChecked: false, id: Date.now(), isDeleted: false };
        onNewItem(newItem);

        console.log("berhasil menambahkan:", newItem);
        // me-reset setelah form di submit
        setName("");
        setQty(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>{quotes}</h3>
            <div className="select-container">
                <input placeholder={1} type="number" id="qty-list" name="qty" list="qtyList" min={1} onChange={(e) => setQty(e.target.value)} />
                <datalist id="qtyList" value={qty}>
                    {quantityNum}
                </datalist>
                <input
                    type="text"
                    placeholder="nama barang..."
                    value={name}
                    onChange={(e) => {
                        if (name.length >= 40) {
                            alert("Jangan masukkin karakter lebih dari 50 huruf 🙏😭");
                            setName("");
                            return;
                        }
                        setName(e.target.value);
                    }}
                />
                <button className="add-btn">Tambah</button>
            </div>
        </form>
    );
}
