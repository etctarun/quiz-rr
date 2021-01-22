import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./styles.module.scss";

import { connect } from "react-redux";
import { setDifficulty } from "../../redux/actions/form";

const Start = (props) => {
  const [status, setStatus] = useState("Easy");

  const history = useHistory();

  const submitHandler = () => {
    props.setDiff(status);
    history.push("/quiz");
  };

  const difficultyHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className={styles.container}>
      <p> SELECT THE DIFFICULTY OF THE QUIZ </p>
      <div className={styles.formContainer}>
        <select onChange={difficultyHandler} className={styles.select}>
          <option value="Easy">EASY</option>
          <option value="Medium">MEDIUM</option>
          <option value="Hard">HARD</option>
          <option value="Any">ANY</option>
        </select>
        <button onClick={submitHandler}>LETS GO</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDiff: (difficulty) => dispatch(setDifficulty(difficulty)),
  };
};

export default connect(null, mapDispatchToProps)(Start);
