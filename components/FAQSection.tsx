// // "use client"

// // import { useState } from 'react';

// // const FAQSection = () => {
// //   const [open, setOpen] = useState<number | null>(null);

// //   const toggleFAQ = (index: number) => {
// //     setOpen(open === index ? null : index);
// //   };

// //   const faqItems = [
// //     {
// //       question: "Is Postable free to use?",
// //       answer: "Yes, Postable is free to use. There are no hidden charges."
// //     },
// //     {
// //       question: "What social media platforms does this tool support?",
// //       answer: "Postable supports various platforms such as Facebook, Instagram, Twitter, and LinkedIn."
// //     },
// //     {
// //       question: "Can I customize the created images?",
// //       answer: "Yes, the images can be customized using Postable's built-in editor."
// //     },
// //     {
// //       question: "Do I need design skills to use this platform?",
// //       answer: "No, Postable is designed for both professionals and beginners with no design skills."
// //     },
// //     {
// //       question: "Do I need to know the format or size of each social media?",
// //       answer: "No, Postable automatically adjusts the size and format for different platforms."
// //     }
// //   ];

// //   return (
// //     <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-24 xl:pe-4 xl:ps-0">
// //       <header className="max-w-sm">
// //         <h3 className="text-2xl font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px]">
// //           FAQ
// //         </h3>
// //         <p className="hidden text-balance text-2xl font-medium text-neutral-950 md:mb-9 md:mt-4 md:block">
// //           Let’s help you with some of your frequently asked questions.
// //         </p>
// //       </header>
      
// //       <div className="relative flex w-full flex-col gap-4 md:flex-row md:gap-24">
// //         <div className="max-w-sm">
// //           <div className="hidden w-max flex-col md:flex">
// //             <span className="text-lg font-medium text-neutral-500">Couldn't find your answer?</span>
// //             <a target="_blank" className="flex items-center gap-1 text-md font-medium text-purple-400" href="https://forms.gle/DAowWbDE9fNKh8Ji8">
// //               Ask a Question 
// //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-3">
// //                 <path d="M5 12h14"></path>
// //                 <path d="m12 5 7 7-7 7"></path>
// //               </svg>
// //             </a>
// //           </div>
// //         </div>

// //         <div className="w-full md:ms-auto md:max-w-xl" data-orientation="vertical">
// //           {faqItems.map((item, index) => (
// //             <div key={index} className="border-b">
// //               <h3 data-orientation="vertical" className="flex">
// //                 <button
// //                   type="button"
// //                   aria-controls={`faq-${index}`}
// //                   aria-expanded={open === index}
// //                   onClick={() => toggleFAQ(index)}
// //                   className="flex flex-1 items-center justify-between py-4 transition-all hover:underline text-left text-md font-normal text-neutral-950 md:text-2xl md:font-medium"
// //                   style={{ fontFamily: 'Aspekta' }}
// //                 >
// //                   {item.question}
// //                   <svg
// //                     width="20"
// //                     height="20"
// //                     viewBox="0 0 20 20"
// //                     fill="none"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open === index ? 'rotate-180' : ''
// //                       }`}
// //                   >
// //                     <path
// //                       fillRule="evenodd"
// //                       clipRule="evenodd"
// //                       d="M4.11612 6.61612C4.60427 6.12796 5.39573 6.12796 5.88388 6.61612L10 10.7322L14.1161 6.61612C14.6043 6.12796 15.3957 6.12796 15.8839 6.61612C16.372 7.10427 16.372 7.89573 15.8839 8.38388L10.8839 13.3839C10.3957 13.872 9.60427 13.872 9.11612 13.3839L4.11612 8.38388C3.62796 7.89573 3.62796 7.10427 4.11612 6.61612Z"
// //                       fill="#121111"
// //                     />
// //                   </svg>
// //                 </button>
// //               </h3>
// //               <div
// //                 id={`faq-${index}`}
// //                 hidden={open !== index}
// //                 role="region"
// //                 aria-labelledby={`faq-${index}`}
// //                 className={`overflow-hidden text-sm ${open === index ? 'data-[state=open]:animate-accordion-down' : 'data-[state=closed]:animate-accordion-up'}`}
// //               >
// //                 <p className="pt-2">{item.answer}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default FAQSection;

// "use client"

// import { useState } from 'react';

// const FAQSection = () => {
//   const [open, setOpen] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setOpen(open === index ? null : index);
//   };

//   const faqItems = [
//     {
//       question: "Is Postable free to use?",
//       answer: "Yes, Postable is free to use. There are no hidden charges."
//     },
//     {
//       question: "What social media platforms does this tool support?",
//       answer: "Postable supports various platforms such as Facebook, Instagram, Twitter, and LinkedIn."
//     },
//     {
//       question: "Can I customize the created images?",
//       answer: "Yes, the images can be customized using Postable's built-in editor."
//     },
//     {
//       question: "Do I need design skills to use this platform?",
//       answer: "No, Postable is designed for both professionals and beginners with no design skills."
//     },
//     {
//       question: "Do I need to know the format or size of each social media?",
//       answer: "No, Postable automatically adjusts the size and format for different platforms."
//     }
//   ];

//   return (
//     <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-24 xl:pe-4 xl:ps-0">
//       <header className="max-w-sm">
//         <h3 className="text-2xl font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px]">
//           FAQ
//         </h3>
//         <p className="hidden text-balance text-2xl font-medium text-neutral-950 md:mb-9 md:mt-4 md:block">
//           Let’s help you with some of your frequently asked questions.
//         </p>
//       </header>
      
