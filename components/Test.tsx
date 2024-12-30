"use client";

import React, { useState } from "react";

const Test = () => {
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
            i == index ? {...item, checked: !item.checked} : item
        );
        setItems(updateItems);
    };

    const deleteItemHandler = (index) => {
        const updateItems = items.filter((_, i) => i !== index);
        setItems(updateItems);
    };


    return (
        <div className="flex flex-col justify-center items-center">
            <input
                type="text"
                value={inputData}
                onChange={handleInputChange}
                placeholder="Enter text"
                className="border rounded p-2 mb-2"
            />
            <button 
                onClick={addItems} 
                className="bg-blue-500 text-white px-4 py-2 rounded">
                Add
            </button>
            <div className="flex flex-wrap">
                <div className="mt-4">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-wrap border-b p-2">
                            <input 
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => checkboxHandler(index)}
                            />
                            <p className={`${item.checked ? "line-through" : ""}`}>{item.text}</p>
                            <button 
                                onClick={() => deleteItemHandler(index)} 
                                className="ml-2 bg-red-500 text-white px-2 py-1 rounded">
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Test;
