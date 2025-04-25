import css from './ImageCard.module.css';

type Props = {
  srcImg: string;
  altImg: string;
};

export default function ImageCard({ srcImg, altImg }: Props) {
  return (
    <div className={css.wrapperImg}>
      <img src={srcImg} alt={altImg} />
    </div>
  );
}
