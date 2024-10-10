import { useState } from 'react';
import { Slide } from '../Slide.types';
import { Button } from './Common/Button';
import { VariableWindow } from './Common/VariableWindow';
import { ExpensiveSlideContent } from './Slide/SlideContent';

export const BusinessCase = ({
  slides,
  setSlides,
}: {
  slides: Slide[];
  setSlides: (slides: Slide[]) => void;
}) => {
  const activeSlide = slides[0];
  const [isVariableWindowOpen, setIsVariableWindowOpen] = useState(false);

  const toggleVariableWindow = () =>
    setIsVariableWindowOpen(!isVariableWindowOpen);

  return (
    <div className="flex flex-col gap-8 px-20 py-10">
      <div className="flex gap-8">
        <ExpensiveSlideContent
          slide={activeSlide}
          openVariableWindow={toggleVariableWindow}
        />
        {isVariableWindowOpen && <VariableWindow />}
      </div>
      <Button onClick={toggleVariableWindow}>
        {isVariableWindowOpen
          ? 'Close Variables Window'
          : 'Open Variables Window'}
      </Button>
    </div>
  );
};
