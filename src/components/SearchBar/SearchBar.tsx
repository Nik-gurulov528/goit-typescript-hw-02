import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './SearchBar.module.css';
import { IoMdSearch } from 'react-icons/io';
import { submitData } from '../../types';

type Props = {
  handleSubmit: (values: submitData) => Promise<void>;
};

export default function SearchBar({ handleSubmit }: Props) {
  return (
    <header className={css.topHeader}>
      <Formik initialValues={{ field: '' }} onSubmit={handleSubmit}>
        <Form className={css.searchForm}>
          <Field
            type="text"
            autoComplete="off"
            name="field"
            autoFocus
            placeholder="Search images and photos"
            className={css.searchInput}
          />
          <button type="submit" className={css.searchBtn}>
            <IoMdSearch size={24} />
          </button>
        </Form>
      </Formik>
    </header>
  );
}
