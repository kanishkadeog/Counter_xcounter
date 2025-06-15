import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div style={styles.container}>
      <h1>{`Count: ${count}`}</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={increment}>Increment</button>
        <button style={styles.button} onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: '2px solid #ddd',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px', // <-- adds space between buttons
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '24px',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: 'gray',
    color: 'black',
    border: 'none',
    transition: 'background-color 0.3s ease',
  },
};

export default Counter;
