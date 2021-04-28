/* eslint-disable no-console */
// convert object to string and store in localStorage
export const save = (state, opts) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem(`${opts.namespace || 'persistantState'}`, serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
export const load = (opts) => {
  try {
    const serialisedState = localStorage.getItem(`${opts.namespace || 'persistantState'}`);
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}
