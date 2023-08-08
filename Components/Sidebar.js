"use client"
import useFetchData from "@/Hooks/useFetchData"
import { formatedNum } from "@/utils/formatNum"

const Sidebar = () => {
  //Get All country name and cases
  const {country} = useFetchData()

  return (
    <div className="bg-white p-2 mt-4 md:px-3 rounded-md  md:h-full ">
      {/*--------Title------- */}
      <h2 className=" font-bold text-xl py-2 pb-4 ">Live Cases By Country</h2>
      <div className="container mx-auto   h-96 scroll-smooth	 overflow-y-scroll scrollbar-hide md:h-[86vh] ">
        {/* -----------Map all of the infos----------------*/}
        {country?.map((country) => (
          <div
            key={country?.country}
            className=" flex justify-between even:bg-slate-100 py-2 px-2 "
          >
            <div className="font-bold">{country?.country}</div>
            <div className="font-semibold">{formatedNum(country?.cases)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar