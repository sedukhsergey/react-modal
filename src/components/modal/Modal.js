import React, { useEffect } from 'react';
import { wrapper } from '../../utils/wrapper';
import { ModalContainer } from './ModalContainer';

import styles from './styles.module.css';
// import IconClose from '../icons/Close';

export const ModalHeader = ({
  title = '',
}) => (
  <h4 className={styles.boxTitle}>{title}</h4>
);

const ModalFooter = ({
  handleClick,
}) => (
  <button className={styles.modalCloseIcon} onClick={handleClick}>
    X
    {/* <IconClose */}
    {/*  className={styles.modalCloseIconImage} */}
    {/* /> */}
  </button>
);

export const Modal = (props) => {
  const header = wrapper(ModalHeader, props);
  const footer = wrapper(ModalFooter, props);
  const body = document.querySelector('body');
  useEffect(() => {
    body.style.cssText = 'overflow: hidden; position: fixed;';
    return () => {
      body.style.cssText = 'overflow: auto; position: static;';
    };
  }, []);
  return (
    <ModalContainer
      header={header}
      footer={footer}
      {...props}
    />
  );
};
