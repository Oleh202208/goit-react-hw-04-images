import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyled, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalStyled>{children}</ModalStyled>
    </Overlay>,
    modalRoot
  );
}

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <Overlay onClick={this.handleBackdropClick}>
//         <ModalStyled>{this.props.children}</ModalStyled>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }

Modal.propTypes = {
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};
