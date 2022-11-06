import { getBills } from "../services/billService";
import "../App.css";
import React, { useEffect, useState } from "react";
import DefaultLayout from "./../components/DefaultLayout";
import { Table } from "rsuite";
import PrintModel from "../components/PrintModel";
const mydata = [
  {
    _id: "635a1b0e38a968bffac988da",
    customerName: "waqas",
    medicineName: "panadol",
    medicinePrice: 100,
    medicineQuantity: 2,
    pharmacistName: "name1",
    purchaseName: "name2",
  },
  {
    _id: "635a1b0e38a968bffac988da",
    customerName: "waqas",
    medicineName: "panadol",
    medicinePrice: 100,
    medicineQuantity: 2,
    pharmacistName: "name1",
    purchaseName: "name2",
  },
  {
    _id: "635a1b0e38a968bffac988da",
    customerName: "waqas",
    medicineName: "panadol",
    medicinePrice: 100,
    medicineQuantity: 2,
    pharmacistName: "name1",
    purchaseName: "name2",
  },
];
const BillsHomePage = () => {
  const [show, setShow] = useState(false);
  const [showBillsData, setShowBillsData] = useState();
  const [bills, setBills] = useState([]);
  const [billId, setBillId] = useState();
  const { Column, HeaderCell, Cell } = Table;
  const BillsCall = async () => {
    const mydata = await getBills();
    setBills(mydata.data);
    console.log(mydata.data);
  };

  useEffect(() => {
    BillsCall();
    setShowBillsData(mydata);
  }, []);

  return (
    <DefaultLayout>
      <button style={{cursor:'pointer'}} onClick={()=>{
          console.log("weoodd")
        }}></button>
      {show && <PrintModel billId={billId} />}
      <Table
        height={400}
        data={showBillsData}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      >
        <Column width={190} align="center" fixed>
          <HeaderCell>_id</HeaderCell>
          <Cell dataKey="_id" />
        </Column>

        <Column width={150}>
          <HeaderCell>customerName</HeaderCell>
          <Cell dataKey="customerName" />
        </Column>

        <Column width={150}>
          <HeaderCell>medicineName</HeaderCell>
          <Cell dataKey="medicineName" />
        </Column>

        <Column width={100}>
          <HeaderCell>medicinePrice</HeaderCell>
          <Cell dataKey="medicinePrice" />
        </Column>

        <Column width={100}>
          <HeaderCell>medicineQuantity</HeaderCell>
          <Cell dataKey="medicineQuantity" />
        </Column>

        <Column width={150}>
          <HeaderCell>pharmacistName</HeaderCell>
          <Cell dataKey="pharmacistName" />
        </Column>

        <Column width={150}>
          <HeaderCell>purchaseName</HeaderCell>
          <Cell dataKey="purchaseName" />
        </Column>

        <Column width={80} fixed="right">
          <HeaderCell>...</HeaderCell>

          <Cell>
            {(rowData) => (
              <span>
                <a
                  onClick={() => {
                   setBillId(rowData._id);
                    setShow(true);
                  }}
                >
                  Show Record{" "}
                </a>
              </span>
            )}
          </Cell>
        </Column>
      </Table>
    </DefaultLayout>
  );
};

export default BillsHomePage;
