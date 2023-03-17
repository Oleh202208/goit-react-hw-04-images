import PropTypes from 'prop-types';
import { GalleryItem, ItemImg } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export function ImageGalleryItem({ webformatURL, tags, largeImageURL }) {
  const [showModal, setshowModal] = useState(false);

  const toggleModal = largeImageURL => {
    setshowModal(showModal => ({
      showModal: !showModal,
    }));
    setshowModal(largeImageURL);
  };

  return (
    <GalleryItem>
      <ItemImg src={webformatURL} alt={tags} onClick={toggleModal} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </GalleryItem>
  );
}
// export class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = largeImageURL => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//     this.setState({ largeImageURL: largeImageURL });
//   };
//   render() {
//     const { showModal } = this.state;
//     const { webformatURL, tags, largeImageURL } = this.props;
//     return (
//       <GalleryItem>
//         <ItemImg src={webformatURL} alt={tags} onClick={this.toggleModal} />
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <img src={largeImageURL} alt={tags} />
//           </Modal>
//         )}
//       </GalleryItem>
//     );
//   }
// }

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
