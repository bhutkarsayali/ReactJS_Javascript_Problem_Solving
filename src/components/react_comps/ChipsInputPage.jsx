import React from "react";

const ChipsInputPage = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-md text-sm text-gray-800 leading-relaxed">
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
          <strong>Input Field:</strong> Users can type text into an input field.
        </li>
        <li>
          <strong>Add Chips:</strong> Pressing the <code>Enter</code> key adds
          the typed text as a new chip.
        </li>
        <li>
          Empty or whitespace-only chips should <strong>not</strong> be added.
        </li>
        <li>
          <strong>Remove Chips:</strong> Users can delete a chip by clicking the{" "}
          <strong>"X"</strong> button next to it.
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
  );
};

export default ChipsInputPage;
