import { useMotionValue } from 'framer-motion';
import { useContext, useEffect } from 'react';
import ModelsContext from '../components/Model/ModelsContext';

export default function useWrapperScroll() {
  const { wrapperRef } = useContext(ModelsContext);

  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const element = wrapperRef.current;

    if (element) {
      const updateScrollValue = () => {
        const { scrollTop, scrollHeight, offsetHeight } = element;

        const fullScroll = scrollHeight - offsetHeight;

        scrollY.set(scrollTop);

        scrollYProgress.set(scrollTop / fullScroll);
      };

      element.addEventListener('scroll', updateScrollValue);

      return () => element.removeEventListener('scroll', updateScrollValue);
    }
  }, [scrollY, scrollYProgress, wrapperRef]);

  return { scrollY, scrollYProgress };
}
