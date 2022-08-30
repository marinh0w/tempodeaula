import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const CustomTable = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v2/all');
      setCountries(response.data);
      console.log(countries);
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      name: 'Horário',
      selector: (row) => row.name,
    },
    {
      name: 'Segunda',
      selector: (row) => row.name,
    },
    {
      name: 'Terça',
      selector: (row) => row.capital,
      conditionalCellStyles: [
        /* usar para os horários disponíveis */
        {
          when: (row) => row.capital === 'Kabul',
          style: {
            backgroundColor: 'green',
          },
        },
      ],
    },
    {
      name: 'Quarta',
      selector: (row) => row.name,
    },
    {
      name: 'Quinta',
      selector: (row) => row.name,
    },
    {
      name: 'Sexta',
      selector: (row) => row.name,
    },
    {
      name: 'Flag',
      selector: (row) => <img src={row.flag} width={50} height={50} />,
    },
  ];

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div>
      <DataTable
        columns={columns}
        data={countries}
        pagination
        selectableRows
        fixedHeader
      />
    </div>
  );
};

export default CustomTable;
