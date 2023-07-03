import { useState, useEffect } from "react";

let globalState = {};
let listeners = new Set();
let actions = {};

export const useStore = (shouldListen = true) => {
   const setState = useState(globalState)[1];

   const dispatch = async (actionIdentifier, payload) => {
      const newState = await actions[actionIdentifier](globalState, payload);
      globalState = { ...globalState, ...(newState || []) };

      listeners.forEach((listener) => listener(globalState));
   };

   useEffect(() => {
      if (!shouldListen) return;

      listeners.add(setState);

      return () => {
         listeners.delete(setState);
      };
   }, [setState, shouldListen]);

   return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
   if (initialState) {
      globalState = { ...globalState, ...initialState };
   }
   actions = { ...actions, ...userActions };
};
