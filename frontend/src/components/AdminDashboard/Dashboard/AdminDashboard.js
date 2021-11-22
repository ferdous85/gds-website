import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../../MetaData/MetaData";
import Loader from "../../Loader/Loader";
import "./AdminDashboard.css";
import Sidebar from '../Sidebar/Sidebar'

const AdminDashboard = ({ history }) => {
  

  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          <div className="containerDashboard">
            
          <Sidebar />
          <div className="others">
          <h1>Dashboard</h1>
          </div>
          </div>
            

         
        </Fragment>
      )}
    </Fragment>
  );
};

export default AdminDashboard;
