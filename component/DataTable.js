import React, { useEffect, useState } from "react";
import axios from 'axios';
import DataTable from "react-data-table-component";
import data from 'quimica.json'

const DataTable = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response| = await axios.get('../quimica.json');
      setCountries(response.data);
      console.log(countries);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCountries();
  }, []);
  return <div>DataTable</div>;
};
