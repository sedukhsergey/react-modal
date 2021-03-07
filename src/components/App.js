import React, { useState } from 'react';
import styles from './styles.module.css';
import { Modal } from './modal/Modal';

const App = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.app}>
      {title}
      <h2 className="app">DDDDD</h2>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen ? (
        <Modal
          onClose={onClose}
        >
          Modal content
        </Modal>
      ) : null}
    </div>
  );
};

export default App;
