import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import cx from 'classnames';
import styles from './styles.module.css';

const modalRoot = document.getElementById('modal-root');

export const ModalContainer = ({
  children,
  onClose,
  modalSize = 'md',
  footer,
  header,
}) => {
  const [fadeType, setFadeType] = useState(null);

  useEffect(() => {
    setTimeout(() => setFadeType('in'), 0);
  }, []);
  const transitionEnd = (e) => {
    if (e.propertyName !== 'opacity' || fadeType === 'in') return;

    if (fadeType === 'out') {
      onClose();
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setFadeType('out');
  };

  return modalRoot ? ReactDom.createPortal(
    <div
      className={cx(
        styles.container,
        {
          [styles.fadeIn]: fadeType === 'in',
          [styles.fadeOut]: fadeType === 'out',
          modalSize,
        },
      )}
      onTransitionEnd={transitionEnd}
    >
      <div className={styles.boxDialog}>
        {header({ handleClick })}
        <div className={styles.boxContent}>{children}</div>
        {footer({ handleClick })}
      </div>
      <div className={styles.overlay} />
    </div>,
    modalRoot,
  ) : null;
};
