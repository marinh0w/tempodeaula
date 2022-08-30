import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import data from 'quimica.json'

const CustomTable = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get('../quimica.json');
      setCountries(response.data);
      console.log(countries);
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      name: 'HORAINICIAL',
      selector: (row) => row.HORAINICIAL,
    },
    {
      name: 'HORAFINAL',
      selector: (row) => row.HORAFINAL,
    },
    {
      name: 'DIASEMANA',
      selector: (row) => row.DIASEMANA,
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
    /*{
      name: 'Flag',
      selector: (row) => <img src={row.flag} width={50} height={50} />,
    },*/
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
