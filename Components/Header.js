"use client"
import { Store } from "@/Context/dataSlice";
import { useContext, useEffect, useState } from "react";

const Header = () => {
  const {dispatch} = useContext(Store)
  const [allcountries, setAllCountries] = useState([]);
  const [country, setCountry] = useState("WorldWide");


  useEffect(() => {

    const fetchAllData = async () => {
      // Fetch Worldwide info
      if (country === "WorldWide") {
        const res = await fetch(`https://disease.sh/v3/covid-19/all`);

        const data = await res.json();
        dispatch({
          type: "GET_DATA",
          data,
        });

        return;
      } else {
        // Fetch individual country Info
        const res = await fetch(
          `https://disease.sh/v3/covid-19/countries/${country}`
        );
        const data = await res.json();
        dispatch({
          type: "GET_DATA",
          data,
        });

        return;
      }
    };
    fetchAllData();

    // helps to Fetch only Country Names
    const fetchCountries = async () => {
      const res = await fetch(`https://disease.sh/v3/covid-19/countries`);

      const data = await res.json();
      setAllCountries(data);
    };
    fetchCountries();
  }, [country, dispatch]);




  return (
    <div className="bg-white py-4 px-2">
      {/* ----------------container-------------- */}
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0 sm:px-8 md:px-2">
        {/* ----------------Title---------- */}
        <h1 className=" text-3xl font-bold text-red-700">Covid-19 Tracker</h1>
        {/* ---------Selection Area -------------*/}
        <select
          className="py-3 border  cursor-pointer w-[28%] px-2 "
          onChange={(e) => setCountry(e.target.value)}
        >
          <option>WorldWide</option>
          {allcountries?.map(({ country, countryInfo }) => (
            <option key={country}>{countryInfo.iso2}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Header