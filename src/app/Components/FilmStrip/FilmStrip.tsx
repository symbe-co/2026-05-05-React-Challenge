import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { Slide } from '../../Slide.types';
import { Thumbnail } from './Thumbnail';

type Props = {
  slides: Slide[];
  setSlides: (slides: Slide[]) => void;
};

const newSlide = {
  id: v4(),
  title: 'New slide',
};

export const FilmStrip = ({ slides, setSlides }: Props) => {
  const navigate = useNavigate();

  const handleSetActiveSlide = (newSlideId: string) => {
    navigate(`/${newSlideId}`);
  };

  const onAdd = (index: number) => {
    const updatedSlides = _.cloneDeep(slides);

    updatedSlides.splice(index, 0, newSlide);

    setSlides(updatedSlides);
  };

  const onRemove = (index: number) => {
    setSlides(slides.filter((_, slideIndex) => slideIndex !== index));
  };

  return (
    <div className="flex flex-col gap-4">
      {slides.map((slide, index) => (
        <Thumbnail
          key={index}
          slide={slide}
          slides={slides}
          onClick={() => handleSetActiveSlide(slide.id)}
          onAdd={() => onAdd(index)}
          onRemove={() => onRemove(index)}
        />
      ))}
    </div>
  );
};
