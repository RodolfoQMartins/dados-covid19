import React, { useEffect, useState } from 'react';
import { requestApi } from "./helpers/requestHelper"
import { handleCountryName } from "./helpers/country-helpers";
import { apiUrl } from "./api.config";
import { CountryData } from "./helpers/interfaces";
import { CountryOptions } from "./helpers/enums";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import MainStatics from "./MainStatics";
import FormSection from "./FormSection";

import './App.css';

function App(): JSX.Element {
  const [data, handleData] = useState<CountryData[]>([]);
  const [selectedCountry, handleSelectedCountry] = useState<CountryOptions>(CountryOptions.bra);
  const [isLoading, handleLoading] = useState<boolean>(false);


  useEffect(() => {
    async function fetchData() {
      handleLoading(true)
      const res = await requestApi(apiUrl, `country?name=${selectedCountry}`);    
      if(res) {
        handleData(res)
        handleLoading(false)
      }
    }
    fetchData();
  }, [selectedCountry])

  return (
    <div className="main-wrapper">
      <h1>
        Covid-19 Estatísticas
      </h1>
      <h2>{handleCountryName(selectedCountry)}</h2>
      {
        isLoading ? <Loading /> : 
        data.map(item => {
          return (
            <MainStatics key={item.country} itemData={item} />
          )
        })
      }
      <FormSection selectedCountry={selectedCountry} handleSelectedCountry={handleSelectedCountry}/>
      <p className="warning">*os dados podem estar desatualizados, todas as informações são baseadas em dados públicos distribuídos pela api <b>covid-19-data</b></p>
      <Footer />
    </div>
  );
}

export default App;
