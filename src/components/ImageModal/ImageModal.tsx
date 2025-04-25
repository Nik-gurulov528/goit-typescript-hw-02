import ReactModal from 'react-modal';
import css from './ImageModal.module.css';
import { imageObject } from '../../types';

ReactModal.setAppElement('#root');

type Props = {
  currentImg: Partial<imageObject>;
  setCurrentImg: React.Dispatch<React.SetStateAction<Partial<imageObject>>>;
};

export default function ImageModal({ currentImg, setCurrentImg }: Props) {
  return (
    <ReactModal
      isOpen={Boolean(currentImg.urls)}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={() => setCurrentImg({})}
      style={{
        overlay: {
          backgroundColor: 'rgba(12, 12, 12, 0.8)',
        },
      }}
    >
      <img src={currentImg.urls?.regular} alt={currentImg.alt_description} />
      <p className={css.modalText}>{currentImg.description}</p>
    </ReactModal>
  );
}
