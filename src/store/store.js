import { useState, useEffect } from "react";

let globalState = {}; //빈 객체는 전역변수라 생각 할 수 있다.
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...(newState || []) };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  //actionIdentifier actions함수에 식별자를 담는 것 객체 안에 함수를 넣고 필요할 때 마다 꺼내서 씀
  // 생성자(NEW) 함수도 많이 씀
  //(newState || []) ||는 오류날까봐 [] 빈배열 넣은 것

  useEffect(() => {
    if (!shouldListen) return;

    listeners.push(setState);

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

//dispatch : 즉 업데이트 갱신(촉발함수)

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
