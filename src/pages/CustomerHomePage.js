import React, { useEffect, useState } from "react";
import DefaultLayout from "./../components/DefaultLayout";
import { Table } from "rsuite";
import { mockUsers } from "../data";
// import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/lib/less/index.less";
import "../App.css";
import { getCustomers } from "../services/customerService";

const CustomerHomePage = () => {
  const [customers, setCustomers] = useState([]);

  const data = mockUsers(20);
  const { Column, HeaderCell, Cell } = Table;
  const customerCall = async () => {
    const mydata = await getCustomers();
    console.log("mydata", mydata.data);
    setCustomers(mydata.data);
  };

  useEffect(() => {
    customerCall();
  }, []);

  return (
    <DefaultLayout>
      <Table
        height={400}
        data={customers}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      >
        <Column width={190} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="_id" />
        </Column>

        <Column width={150}>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="fname" />
        </Column>

        <Column width={150}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lname" />
        </Column>

        <Column width={100}>
          <HeaderCell>Gender</HeaderCell>
          <Cell dataKey="gender" />
        </Column>

        <Column width={100}>
          <HeaderCell>Age</HeaderCell>
          <Cell dataKey="age" />
        </Column>

        <Column width={150}>
          <HeaderCell>Address</HeaderCell>
          <Cell dataKey="address" />
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

export default CustomerHomePage;
