"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Paginate({ notes }) {
    const route = useRouter();
    const searchParams = useSearchParams();

    const itemsPerPage = 5;

    const page = parseInt(searchParams.get("p"), notes) || 1;
    const pageCount = Math.ceil(notes / itemsPerPage);

    const [currentId, setCurrent] = useState(1);

    // create start & end Array
    const listArray = []
    for (let i = 0; i < pageCount; i++) {
        listArray.push(i + 1)
    }
    const startArray = []
    for (let i = 0; i < pageCount; i++) {
        startArray.push(i * itemsPerPage);
    }

    const endArray = []
    for (let i = 0; i < pageCount; i++) {
        endArray.push((i + 1) * itemsPerPage);
    }

    const lastArrayIndex = listArray.at(-1);

    // handle get value for params
    function getValue(e) {
        let btnId = e.currentTarget.id;
        setCurrent(btnId);
        if (lastArrayIndex >= page) {
            route.push(`?p=${btnId}&s=${startArray[btnId - 1]}&e=${endArray[btnId - 1]}`);
        }
    }

    // handle prevPage
    function prevPage() {
        if (currentId >= 1) {
            setCurrent(prev => prev - 1);
            route.push(`?p=${currentId - 1}&s=${startArray[currentId - 2]}&e=${endArray[currentId - 2]}`);
        }
    }
    // handle nextPage
    function nextPage() {
        setCurrent(prev => prev + 1);
        if (currentId <= lastArrayIndex) {
            route.push(`?p=${currentId + 1}&s=${startArray[currentId]}&e=${endArray[currentId]}`);
        }
    }

    return (
        <div
            id="pagination"
            className="pagination-container"
            style={{
                margin: "auto",
                bottom: 0,
                display: 'flex',
                background: "none",
                padding: "1rem",
            }}
        >
            <button
                className="btnPrevNext"
                onClick={prevPage}
                disabled={currentId === 1 ? true : false}
            >
                قبلی
            </button>
            {
                listArray.map((item, key) => (
                    <button
                        className={`btn ${page === item ? "active" : null}`}
                        id={item}
                        onClick={getValue}
                        key={key}
                        color="primary"
                    >
                        {item}
                    </button>
                ))
            }
            <button
                className="btnPrevNext"
                onClick={nextPage}
                disabled={currentId === pageCount ? true : false}
            >
                بعدی
            </button>
        </div>
    )
}



