import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div style={styles.appContainer}>
      <h1 style={styles.title}>Counter App</h1>
      <Counter />
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    marginBottom: '20px',
    fontSize: '32px',
  },
};

export default App;
