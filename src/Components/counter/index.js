import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAction } from './action';

const Counter = () => {
  const dispatch = useDispatch();
  const countValue = useSelector(state => state.counterReducer.countValue);
  const posts = useSelector(state => state.counterReducer.posts);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <h1>{countValue}</h1>
      <button className='mr10 btn' onClick={handleIncrement}>
        +
      </button>
      <button className='mr10 btn' onClick={handleDecrement}>
        -
      </button>
      <button className='mr10 btn' onClick={() => dispatch(postAction())}>
        get posts
      </button>
      <button className='mr10 btn' onClick={handleReset}>
        Reset
      </button>
      <div>
        {posts.map(item => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
          >
            <h3>{item.id}</h3>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
