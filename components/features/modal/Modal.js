import React, { useState } from 'react'
import ModalDialog from './ModalDialog'
const Modal = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div>
            <button onClick={() => setModalActive(!modalActive)}>
                Open Modal
            </button>
            {modalActive && <ModalDialog />}
        </div>
    )
}

export default Modal
