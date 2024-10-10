import clsx from 'clsx';
import { useActiveSlide } from '../../Context/ActiveSlideProvider';
import { Slide } from '../../Slide.types';
import { ExpensiveSlideContent } from '../Slide/SlideContent';

type Props = {
  slides: Slide[];
  slide: Slide;
  onClick: () => void;
  onAdd: () => void;
  onRemove: () => void;
};

export const Thumbnail = ({ slide, onClick, onAdd, onRemove }: Props) => {
  const { activeSlideId } = useActiveSlide();

  return (
    <div
      className={clsx(
        'text-sm p-4 flex flex-col items-center hover:shadow-md',
        {
          'border-yellow-300': slide.id === activeSlideId,
        }
      )}
    >
      <div className="scale-50">
        <ExpensiveSlideContent slide={slide} onClick={onClick} />
      </div>
      <ButtonBar onAdd={onAdd} onRemove={onRemove} />
    </div>
  );
};

const ButtonBar = ({
  onAdd,
  onRemove,
}: {
  onAdd: () => void;
  onRemove: () => void;
}) => (
  <div className="flex gap-2">
    <button onClick={onAdd}>Add</button>
    <button onClick={onRemove}>Remove</button>
  </div>
);
