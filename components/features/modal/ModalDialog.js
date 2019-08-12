import React from 'react'
import styled from 'styled-components'

const Dialog = styled.div`
    box-sizing: border-box;
    padding: 15px;
    border: 1px solid #000;
    background-color: #fff;
    min-height: 100vh;
    position: absolute;
    top: 2rem;
    left: 50vw;
    transform: translateX(-50%);
    min-width: calc(640px - (15px * 2));
    min-height: auto;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.12), 0 15px 12px rgba(0, 0, 0, 0.22);
`

const ModalDialog = () => {
    return (
        <Dialog role="dialog" aria-modal="true" className="modal-window">
            Here is my modal!
        </Dialog>
    )
}

export default ModalDialog
