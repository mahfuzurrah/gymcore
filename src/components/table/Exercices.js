import { Space, Table } from "antd";
import { BsLightningCharge } from "react-icons/bs";
import React from "react";
const { Column } = Table;

const data = [
  {
    key: "1",
    title: (
      <div className="table_title">
        <p>Pull up </p>
        <span>Body weight</span>
      </div>
    ),
    muscle: "Back",
  },
  {
    key: "2",
    title: (
      <div className="table_title">
        <p>Curl Spider</p>
        <span>EZ Bar</span>
      </div>
    ),
    muscle: "Biceps",
  },
  {
    key: "3",
    title: (
      <div className="table_title">
        <p>Skull cusher</p>
        <span>Bar</span>
      </div>
    ),
    muscle: "Triceps",
  },
];

const Exercices = () => (
  <Table dataSource={data} pagination={false}>
    <Column title="Exercice name" dataIndex="title" key="firstName" />
    <Column title="Muscle" dataIndex="muscle" key="muscle" />
    <Column
      title="Difficulty"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <BsLightningCharge />
        </Space>
      )}
    />
  </Table>
);

export default Exercices;
