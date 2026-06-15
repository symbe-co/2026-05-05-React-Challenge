import { createContext, useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Slide } from '../Slide.types';

const ActiveSlideContext = createContext<{
  activeSlideId: string;
  activeSlide: Slide;
} | null>(null);

export const useActiveSlide = () => {
  const context = useContext(ActiveSlideContext);

  if (!context) {
    throw new Error(
      'useActiveSlide must be used within an ActiveSlideProvider'
    );
  }

  return context;
};

export const ActiveSlideProvider = ({
  children,
  slides,
}: {
  children: React.ReactNode;
  slides: Slide[];
}) => {
  const { slideId } = useParams<{ slideId: string }>();
  const activeSlide = slides.find((slide) => slide.id === slideId);

  if (!activeSlide) {
    return <Navigate to={`/${slides[0].id}`} replace />;
  }

  return (
    <ActiveSlideContext.Provider
      value={{ activeSlideId: activeSlide.id, activeSlide }}
    >
      {children}
    </ActiveSlideContext.Provider>
  );
};
