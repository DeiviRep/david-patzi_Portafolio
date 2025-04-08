import React from "react";
import "../styles/presentacion.css";

const Presentacion = ({ presentacion }) => {
  return (
    <>
      <div className="seccion-presentacion">
        <div className="scrolling-img">
          <div className="name-especiality">
            <img style={{
              borderRadius: "50%",
              width: "140px",
              height: "140px"
            }} src={presentacion[0].foto} alt="" />
            <div>
              <h1 style={{textTransform:"uppercase",fontSize: "40px",fontWeight: "200", textAlign:"center"}}>David Patzi</h1>
              <h1 style={{fontSize: "40px",fontWeight: "200"}}>{presentacion[0].nivel} Software</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Presentacion;
