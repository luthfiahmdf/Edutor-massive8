import { useState } from 'react';
import { Accordion as FlowbiteAccordion } from 'flowbite-react';

const Accordion = ({ allData }) => {
  console.log(allData);
  // State to manage the open/closed state of accordion items
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Function to toggle the accordion item
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <FlowbiteAccordion>
      <div id="accordion-collapse" data-accordion="collapse">
        {/* Item 1 */}
        {allData.map((data) => (
          <>
            <h2 id={`accordion-collapse-heading-${data.id}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-white border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:hover:bg-gray-800 gap-3 ${activeAccordion === 1 ? '' : ''
                  }`}
                data-accordion-target={`#accordion-collapse-body-${data.id}`}
                aria-expanded={activeAccordion === 1}
                aria-controls={`accordion-collapse-body-${data.id}`}
                onClick={() => toggleAccordion(data.id)}
              >
                <span>{data.title}</span>
                <svg data-accordion-icon className={`w-3 h-3 rotate-180 shrink-0 ${activeAccordion === 1 ? 'rotate-0' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>
            <div id={`accordion-collapse-body-${data.id}`} className={`p-5 border border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${activeAccordion === data.id ? 'block' : 'hidden'}`} aria-labelledby={`accordion-collapse-heading-${data.id}`}>
              <div className="mb-2 text-gray-500 dark:text-gray-400">
                {data.desc}
                </div>
            </div>
          </>
        ))}
      </div>
    </FlowbiteAccordion>
  );
};
export default Accordion;
