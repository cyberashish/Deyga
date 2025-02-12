
import Link from "next/link"
import Image from "next/image"

 const ModestMenu = ({title,face_cat,hair_cat,body_cat,id}) => {
    return (
        <div className="m-1 hs-dropdown [--trigger:hover] group/dropdown relative inline-flex" >
          <button
            id={id}
            type="button"
            className="hs-dropdown-toggle text-[15px] font-semibold text-secondary py-2 px-0 after:absolute relative after:h-[2px] after:w-0 after:bottom-0 after:start-0 after:bg-primary hover:after:w-full after:transition-all group-[.open]/dropdown:after:w-full"
          >
            {title}
          </button>
          <div
            className="hs-dropdown-menu z-[999] transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden w-[700px] bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full p-10"
            aria-labelledby={id}
          >
           <div className="grid grid-cols-12 gap-8 ">
            <div className="lg:col-span-4">
               <h3 className="text-base ps-5 border-s-2 font-bold border-secondary mb-3">Face</h3>
                <ul className="flex flex-col gap-2">
                  {
                    face_cat.map((item)=>{
                      return (
                        <li key={item.key} ><Link href={item.href} className="text-tertiary text-[15px] font-semibold hover:text-primary">{item.title}</Link></li>
                      )
                    })
                  }
                </ul>
            </div>
            <div className="lg:col-span-4">
               <h3 className=" ps-5 text-base border-s-2 font-semibold border-secondary mb-3">Hair</h3>
                <ul className="flex flex-col gap-2">
                {
                    hair_cat.map((item)=>{
                      return (
                        <li key={item.key} ><Link href={item.href} className="text-tertiary text-[15px] font-semibold hover:text-primary">{item.title}</Link></li>
                      )
                    })
                  }
                </ul>
            </div>
            <div className="lg:col-span-4">
               <h3 className=" ps-5 text-base border-s-2 font-semibold border-secondary mb-3">Body</h3>
                <ul className="flex flex-col gap-2">
                {
                    body_cat.map((item)=>{
                      return (
                        <li key={item.key} ><Link href={item.href} className="text-tertiary text-[15px] font-semibold hover:text-primary">{item.title}</Link></li>
                      )
                    })
                  }
                </ul>
            </div>
           </div>
          </div>
        </div>
    )
}

export default ModestMenu