import { useState } from "react";
import items from "../../utils/mockdataArrayOfObjects";

const AccordionPage = () => {
  const [openId, setOpenId] = useState(null);
  const [openIndex, setopenIndex] = useState(0);
  const handleToggle = (index) => {
    setOpenId(openId == index ? null : index);
  };

  const handleAccordion = (index) => {
    setopenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-gray-800 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold mb-4">
          📂 Accordion Component Task
        </h2>

        <p>
          Build a <strong>React Accordion</strong> component that allows users
          to expand and collapse sections of content. When a section is clicked,
          it should toggle its visibility. If a new section is clicked, it
          should expand while the others collapse — ensuring only one section is
          open at a time.
        </p>

        <h3 className="mt-4 font-semibold text-gray-700">✅ Requirements:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Display a list of accordion items, each with a{" "}
            <strong>title</strong> and <strong>content</strong>.
          </li>
          <li>
            Clicking on a title expands its content and collapses any previously
            opened item.
          </li>
          <li>If an already open item is clicked, it should collapse.</li>
          <li>The component should accept an array of items as props.</li>
          <li>
            Each item must contain:
            <ul className="list-disc list-inside ml-4">
              <li>
                <code>title</code>: The heading of the accordion item.
              </li>
              <li>
                <code>content</code>: The details inside the accordion item.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className="mt-4 font-semibold text-gray-700">
          ⚠️ Constraints & Edge Cases:
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <code>items</code> prop should be an array of objects{" "}
            <code>{"{ title: string, content: string }"}</code>.
          </li>
          <li>
            If <code>items</code> is empty or invalid, display a message:{" "}
            <em>"No items available."</em>
          </li>
          <li>
            Optimize performance using <code>useState</code> and conditional
            rendering.
          </li>
        </ul>

        <h3 className="mt-4 font-semibold text-gray-700">🎨 Reference UI:</h3>
        <p>
          Component name: <code>Accordion</code>
        </p>
      </div>
      <div className="w-5/12 absolute m-auto top-[180px] left-0 right-0">
        <h2>1. Accordion with array item id as key</h2>
        {/* Using arrayItem.id as a key */}
        <div className="mb-14">
          {items.map((arrItem) => {
            return (
              <div key={arrItem.id} className="w-full shadow shadow-black mb-2">
                <button
                  onClick={() => handleToggle(arrItem.id)}
                  className="w-full h-[50px] bg-amber-700 text-white px-4 border-2 border-b-2 border-b-amber-900 cursor-pointer flex justify-between items-center"
                >
                  {arrItem.title}
                </button>
                {openId === arrItem.id && (
                  <div className="p-4">{arrItem.content}</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Using index as a key */}
        <h2>2. Accordion with array index as key</h2>
        <div>
          {items.map((arrItem, index) => {
            return (
              <div key={index} className="w-full shadow shadow-black mb-2">
                <button
                  onClick={() => handleAccordion(index)}
                  className="w-full h-[50px] bg-amber-200 text-black px-4 border-2 border-b-2 border-b-amber-900 cursor-pointer flex justify-between items-center"
                >
                  {arrItem.title}
                </button>
                {openIndex === index && (
                  <div className="p-4">{arrItem.content}</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="w-full">
          <br />
          <br />
          ⚙️ Execution Flow - <br />
          Triggered by: A button click (usually on an accordion header). <br />
          - Input: The index of the clicked accordion item.
          <br /> <br />- Behavior:
          <br />- If the clicked item is already open (openIndex === index), it
          sets openIndex to null, closing it. <br />- If it's a different item,
          it sets openIndex to that item's index, opening it and closing any
          previously open item. <br />
          <br />
          📦 State Management <br />- openIndex is a state variable managed by
          useState. <br />- setOpenIndex updates which accordion item is
          currently open. <br />
          <br />
          🧩 Example <br />
          If openIndex = 2 and you click on item 2, it closes. <br />
          If you click on item 3, it opens item 3 and closes item 2.
        </div>
      </div>{" "}
    </>
  );
};

export default AccordionPage;
