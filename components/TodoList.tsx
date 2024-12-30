"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

const TodoList = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);

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


    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className="flex justify-center items-center h-full">
                <input
                    type="text"
                    value={inputData}
                    onChange={handleInputChange}
                    className="border rounded h-9 w-full shadow-black"
                />
                <Button
                    onClick={addItems}
                    className="bg-cyan-400 text-white rounded">
                    Add Item
                </Button>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                {items.map((item, index) => (
                    <div key={index} className="flex w-full justify-between items-center py-2 shadow-md rounded-md px-1">
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
                            <Button
                                onClick={() => deleteItemHandler(index)}
                                className=" bg-red-500 text-whit h-4 rounded hover:bg-red-600">
                                Delete
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;