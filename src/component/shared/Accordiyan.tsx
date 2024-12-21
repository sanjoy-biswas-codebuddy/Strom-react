import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";

interface AccordionProps {
  data: Array<{ question: string; answer: string }>;
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const leftColumn = data.slice(0, 5);
  const rightColumn = data.slice(5);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
      <div>
        {leftColumn.map((item, index) => (
          <Disclosure
            as="div"
            key={index}
            className="border border-[#FCACAC] rounded-[12px] p-[20px] mb-4 shadow-card"
          >
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full items-center justify-between text-[#111111] relative">
                  <span className="text-[16px] font-bold text-left pr-[25px]">
                    {item.question}
                  </span>
                  {open ? (
                    <MinusIcon className="size-6 fill-[#FB0201] absolute right-0 top-0" />
                  ) : (
                    <PlusIcon className="size-6 fill-[#FB0201] absolute right-0 top-0" />
                  )}
                </DisclosureButton>
                <DisclosurePanel className="text-gray-500 text-[16px] font-light pt-4">
                  {item.answer}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </div>

      <div>
        {rightColumn.map((item, index) => (
          <Disclosure
            as="div"
            key={index}
            className="border border-[#FCACAC] rounded-[12px] p-[20px] mb-4 shadow-card"
          >
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full items-center justify-between text-[#111111] relative">
                  <span className="text-[16px] font-bold text-left pr-[25px]">
                    {item.question}
                  </span>
                  {open ? (
                    <MinusIcon className="size-6 fill-[#FB0201] absolute right-0 top-0" />
                  ) : (
                    <PlusIcon className="size-6 fill-[#FB0201] absolute right-0 top-0" />
                  )}
                </DisclosureButton>
                <DisclosurePanel className="text-gray-500 text-[16px] font-light pt-4">
                  {item.answer}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
