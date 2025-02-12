export default function FAQ(){
    return (
      <div className="container-xs mt-16">
        <h3 className="text-black text-2xl mb-6 font-semibold">FAQ's</h3>
        <div className="hs-accordion-group">
          <div
            className="hs-accordion hs-accordion-active:border-bordercolor bg-white border border-transparent rounded-xl"
            id="hs-active-bordered-heading-one"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-textclr py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none"
              aria-controls="hs-basic-active-bordered-collapse-one"
            >
              How is this lip balm different from the previous one?
              <svg
                className="hs-accordion-active:hidden block size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
            <div
              id="hs-basic-active-bordered-collapse-one"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-active-bordered-heading-one"
            >
              <div className="pb-4 px-5">
                <p className="text-textclr dark:text-neutral-200 text-sm font-medium">
                  We are excited to share that, this is India's first
                  sustainably packed lip balm! Upgrade your lip care routine
                  with eco-conscious beauty at your fingertips and enjoy natural
                  tint, radiant finish, and intense hydration.
                </p>
              </div>
            </div>
          </div>
          <div
            className="hs-accordion hs-accordion-active:border-bordercolor active bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
            id="hs-active-bordered-heading-two"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-textclr py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none"
              aria-controls="hs-basic-active-bordered-collapse-two"
            >
              How often should I apply the lip balm?
              <svg
                className="hs-accordion-active:hidden block size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
            <div
              id="hs-basic-active-bordered-collapse-two"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-active-bordered-heading-two"
            >
              <div className="pb-4 px-5">
                <p className="text-textclr dark:text-neutral-200 text-sm font-medium">
                  You can use it whenever your lips feel dry or in need of
                  hydration.
                </p>
              </div>
            </div>
          </div>
          <div
            className="hs-accordion hs-accordion-active:border-bordercolor bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
            id="hs-active-bordered-heading-three"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-textclr py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none"
              aria-controls="hs-basic-active-bordered-collapse-three"
            >
              Is this lip balm suitable for all?
              <svg
                className="hs-accordion-active:hidden block size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
            <div
              id="hs-basic-active-bordered-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-active-bordered-heading-three"
            >
              <div className="pb-4 px-5">
                <p className="text-textclr dark:text-neutral-200 text-sm font-medium">
                  Yes, our lip balm is formulated to be gentle and suitable for
                  all lips, including sensitive lips.
                </p>
              </div>
            </div>
          </div>
          <div
            className="hs-accordion hs-accordion-active:border-bordercolor bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
            id="hs-active-bordered-heading-four"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-textclr py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none"
              aria-controls="hs-basic-active-bordered-collapse-three"
            >
              Can I use this lip balm under lipstick or lip gloss?
              <svg
                className="hs-accordion-active:hidden block size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
            <div
              id="hs-basic-active-bordered-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-active-bordered-heading-four"
            >
              <div className="pb-4 px-5">
                <p className="text-textclr dark:text-neutral-200 text-sm font-medium">
                  Absolutely! Our lip balm provides a perfect base for lipstick
                  or lip gloss, ensuring a smooth application and enhanced color
                  vibrancy.
                </p>
              </div>
            </div>
          </div>
          <div
            className="hs-accordion hs-accordion-active:border-bordercolor bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
            id="hs-active-bordered-heading-five"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-textclr py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none"
              aria-controls="hs-basic-active-bordered-collapse-three"
            >
              Is it necessary to exfoliate my lips before applying lip balm
              every time?
              <svg
                className="hs-accordion-active:hidden block size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
            <div
              id="hs-basic-active-bordered-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-active-bordered-heading-five"
            >
              <div className="pb-4 px-5">
                <p className="text-textclr dark:text-neutral-200 text-sm font-medium">
                  You typically only need to exfoliate your lips once or twice a
                  week, or when you have lipstick stains. However, feel free to
                  use lip balm as frequently as you'd like throughout the day.
                </p>
              </div>
            </div>
          </div>
          <div
            className="hs-accordion hs-accordion-active:border-bordercolor bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
            id="hs-active-bordered-heading-six"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-textclr py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none"
              aria-controls="hs-basic-active-bordered-collapse-three"
            >
              My lips are severely cracked. How can I make them soft again?
              <svg
                className="hs-accordion-active:hidden block size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
            <div
              id="hs-basic-active-bordered-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-active-bordered-heading-six"
            >
              <div className="pb-4 px-5">
                <p className="text-textclr dark:text-neutral-200 text-sm font-medium">
                  You can soften your lips by exfoliating them once a week and
                  applying our lip balm as frequently as necessary whenever they
                  feel dry.
                </p>
              </div>
            </div>
          </div>
          <div
            className="hs-accordion hs-accordion-active:border-bordercolor bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
            id="hs-active-bordered-heading-seven"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-textclr py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none"
              aria-controls="hs-basic-active-bordered-collapse-three"
            >
              Is the lip balm safe for children to use?
              <svg
                className="hs-accordion-active:hidden block size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
            <div
              id="hs-basic-active-bordered-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-active-bordered-heading-seven"
            >
              <div className="pb-4 px-5">
                <p className="text-textclr dark:text-neutral-200 text-sm font-medium">
                  While our lip balm is generally safe for most individuals, we
                  recommend a patch test.
                </p>
              </div>
            </div>
          </div>
          <div
            className="hs-accordion hs-accordion-active:border-bordercolor bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
            id="hs-active-bordered-heading-eight"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-textclr py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none"
              aria-controls="hs-basic-active-bordered-collapse-three"
            >
              Is the packaging recyclable and environmentally friendly?
              <svg
                className="hs-accordion-active:hidden block size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
            <div
              id="hs-basic-active-bordered-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-active-bordered-heading-eight"
            >
              <div className="pb-4 px-5">
                <p className="text-textclr dark:text-neutral-200 text-sm font-medium">
                  Yes, We've gone the extra mile to make sure it's kind to our
                  planet too, with eco-friendly packaging. By which we strive to
                  set a new standard for a sustainable packaging revolution
                  among brands.
                </p>
              </div>
            </div>
          </div>
          <div
            className="hs-accordion hs-accordion-active:border-bordercolor bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
            id="hs-active-bordered-heading-nine"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-textclr py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none"
              aria-controls="hs-basic-active-bordered-collapse-three"
            >
              Is the packaging recyclable and environmentally friendly?
              <svg
                className="hs-accordion-active:hidden block size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
            <div
              id="hs-basic-active-bordered-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-active-bordered-heading-nine"
            >
              <div className="pb-4 px-5">
                <p className="text-textclr dark:text-neutral-200 text-sm font-medium">
                  Yes, We've gone the extra mile to make sure it's kind to our
                  planet too, with eco-friendly packaging. By which we strive to
                  set a new standard for a sustainable packaging revolution
                  among brands.
                </p>
              </div>
            </div>
          </div>
          <div
            className="hs-accordion hs-accordion-active:border-bordercolor bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
            id="hs-active-bordered-heading-ten"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-textclr py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none"
              aria-controls="hs-basic-active-bordered-collapse-three"
            >
              Legal Metrology
              <svg
                className="hs-accordion-active:hidden block size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
            <div
              id="hs-basic-active-bordered-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-active-bordered-heading-ten"
            >
              <div className="pb-4 px-5">
                <p className="text-textclr dark:text-neutral-200 text-sm font-medium">
                  Manufactured & Marketed By: Deyga Organics, 59, Mosuvanna
                  Street, Erode-638009 MRP (inclusive of all taxes) Mfg.Lic. No:
                  1493/25D Country of Origin: India Customer Care Number: 95144
                  15599 In case of feedback or complaints, email:
                  enquiry@deyga.in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}