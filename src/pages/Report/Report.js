import React from "react";
import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { setDifficulty } from "../../redux/actions/form";
import { setLvl } from "../../redux/actions/form";
import { setCans } from "../../redux/actions/form";
import { setScore } from "../../redux/actions/form";
import { setUans } from "../../redux/actions/form";

const Report = (props) => {
  const history = useHistory();
  const goHome = () => {
    props.setDiff("Easy");
    props.setLvlArr([]);
    props.setCansArr([]);
    props.setScoreText("");
    props.setUansArr([]);
    history.push("/");
  };
  return (
    <div className={styles.container}>
      <p>Total Marks Scored {props.score}/4</p>
      <p>Percentage = {(props.score / 4) * 100}%</p>
      <div className={styles.ques}>
        <h2>Question 1</h2>
        <p>
          Your Answer : <span>{props.uans[0]}</span>
        </p>
        <p>
          Correct Answer : <span>{props.cans[0]}</span>
        </p>
        <p>
          Difficulty Level : <span>{props.lvl[0]}</span>
        </p>
      </div>
      <div className={styles.ques}>
        <h2>Question 2</h2>
        <p>
          Your Answer : <span>{props.uans[1]}</span>
        </p>
        <p>
          Correct Answer : <span>{props.cans[1]}</span>
        </p>
        <p>
          Difficulty Level : <span>{props.lvl[1]}</span>
        </p>
      </div>
      <div className={styles.ques}>
        <h2>Question 3</h2>
        <p>
          Your Answer : <span>{props.uans[2]}</span>
        </p>
        <p>
          Correct Answer : <span>{props.cans[2]}</span>
        </p>
        <p>
          Difficulty Level : <span>{props.lvl[2]}</span>
        </p>
      </div>
      <div className={styles.ques}>
        <h2>Question 4</h2>
        <p>
          Your Answer : <span>{props.uans[3]}</span>
        </p>
        <p>
          Correct Answer : <span>{props.cans[3]}</span>
        </p>
        <p>
          Difficulty Level : <span>{props.lvl[3]}</span>
        </p>
      </div>

      <button onClick={goHome}>Start Quiz Again</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDiff: (difficulty) => dispatch(setDifficulty(difficulty)),
    setLvlArr: (lvlArr) => dispatch(setLvl(lvlArr)),
    setCansArr: (cansArr) => dispatch(setCans(cansArr)),
    setScoreText: (txt) => dispatch(setScore(txt)),
    setUansArr: (uansArr) => dispatch(setUans(uansArr)),
  };
};

const mapStateToProps = (state) => ({
  lvl: state.lvl.lvlArr,
  cans: state.cans.cansArr,
  uans: state.uans.uansArr,
  score: state.score.text,
});
export default connect(mapStateToProps, mapDispatchToProps)(Report);
