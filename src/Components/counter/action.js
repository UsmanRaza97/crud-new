const postSuc = data => {
  console.log('>>>>', data);
  return {
    type: 'POSTS_SUCCESS',
    payload: data
  };
};

export const postAction = () => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(result => dispatch(postSuc(result)))
    .catch(err => console.log('err', err));
};
