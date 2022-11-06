import { getMedicines } from "../services/medicineService";
import "../App.css";
import React, { useEffect, useState } from "react";
import DefaultLayout from "./../components/DefaultLayout";
import { Table } from "rsuite";
import PrintModel from "../components/PrintModel";

const Homepage = () => {
  const [medicine, setMedicine] = useState([]);
  const { Column, HeaderCell, Cell } = Table;
  const medicineCall = async () => {
    const mydata = await getMedicines();
    console.log(mydata.data);
    setMedicine(mydata.data);
  };

  useEffect(() => {
    medicineCall();
  }, []);

  return (
    <DefaultLayout>
      <Table
        height={400}
        data={medicine}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      >
        <Column width={190} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="_id" />
        </Column>

        <Column width={150}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={150}>
          <HeaderCell>Description</HeaderCell>
          <Cell dataKey="description" />
        </Column>

        <Column width={100}>
          <HeaderCell>Image</HeaderCell>
          <Cell dataKey="image" />
        </Column>

        <Column width={100}>
          <HeaderCell>Category</HeaderCell>
          <Cell dataKey="category" />
        </Column>

        <Column width={150}>
          <HeaderCell>Price</HeaderCell>
          <Cell dataKey="price" />
        </Column>
        <Column width={150}>
          <HeaderCell>Quantity</HeaderCell>
          <Cell dataKey="quantity" />
        </Column>
        {/* <Column width={80} fixed="right">
          <HeaderCell>...</HeaderCell>

          <Cell>
            {(rowData) => (
              <span>
                <a onClick={() => alert(`id:${rowData.id}`)}> Edit </a>
              </span>
            )}
          </Cell>
        </Column> */}
      </Table>
    </DefaultLayout>
  );
};

export default Homepage;
