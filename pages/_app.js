import debounce from '@/utils/debounce';
import resize from '@/utils/resize';
import { useEffect } from 'react';
import ReactModal from 'react-modal';

import '../styles/global/globals.scss'

ReactModal.setAppElement('#__next');

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    resize();
    window.addEventListener('resize', debounce(resize, 200));
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
