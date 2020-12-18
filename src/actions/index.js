export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

export const getData = () => async (dispatch) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    dispatch({
      type: 'GET_DATA',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'ERROR',
    });
  }
};
