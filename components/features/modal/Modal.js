import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ModalDialog from './ModalDialog';

const Modal = ({ uniqueId, children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);
  const toggleModal = () => setModalOpen(!modalOpen);
  const labelId = uniqueId ? `${uniqueId}_label` : `modal_label`;

  return (
    <div>
      <button id={labelId} onClick={toggleModal}>
        Open Modal
      </button>
      {modalOpen && (
        <ModalDialog uniqueId={labelId} closeFunction={closeModal}>
          {children}
        </ModalDialog>
      )}
    </div>
  );
};

Modal.propTypes = {
  uniqueId: PropTypes.string,
};

export const ModalHeader = ({ children }) => (
  <div className="modal__header">{children}</div>
);

export const ModalContent = ({ children }) => (
  <div className="modal__content">{children}</div>
);

export const ModalFooter = ({ children }) => (
  <div className="modal__footer">{children}</div>
);

export default Modal;
