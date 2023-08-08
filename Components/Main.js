"use client"
import { Store } from "@/Context/dataSlice";
import { useContext } from "react";
import Card from './Card';
import PieChart from "./Pie";

const Main = () => {
    const { state } = useContext(Store);

    const {
      cases,
      deaths,
      recovered,
      todayCases,
      todayDeaths,
      todayRecovered,
    } = state;
  return (
    <div className="flex-1">
      {/* --------Card Area------ */}
      <div>
        <Card
          cases={cases}
          deaths={deaths}
          recovered={recovered}
          totalCases={todayCases}
          totalDeaths={todayDeaths}
          totalRecovered={todayRecovered}
        />
      </div>
      {/* -------Map------ */}
      <div>
        <PieChart cases={cases} deaths={deaths} recovered={recovered} />
      </div>
    </div>
  );
}

export default Main