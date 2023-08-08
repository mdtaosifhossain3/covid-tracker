"use client";
import {useEffect, useState } from "react";


const useFetchData = () => {
  const [country, setCountry] = useState();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(`https://disease.sh/v3/covid-19/countries`);

        const data =  await res.json();
        setCountry(data)
      } catch (e) {
        console.log(e);
        return;
      }
    };
    fetchCountries();
  }, []);

  return {
    country,
  };
};

export default useFetchData;
