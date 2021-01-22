import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";

import data from "../../dataSet/data.json";

//Redux
import { connect } from "react-redux";
import { setLvl } from "../../redux/actions/form";
import { setCans } from "../../redux/actions/form";
import { setScore } from "../../redux/actions/form";
import { setUans } from "../../redux/actions/form";

const Quiz = (props) => {
  const [ques, setQues] = useState([]);
  const [currQuesIndex, setCurrQuesIndex] = useState(0);
  const [ans, setAns] = useState([
    {
      id1: null,
      ans1: null,
      id2: null,
      ans2: null,
      id3: null,
      ans3: null,
      id4: null,
      ans4: null,
    },
  ]);

  const history = useHistory();

  const getData = (val) => {
    const shuffledData = data.Sheet1.sort(() => 0.5 - Math.random()); //shuffling data array
    if (val === "Any") {
      setQues(shuffledData.slice(0, 4)); // getting first 4 elements from shuffled array
    } else {
      shuffledData.map((item) => {
        if (item["Difficulty Level"] === val) {
          setQues((old) => [...old, item]);
        }
        return null;
      });
    }
  };

  const selectOptionHandler = (e) => {
    if (currQuesIndex === 0) {
      setAns(
        ans.map((el) => {
          return {
            ...el,
            id1: e.target.parentNode.childNodes[0].innerText,
            ans1: e.target.innerText,
          };
        })
      );
    }
    if (currQuesIndex === 1) {
      setAns(
        ans.map((el) => {
          return {
            ...el,
            id2: e.target.parentNode.childNodes[0].innerText,
            ans2: e.target.innerText,
          };
        })
      );
    }
    if (currQuesIndex === 2) {
      setAns(
        ans.map((el) => {
          return {
            ...el,
            id3: e.target.parentNode.childNodes[0].innerText,
            ans3: e.target.innerText,
          };
        })
      );
    }
    if (currQuesIndex === 3) {
      setAns(
        ans.map((el) => {
          return {
            ...el,
            id4: e.target.parentNode.childNodes[0].innerText,
            ans4: e.target.innerText,
          };
        })
      );
    }
  };

  const submitHandler = () => {
    let totalMarks = 0;

    for (let i = 0; i < 4; i++) {
      if (i === 0) {
        if (ans[0].id1 === ques[i]["Correct Option"]) {
          totalMarks += 1;
        }
      }
      if (i === 1) {
        if (ans[0].id2 === ques[i]["Correct Option"]) {
          totalMarks += 1;
        }
      }
      if (i === 2) {
        if (ans[0].id3 === ques[i]["Correct Option"]) {
          totalMarks += 1;
        }
      }
      if (i === 3) {
        if (ans[0].id4 === ques[i]["Correct Option"]) {
          totalMarks += 1;
        }
      }
    }
    var tempCans = [];
    var tempLvl = [];
    var tempAns = [];

    ques.map((item) => {
      let correct = item["Correct Option"];
      tempCans.push(item[`Option ${correct}`]);
      return props.setCansArr(tempCans.slice(0, 4));
      //return setCans((old) => [...old, item[`Option ${correct}`]]);
    });

    ques.map((item) => {
      tempLvl.push(item["Difficulty Level"]);
      return props.setLvlArr(tempLvl.slice(0, 4));
    });

    tempAns.push(ans[0].ans1);
    tempAns.push(ans[0].ans2);
    tempAns.push(ans[0].ans3);
    tempAns.push(ans[0].ans4);

    props.setScoreText(totalMarks);
    props.setUansArr(tempAns);

    history.push("/report");
  };

  const startQuiz = () => {
    getData(props.diff);
  };

  return (
    <div className={styles.container}>
      <p>Quiz</p>
      {ques.length !== 0 ? (
        <div className={styles.quesContainer}>
          <div className={styles.diff}>
            <p>Difficulty LeveL : {ques[currQuesIndex]["Difficulty Level"]}</p>
          </div>
          <div className={styles.question}>
            <p>
              Question {currQuesIndex + 1} : {ques[currQuesIndex].Question}
            </p>
          </div>

          <div className={styles.optContainer}>
            <div>
              <pre>1</pre>
              <p onClick={selectOptionHandler}>
                {ques[currQuesIndex]["Option 1"]}
              </p>
            </div>
            <div>
              <pre>2</pre>
              <p onClick={selectOptionHandler}>
                {ques[currQuesIndex]["Option 2"]}
              </p>
            </div>
            <div>
              <pre>3</pre>
              <p onClick={selectOptionHandler}>
                {ques[currQuesIndex]["Option 3"]}
              </p>
            </div>
            <div>
              <pre>4</pre>
              <p onClick={selectOptionHandler}>
                {ques[currQuesIndex]["Option 4"]}
              </p>
            </div>
          </div>

          <div className={styles.selecAns}>
            <pre>
              You Selected Option :
              {currQuesIndex === 0 ? <p>{ans[0].ans1}</p> : <p></p>}
              {currQuesIndex === 1 ? <p>{ans[0].ans2}</p> : <p></p>}
              {currQuesIndex === 2 ? <p>{ans[0].ans3}</p> : <p></p>}
              {currQuesIndex === 3 ? <p>{ans[0].ans4}</p> : <p></p>}
            </pre>
          </div>

          <div className={styles.navBtn}>
            {currQuesIndex === 0 ? (
              <div className={styles.btn}>
                <button
                  onClick={() => {
                    setCurrQuesIndex((curr) => ++curr);
                  }}
                >
                  Next
                </button>
              </div>
            ) : (
              <div>
                {currQuesIndex < 3 ? (
                  <div className={styles.btn}>
                    <button
                      onClick={() => {
                        setCurrQuesIndex((curr) => --curr);
                      }}
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => {
                        setCurrQuesIndex((curr) => ++curr);
                      }}
                    >
                      Next
                    </button>
                  </div>
                ) : (
                  <div className={styles.btn}>
                    <button
                      onClick={() => {
                        setCurrQuesIndex((curr) => --curr);
                      }}
                    >
                      Previous
                    </button>
                    <button onClick={submitHandler}>Submit</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.startQuiz}>
          <p>. THE QUIZ HAS 4 QUESTIONS</p>
          <p>. YOU CAN CHANGE YOUR ANSWERS BEFORE SUBMITING THE QUIZ</p>
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  diff: state.difficulty.text,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setLvlArr: (lvlArr) => dispatch(setLvl(lvlArr)),
    setCansArr: (cansArr) => dispatch(setCans(cansArr)),
    setScoreText: (txt) => dispatch(setScore(txt)),
    setUansArr: (uansArr) => dispatch(setUans(uansArr)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
