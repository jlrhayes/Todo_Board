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

const ModalComponent = ({input,onSubmit}) => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    console.log(input.placeholder)
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Button</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit = {onSubmit}>
          <input type = {input.type} placeholder = {input.placeholder} value = {input.value} onChange = {input.onChange} />
        </form>
      </Modal>
    </div>
  );
}

export default ModalComponent

