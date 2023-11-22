import { useState } from 'react';
import { Accordion as FlowbiteAccordion } from 'flowbite-react';

const AccordionFlowbite = () => {
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
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white  border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:hover:bg-gray-800 gap-3 ${
              activeAccordion === 1 ? '' : ''
            }`}
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={activeAccordion === 1}
            aria-controls="accordion-collapse-body-1"
            onClick={() => toggleAccordion(1)}
          >
            <span>Up to date curriculum</span>
            <svg data-accordion-icon className={`w-3 h-3 rotate-180 shrink-0 ${activeAccordion === 1 ? 'rotate-0' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${activeAccordion === 1 ? 'block' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
          <div className="mb-2 text-gray-500 dark:text-gray-400">Up to date courses with interesting graphics to kickstart your fundamentals and accelerate your hard skills.</div>
          <div className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{' '}
            <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">
              get started
            </a>{' '}
            and start developing websites even faster with components on top of Tailwind CSS.
          </div>
        </div>

        {/* Item 2 */}
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white  border-gray-200 border-t focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:hover:bg-gray-800 gap-3 ${
              activeAccordion === 2 ? 'bg-gray-100 dark:bg-gray-800' : ''
            }`}
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded={activeAccordion === 2}
            aria-controls="accordion-collapse-body-2"
            onClick={() => toggleAccordion(2)}
          >
            <span>Is there a Figma file available?</span>
            <svg data-accordion-icon className={`w-3 h-3 rotate-180 shrink-0 ${activeAccordion === 2 ? 'rotate-0' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-2" className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${activeAccordion === 2 ? 'block' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-2">
          <div className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</div>
          <div className="text-gray-500 dark:text-gray-400">
            Check out the{' '}
            <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">
              Figma design system
            </a>{' '}
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </div>
        </div>

        {/* Item 3 */}
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border-t  border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:hover:bg-gray-800 gap-3 ${
              activeAccordion === 3 ? 'bg-gray-100 dark:bg-gray-800' : ''
            }`}
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded={activeAccordion === 3}
            aria-controls="accordion-collapse-body-3"
            onClick={() => toggleAccordion(3)}
          >
            <span>What are the differences between Flowbite and Tailwind UI?</span>
            <svg data-accordion-icon className={`w-3 h-3 rotate-180 shrink-0 ${activeAccordion === 3 ? 'rotate-0' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-3" className={`p-5 border border-t-0 border-gray-200 dark:border-gray-700 ${activeAccordion === 3 ? 'block' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-3">
          <div className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas
            Tailwind UI offers sections of pages.
          </div>
          <div className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</div>
          <div className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</div>
          <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400"></ul>
        </div>
      </div>
    </FlowbiteAccordion>
  );
};

export default AccordionFlowbite;
