import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar';
import fetchData from './js/fetchData';
import { FormEvent, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PropagateLoader } from 'react-spinners';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { imageObject, submitData } from './types';

function App() {
  const [images, setImages] = useState<Array<imageObject>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [topic, setTopic] = useState<string>('');
  const [numPage, setNumPage] = useState<number>(0);
  const [currentImg, setCurrentImg] = useState<Partial<imageObject>>({});

  async function handleSubmit(values: submitData) {
    if (values.field.trim() === '') {
      toast.error('There must be something!');
      return;
    }
    setNumPage(1);
    try {
      setImages([]);
      setIsError(false);
      setIsLoading(true);
      const listOfData = await fetchData(values.field, 1);
      setImages(listOfData.data.results);
      setTopic(values.field);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleClick() {
    try {
      setIsError(false);
      setIsLoading(true);
      const listOfData = await fetchData(topic, numPage + 1);
      setImages(prevImages => {
        return [...prevImages, ...listOfData.data.results];
      });
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
      setNumPage(numPage + 1);
    }
  }

  function handleBigger(id: string) {
    const chooseImg: imageObject | undefined = images.find(
      item => item.id === id
    );
    if (chooseImg) {
      setCurrentImg(chooseImg);
    }
  }

  return (
    <div className="wrapper">
      <Toaster />
      <SearchBar handleSubmit={handleSubmit} />
      {images.length !== 0 && (
        <ImageGallery list={images} handleClick={handleBigger} />
      )}
      {isLoading && <PropagateLoader color="#fcba03" />}
      {isError && <ErrorMessage />}
      {images.length !== 0 && <LoadMoreBtn handleClick={handleClick} />}
      <ImageModal currentImg={currentImg} setCurrentImg={setCurrentImg} />
    </div>
  );
}

export default App;
