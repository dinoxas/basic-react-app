import React from "react";
import { FaReact, FaGithub } from "react-icons/fa";
const styles = {
  wrapper: {
    backgroundColor: "#343a40",
    color: "#fff",
    height: "30px",
    padding: "10px"
  },
  inner: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 50px"
  }
};
const Header = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.inner}>
        <h2
          style={{
            margin: "0",
            fontSize: "20px",
            fontWeight: "normal",
            float: "left"
          }}
        >
          GitHub API App
        </h2>
        <div style={{ float: "right" }}>
          <FaReact size="34" color="rgb(0, 216, 255)" /> <FaGithub size="34" />
        </div>
      </div>
    </div>
  );
};
export default Header;
