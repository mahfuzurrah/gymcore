import { Checkbox, Space, Table } from "antd";
import React from "react";
import { HiBars3 } from "react-icons/hi2";
import { MdOutlineNoteAdd } from "react-icons/md";
const { Column } = Table;

const data = [
  {
    key: "1",
    title: "Shoulder warm-up",
    SERIES: "-",
    REPS: "30",
    CHARGE: "-",
    REST: "-",
    TEMPO: "-",
  },
  {
    key: "2",
    title: "Wrist warm-up",
    SERIES: "-",
    REPS: "30",
    CHARGE: "-",
    REST: "-",
    TEMPO: "-",
  },
  {
    key: "3",
    title: "Pull-up",
    SERIES: "3",
    REPS: "10",
    CHARGE: "BW",
    REST: "3”00’",
    TEMPO: "0101",
  },
  {
    key: "4",
    title: "Rowing Bar",
    SERIES: "5",
    REPS: "8",
    CHARGE: "75%",
    REST: "2”45’",
    TEMPO: "1X01",
  },
  {
    key: "5",
    title: "Superman Curl",
    SERIES: "4",
    REPS: "12",
    CHARGE: "50%",
    REST: "2”00’",
    TEMPO: "0302",
  },
  {
    key: "6",
    title: "Larry Scott bench",
    SERIES: "5",
    REPS: "20",
    CHARGE: "30%",
    REST: "2”30’",
    TEMPO: "0100",
  },
];

const ExercisesDay = () => (
  <Table dataSource={data} pagination={false} scroll={{
    x: 768,
  }}>
    <Column
      title="Select"
      key="select"
      render={(text, record) => <Checkbox />}
    />
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
          <MdOutlineNoteAdd className="icons" />
          <HiBars3 className="icons" />
        </Space>
      )}
    />
  </Table>
);

export default ExercisesDay;
