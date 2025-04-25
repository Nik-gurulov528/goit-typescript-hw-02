import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { imageObject } from '../../types';

type Props = {
  list: Array<imageObject>;
  handleClick: (id: string) => void;
};

export default function ImageGallery({ list, handleClick }: Props) {
  return (
    <ul className={css.collectionOfImages}>
      {list.map((item: imageObject) => {
        return (
          <li
            key={item.id}
            className={css.itemOfCollection}
            onClick={() => handleClick(item.id)}
          >
            <ImageCard srcImg={item.urls.small} altImg={item.alt_description} />
          </li>
        );
      })}
    </ul>
  );
}
