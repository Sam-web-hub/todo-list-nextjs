"use client";

import React, { use, useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"


const TodoList = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        const savedItems = localStorage.getItem("todoItems");
        if (savedItems) {
            setItems(JSON.parse(savedItems));
        }
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            localStorage.setItem("todoItems", JSON.stringify(items));
        }
    }, [items, isClient]);

    const addItems = () => {
        if (inputData.trim() !== "") {
            setItems([...items, { text: inputData, checkbox: false }]);
            setInputData("");
        }
    };

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const checkboxHandler = (index) => {
        const updateItems = items.map((item, i) =>
            i == index ? { ...item, checked: !item.checked } : item
        );
        setItems(updateItems);
    };

    const deleteItemHandler = (index) => {
        const updateItems = items.filter((_, i) => i !== index);
        setItems(updateItems);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addItems();
        }
    };

    if (!isClient) {
        return null;
    }


    return (
        <div className="flex flex-col justify-center py-1">
            <div className="flex">
                <input
                    type="text"
                    value={inputData}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="border rounded h-9 w-full shadow-black mx-2"
                />
                <button
                    onClick={addItems}
                    className="bg-cyan-400 w-40 hover:shadow-md hover:bg-cyan-500 text-white rounded gap-2 me-2">
                    Add Item
                </button>
            </div>
                <ScrollArea className="flex flex-col justify-center items-center max-h-[43vh]">
                {items.map((item, index) => (
                    <div key={index} className="flex w-full justify-between items-center py-2 shadow-sm px-1">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => checkboxHandler(index)}
                                className="mx-2"
                            />
                            <p className={`${item.checked ? "line-through" : ""}`}>{item.text}</p>
                        </div>
                        <div className="flex items-center">
                            <button
                                onClick={() => deleteItemHandler(index)}
                                className=" bg-red-500 text-whit w-20 rounded hover:bg-red-600 hover:shadow-md mx-1.5">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </ScrollArea>
        </div>
    );
};

export default TodoList;