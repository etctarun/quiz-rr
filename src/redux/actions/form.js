import { DIFFICULTY, DIFFLVL, CANS, UANS, SCORE } from "./types";

export const setDifficulty = (text) => {
  return {
    type: DIFFICULTY,
    payload: text,
  };
};

export const setLvl = (arr) => {
  return {
    type: DIFFLVL,
    payload: arr,
  };
};

export const setCans = (arr) => {
  return {
    type: CANS,
    payload: arr,
  };
};

export const setUans = (arr) => {
  return {
    type: UANS,
    payload: arr,
  };
};

export const setScore = (text) => {
  return {
    type: SCORE,
    payload: text,
  };
};
