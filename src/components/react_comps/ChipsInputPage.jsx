import React, { useState } from "react";

const ChipsInputPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [idCounter, setIdCounter] = useState(0);
  const [allChips, setAllChips] = useState([]);

  const handleInputOnchange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputOnKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const newChip = {
        id: idCounter,
        name: inputValue.trim(),
      };
      setAllChips([...allChips, newChip]);
      setIdCounter(idCounter + 1);
      setInputValue("");
    }
  };

  const handleChipDeleteClick = (idToDelete) => {
    setAllChips(allChips.filter((chip) => chip.id !== idToDelete));
  };

  return (
    <div className="flex">
      <div className="p-6 bg-gray-50 rounded-lg shadow-md shadow-black text-gray-800 text-sm leading-relaxed w-1/2">
        <h2 className="text-lg font-semibold mb-2">
          📝 Task: Chips Input Component
        </h2>
        <p>
          Create a <strong>Chips Input</strong> component that allows users to
          input a series of tags or keywords. These tags will be displayed as{" "}
          <em>"chips"</em> — small labels that users can add and remove
          dynamically.
        </p>

        <h3 className="mt-4 font-semibold">✨ Features:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Input Field:</strong> Users can type text into an input
            field.
          </li>
          <li>
            <strong>Add Chips:</strong> Pressing the <code>Enter</code> key adds
            the typed text as a new chip.
          </li>
          <li>
            Empty or whitespace-only chips should <strong>not</strong> be added.
          </li>
          <li>
            <strong>Remove Chips:</strong> Users can delete a chip by clicking
            the <strong>"X"</strong> button next to it.
          </li>
          <li>
            <strong>Horizontal Display:</strong> Chips should be displayed in a
            horizontal list.
          </li>
          <li>
            <strong>Persistence:</strong> The list of chips should remain intact
            across component re-renders.
          </li>
        </ul>

        <h3 className="mt-4 font-semibold">⚠️ Important Points:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            The input field must be of type <code>text</code>.
          </li>
          <li>
            The delete button should be labeled <strong>"X"</strong>.
          </li>
          <li>
            If two chips have the same name, deleting one should{" "}
            <strong>not</strong> delete both.
          </li>
          <li>
            Use <code>onKeyDown</code> instead of <code>onKeyPress</code>{" "}
            (deprecated).
          </li>
          <li>
            Reference the UI structure of <code>chipsInput</code> properly.
          </li>
        </ul>
      </div>
      <div className="p-6 bg-gray-50 rounded-lg shadow-md shadow-black text-gray-800 text-sm leading-relaxed w-1/2">
        <input
          type="text"
          placeholder="Enter text"
          value={inputValue}
          onChange={handleInputOnchange}
          onKeyDown={handleInputOnKeyDown}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
        />

        {allChips.length > 0 &&
          allChips.map((chip) => (
            <span
              key={chip.id}
              className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-md shadow-md m-1"
            >
              {chip.name}
              <button
                onClick={() => handleChipDeleteClick(chip.id)}
                className="ml-2 text-white text-md cursor-pointer hover:text-white/80"
              >
                &times;
              </button>
            </span>
          ))}
      </div>
    </div>
  );
};

export default ChipsInputPage;
