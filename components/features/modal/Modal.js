import React, { useState } from 'react'
import ModalDialog from './ModalDialog'
const Modal = () => {
    const [modalActive, setModalActive] = useState(false)
    const closeModal = () => {
        setModalActive(false)
    }
    return (
        <div>
            <button onClick={() => setModalActive(!modalActive)}>
                Open Modal
            </button>
            {modalActive && <ModalDialog closeFunction={closeModal} />}
        </div>
    )
}

export default Modal
