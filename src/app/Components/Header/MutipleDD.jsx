import Link from "next/link";

const MultipleDD = () => {
  return (
    <div className="m-1 hs-dropdown [--trigger:hover] group/dropdown relative inline-flex">
      <button
        id="combo_dropdown_menu"
        type="button"
        className="hs-dropdown-toggle text-[15px] flex gap-2 items-center font-semibold text-secondary py-2 px-0 after:absolute relative after:h-[2px] after:w-0 after:bottom-0 after:start-0 after:bg-primary hover:after:w-full after:transition-all group-[.open]/dropdown:after:w-full"
      >
        Combo
      </button>
      <div
        className="hs-dropdown-menu z-[999] transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full py-6 px-0"
        aria-labelledby="combo_dropdown_menu"
      >
        <ul className="flex flex-col gap-2">
          <li>
            <div className="hs-dropdown adavance-dd relative inline-flex w-full">
              <button
                id="hs-dropdown-default"
                type="button"
                className="text-tertiary group text-[15px] px-6 flex items-center w-full justify-between hs-dropdown-toggle font-semibold hover:text-primary"
              >
                Combo
                <svg
                  className="hs-dropdown-open:-rotate-90 size-4 relative group-hover:-end-1 transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className="hs-dropdown-menu testing hs-dropdown-open:modern  hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[220px] bg-white shadow-md rounded-lg p-5 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                aria-labelledby="hs-dropdown-default"
              >
                <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/"
                    className="text-tertiary font-semibold text-[15px] hover:text-primary"
                  >
                    Best Selling Combo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-tertiary font-semibold text-[15px] hover:text-primary"
                  >
                    Body Care Combo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-tertiary font-semibold text-[15px] hover:text-primary"
                  >
                    Hair Care Combo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-tertiary font-semibold text-[15px] hover:text-primary"
                  >
                    Face Care Combo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-tertiary font-semibold text-[15px] hover:text-primary"
                  >
                    View All
                  </Link>
                </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="hs-dropdown adavance-dd w-full relative inline-flex">
              <button
                id="hs-dropdown-default"
                type="button"
                className="text-tertiary group/second px-6 justify-between flex items-center w-full hs-dropdown-toggle font-semibold hover:text-primary"
              >
                Gifting
                <svg
                  className="hs-dropdown-open:-rotate-90 size-4  relative group-hover/second:-end-1 transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className="hs-dropdown-menu testing hs-dropdown-open:gifting  hs-dropdown-open:opacity-100 opacity-0 hidden min-w-45 bg-white shadow-md rounded-lg p-5 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                aria-labelledby="hs-dropdown-default"
              >
                <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/"
                    className="text-tertiary text-[15px] font-semibold hover:text-primary"
                  >
                    Gift Box
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-tertiary text-[15px] font-semibold hover:text-primary"
                  >
                   Gift Cards
                  </Link>
                </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MultipleDD;
