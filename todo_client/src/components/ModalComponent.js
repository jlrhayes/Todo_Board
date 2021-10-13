import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ModalComponent = ({input,onSubmit,modalText}) => {

  const [modalIsOpen, setIsOpen] = React.useState(false);


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>{modalText}</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        onSubmit ={closeModal}
      >
        <form onSubmit = {(e) => {onSubmit(e); closeModal()}}>
          <input type = {input.type} placeholder = {input.placeholder} onChange = {(e) => {input.onChange(e.target.value)}} />
        </form>
      </Modal>
    </div>
  );
}

export default ModalComponent