//       <div className="relative flex w-full flex-col gap-4 md:flex-row md:gap-24">
//         <div className="max-w-sm">
//           <div className="hidden w-max flex-col md:flex">
//             <span className="text-lg font-medium text-neutral-500">Couldn't find your answer?</span>
//             <a target="_blank" className="flex items-center gap-1 text-md font-medium text-purple-400" href="https://forms.gle/DAowWbDE9fNKh8Ji8">
//               Ask a Question 
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-3">
//                 <path d="M5 12h14"></path>
//                 <path d="m12 5 7 7-7 7"></path>
//               </svg>
//             </a>
//           </div>
//         </div>

//         <div className="w-full md:ms-auto md:max-w-xl" data-orientation="vertical">
//           {faqItems.map((item, index) => (
//             <div key={index} className="border-b">
//               <h3 data-orientation="vertical" className="flex">
//                 <button
//                   type="button"
//                   aria-controls={`faq-${index}`}
//                   aria-expanded={open === index}
//                   onClick={() => toggleFAQ(index)}
//                   className="flex flex-1 items-center justify-between py-4 transition-all hover:underline text-left text-md font-bold text-neutral-900 md:text-2xl md:font-bold"
//                   style={{ fontFamily: 'Aspekta' }}
//                 >
//                   {item.question}
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 20 20"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open === index ? 'rotate-180' : ''
//                       }`}
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M4.11612 6.61612C4.60427 6.12796 5.39573 6.12796 5.88388 6.61612L10 10.7322L14.1161 6.61612C14.6043 6.12796 15.3957 6.12796 15.8839 6.61612C16.372 7.10427 16.372 7.89573 15.8839 8.38388L10.8839 13.3839C10.3957 13.872 9.60427 13.872 9.11612 13.3839L4.11612 8.38388C3.62796 7.89573 3.62796 7.10427 4.11612 6.61612Z"
//                       fill="#121111"
//                     />
//                   </svg>
//                 </button>
//               </h3>
//               <div
//                 id={`faq-${index}`}
//                 hidden={open !== index}
//                 role="region"
//                 aria-labelledby={`faq-${index}`}
//                 className={`overflow-hidden text-sm ${open === index ? 'data-[state=open]:animate-accordion-down' : 'data-[state=closed]:animate-accordion-up'}`}
//               >
//                 <p className="pt-2">{item.answer}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;


"use client"

import { useState } from 'react';

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const faqItems = [
    {
      question: "Is Postable free to use?",
      answer: "Yes, Postable is free to use. There are no hidden charges."
    },
    {
      question: "What social media platforms does this tool support?",
      answer: "Postable supports various platforms such as Facebook, Instagram, Twitter, and LinkedIn."
    },
    {
      question: "Can I customize the created images?",
      answer: "Yes, the images can be customized using Postable's built-in editor."
    },
    {
      question: "Do I need design skills to use this platform?",
      answer: "No, Postable is designed for both professionals and beginners with no design skills."
    },
    {
      question: "Do I need to know the format or size of each social media?",
      answer: "No, Postable automatically adjusts the size and format for different platforms."
    }
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-24 xl:pe-4 xl:ps-0">
      <header className="max-w-sm">
        <h3 className="text-2xl font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px]">
          FAQ
        </h3>
        <p className="hidden text-balance text-2xl font-medium text-neutral-950 md:mb-9 md:mt-4 md:block">
          Let&apos;s help you with some of your frequently asked questions.
        </p>
      </header>

      <div className="relative flex w-full flex-col gap-4 md:flex-row md:gap-24">
        <div className="max-w-sm">
          <div className="hidden w-max flex-col md:flex">
            <span className="text-lg font-medium text-neutral-500">Couldn't find your answer?</span>
            <a target="_blank" className="flex items-center gap-1 text-md font-medium text-purple-400" href="https://forms.gle/DAowWbDE9fNKh8Ji8">
              Ask a Question 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-3">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full md:ms-auto md:max-w-xl" data-orientation="vertical">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b">
              <h3 data-orientation="vertical" className="flex">
                <button
                  type="button"
                  aria-controls={`faq-${index}`}
                  aria-expanded={open === index}
                  onClick={() => toggleFAQ(index)}
                  className="flex flex-1 items-center justify-between py-4 transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left text-md font-normal text-neutral-950 md:text-2xl md:font-medium"
                  style={{ fontFamily: 'Aspekta' }}
                >
                  {item.question}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open === index ? 'rotate-180' : ''}`}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.11612 6.61612C4.60427 6.12796 5.39573 6.12796 5.88388 6.61612L10 10.7322L14.1161 6.61612C14.6043 6.12796 15.3957 6.12796 15.8839 6.61612C16.372 7.10427 16.372 7.89573 15.8839 8.38388L10.8839 13.3839C10.3957 13.872 9.60427 13.872 9.11612 13.3839L4.11612 8.38388C3.62796 7.89573 3.62796 7.10427 4.11612 6.61612Z"
                      fill="#121111"
                    />
                  </svg>
                </button>
              </h3>
              <div
                id={`faq-${index}`}
                hidden={open !== index}
                role="region"
                aria-labelledby={`faq-${index}`}
                className={`overflow-hidden text-sm ${open === index ? 'data-[state=open]:animate-accordion-down' : 'data-[state=closed]:animate-accordion-up'}`}
              >
                <p className="pt-2">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
