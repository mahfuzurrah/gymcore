import { Select, Space } from "antd";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { GrFormNextLink } from "react-icons/gr";
import ReactPlayer from "react-player";
import Search from "../components/search/Search";
import Exercices from "../components/table/Exercices";
import Exercices2nd from "../components/table/Exercices2nd";
import ExercisesDay from "../components/table/ExercisesDay";

import { Link } from "react-router-dom";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function Dashboard() {
  return (
    <>
      <section>
        <div className="container">
          <div className="section_title">
            <div className="text">
              <h1>Hi, Antoine</h1>
              <p>Create a new exercise for you customer</p>
            </div>
            <Space wrap>
              <Select
                defaultValue="1"
                style={{
                  width: 180,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "1",
                    label: "PPL - 5j/semaine",
                  },
                  {
                    value: "2",
                    label: "PPL - 4j/semaine",
                  },
                ]}
              />
            </Space>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="search_bar">
                <Search />
                <button className="btn">
                  <FiPlus className="icons" />
                </button>
              </div>
              <div className="table_area mt-3">
                <div className="table_header">
                  <h2>Exercices</h2>
                  <Link to="#">
                    View all
                    <GrFormNextLink className="icons" />
                  </Link>
                </div>
                <Exercices />
              </div>
            </div>
            <div className="col-lg-6">
              <h2>Execution</h2>
              <div className="video_area">
                <ReactPlayer
                  controls="false"
                  width="100%"
                  height="350px"
                  className="video"
                  url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4 big_table">
          <div className="row">
            <div className="col-lg-11">
              <div className="table_area">
                <Exercices2nd />
              </div>
            </div>
            <div className="col-lg-1">
              <button className="btn">
                <FiPlus className="icons" />
              </button>
            </div>
          </div>
        </div>
        <div className="container mt-4 big_table">
          <div className="table_area">
            <div className="table_header">
              <h2>Exercises - MONDAY</h2>
            </div>
            <ExercisesDay />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
