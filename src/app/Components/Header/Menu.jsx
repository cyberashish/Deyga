
import Link from "next/link"


 const Menu = ({title,menu_arr,id}) => {
    return (
        <div className="m-1 hs-dropdown [--trigger:hover] group/dropdown relative inline-flex" >
          <button
            id={id}
            type="button"
            className="hs-dropdown-toggle font-semibold text-secondary text-[15px] py-2 px-0 after:absolute relative after:h-[2px] after:w-0 after:bottom-0 after:start-0 after:bg-primary hover:after:w-full after:transition-all group-[.open]/dropdown:after:w-full"
          >
            {title}
          </button>
          <div
            className="hs-dropdown-menu z-[999] transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full p-6"
            aria-labelledby={id}
          >
                <ul className="flex flex-col gap-2">
                  {
                    menu_arr.map((item)=>{
                      return (
                        <li key={item.key} ><Link href={item.href} className="text-tertiary text-[15px] font-semibold hover:text-primary">{item.title}</Link></li>
                      )
                    })
                  }
                </ul>
          </div>
        </div>
    )
}

export default Menu