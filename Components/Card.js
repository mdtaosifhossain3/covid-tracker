import { formatedNum } from "@/utils/formatNum";

const Card = ({ 
  cases,
  deaths,
  recovered,
  todayCases,
  todayDeaths,
  todayRecovered }) => {
  return (
    <div className="sm:flex">
      {/* -----------------Card One------------ */}
      <div className="px-2 md:px-4 w-full">
        <div className=" container mx-auto py-4  ">
          <div className=" bg-white p-4 space-y-2 rounded-xl">
            <p className=" font-bold text-xl ">Cases</p>
            <h3 className="font-semibold text-3xl text-[#3366CC]">
              {formatedNum(cases)}
            </h3>
            <p className=" opacity-60">Total {formatedNum(todayCases)}</p>
          </div>
        </div>
      </div>
      {/* -----------------Card Two------------ */}
      <div className="px-2 md:px-4 w-full">
        <div className=" container mx-auto py-4  ">
          <div className=" bg-white p-4 space-y-2 rounded-xl">
            <p className=" font-bold text-xl ">Recovered</p>
            <h3 className=" font-semibold text-3xl text-[#FF9900]">
              {formatedNum(recovered)}
            </h3>
            <p className=" opacity-60">Total {formatedNum(todayRecovered)}</p>
          </div>
        </div>
      </div>
      {/* -----------------Card Three------------ */}
      <div className="px-2 md:px-4 w-full">
        <div className=" container mx-auto py-4  ">
          <div className=" bg-white p-4 space-y-2 rounded-xl">
            <p className=" font-bold text-xl">Deaths</p>
            <h3 className=" font-semibold text-3xl text-red-700">
              {formatedNum(deaths)}
            </h3>
            <p className=" opacity-60">Total {formatedNum(todayDeaths)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

      {
        /* <div className="px-2 md:px-4 w-full">
        <div className=" container mx-auto py-4  ">
          <div className=" bg-white p-4 space-y-2 rounded-xl">
            <p className=" font-bold text-xl">Recovered</p>
            <h3 className=" font-semibold text-3xl text-[#FF9900]">
              {formatedNum(recovered)}
            </h3>
            <p className=" opacity-60">Total {formatedNum(todayRecovered)}</p>
          </div>
        </div>
      </div> */
      }
      {
        /* 
      <div className="px-2 md:px-4 w-full">
        <div className=" container mx-auto py-4  ">
          <div className=" bg-white p-4 space-y-2 rounded-xl">
            <p className=" font-bold text-xl">Deaths</p>
            <h3 className=" font-semibold text-3xl text-red-700">
              {formatedNum(deaths)}
            </h3>
            <p className=" opacity-60">Total {formatedNum(todayDeaths)}</p>
          </div>
        </div>
      </div> */
      }

export default Card