import React from 'react'
import ReactDOM from "react-dom" 
import './modal.css'

function JSX_MODAL (props) {
  const { isOpen, onClose } = props

  if (!isOpen) return null

  ReactDOM.createPortal(
    <div className='modal-overlay'>
      <div className='modal'>
        <button className='modal-close' onClick={onClose}>
          &times;
        </button>
        <div className='modal-content'>{props.children}</div>
      </div>
    </div>
  )
  document.getElementById('modal')
}

export default JSX_MODAL

