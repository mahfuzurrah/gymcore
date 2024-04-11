import { Space, Table } from "antd";
import React from "react";
import { MdOutlineNoteAdd } from "react-icons/md";
const { Column } = Table;

const data = [
  {
    key: "1",
    title: "-",
    SERIES: "-",
    REPS: "-",
    CHARGE: "-",
    REST: "-",
    TEMPO: "-",
  },
];

const Exercices = () => (
  <Table dataSource={data} pagination={false} scroll={{
    x: 768,
  }}>
    <Column title="Exercice" dataIndex="title" key="1" />
    <Column title="SERIES" dataIndex="SERIES" key="2" />
    <Column title="REPS" dataIndex="REPS" key="3" />
    <Column title="CHARGE" dataIndex="CHARGE" key="4" />
    <Column title="REST" dataIndex="REST" key="5" />
    <Column title="TEMPO" dataIndex="TEMPO" key="6" />
    <Column
      title="DNOTE"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <MdOutlineNoteAdd className="icons"/>
        </Space>
      )}
    />
  </Table>
);

export default Exercices;
