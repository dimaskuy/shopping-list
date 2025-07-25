import { useState } from "react";
import { useEffect } from "react";

// COMPONENTS
import Header from "./Header.jsx";
import ToTopBtn from "./ToTopBtn.jsx";
import AddForm from "./AddForm.jsx";
import ListItem from "./ListItem.jsx";
import Footer from "./Footer.jsx";
// DATA
import groceryItems from "../data/groceryItems.js";

function App() {
    // lifting-state-up!
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem("groceryItems");
        return storedItems ? JSON.parse(storedItems) : groceryItems;
    }); // mengambil data items ke localStorage (jika ada)

    useEffect(() => {
        localStorage.setItem("groceryItems", JSON.stringify(items));
    }, [items]);

    const [sortBy, setSortBy] = useState("input");

    function handleNewItems(item) {
        if (Array.isArray(items)) {
            setItems([...items, item]);
        } else {
            setItems([item]);
        }
    }

    function handleToggleCheck(id) {
        setItems((items) => items.map((item) => (item.id === id ? { ...item, isChecked: !item.isChecked } : item)));
    }

    function handleDeleteItem(id) {
        // mengirimkan ulang items tanpa item di tuju
        if (!items) return [];
        // setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, isDeleted: true } : item)));
        return setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleClearAll() {
        const result = confirm("Akan membersihkan semua daftar disini. Yakin?");
        if (result) {
            localStorage.removeItem("groceryItems");
            setItems([]);
        }
    }

    return (
        <>
            <div className="app">
                <ToTopBtn />
                <Header />
                <AddForm onNewItem={handleNewItems} />
                <ListItem items={items} sortBy={sortBy} setSortBy={setSortBy} onDeleteItem={handleDeleteItem} onToggleCheck={handleToggleCheck} onClearAll={handleClearAll} />
                <Footer items={items} />
            </div>
        </>
    );
}

export default App;
