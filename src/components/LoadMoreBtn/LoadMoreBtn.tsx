import css from './LoadMoreBtn.module.css';

type Props = {
  handleClick: () => Promise<void>;
};

export default function LoadMoreBtn({ handleClick }: Props) {
  return (
    <button type="button" className={css.loadMore} onClick={handleClick}>
      Load More
    </button>
  );
}
