import { useRef, useEffect } from "react";

export default function ToTopBtn() {
    const btnRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (window.scrollY > 150 && window.scrollY < maxScroll) {
                btnRef.current.classList.remove("none");
            } else {
                btnRef.current.classList.add("none");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <a href="#list-menu" className="to-top none" ref={btnRef}>
            <span>
                <img src="public/circle-up.svg" alt="UP" className="icon-up" />
            </span>
        </a>
    );
}

// JS Vanilla
// (function windowScrollTop() {
//     const value = 150;

//     window.addEventListener("scroll", function () {
//         const btn = document.querySelector(".to-top");
//         const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
//         if (document.body.scrollTop > value || document.documentElement.scrollTop > value) {
//             btn.classList.remove("none");
//         } else {
//             btn.classList.add("none");
//         }

//         if (window.scrollY >= maxScroll) {
//             btn.classList.add("none");
//         }
//     });
// })();

// function ToTopBtn() {
//     return (
//         <a href="#list-menu" className="to-top none">
//             <span>&#11165;</span>
//         </a>
//     );
// }
