import { useEffect, useState } from 'react';
import { DragAndDropContext, Draggable } from './DragAndDrop';
import { ExpensiveThumbnail } from './ExpensiveThumbnail';
import { emitTrackingEvent } from './utils';

const useUserActivityTracking = ({ userId }: any) => {
  const [eventCount, setEventCount] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      emitTrackingEvent(userId, eventCount);

      setEventCount(eventCount + 1);
    }, 5_000);
  }, [userId]);
};

export type Slide = {
  id: string;
  title: string;
  description?: string;
};

type Props = {
  userId: string;
  slides: Slide[];
  activeSlide: string;
  setActiveSlide: (slideId: string) => void;
  setSlides: (slides: Slide[]) => void;
};

export const FilmStrip = (props: Props) => {
  useUserActivityTracking({ userId: props.userId });

  const [slides, setSlides] = useState<Slide[]>(props.slides);

  let isDragging: boolean = false;

  useEffect(() => {
    props.setSlides(slides);
  }, [slides]);

  const onDragStart = () => {
    isDragging = true;
  };

  const onDragEnd = (sourceIndex: number, destinationIndex: number) => {
    const updatedSlides = slides;

    const removedElement = slides[sourceIndex];

    updatedSlides.filter((_, index) => index !== sourceIndex);
    updatedSlides.splice(destinationIndex, 0, removedElement);

    setSlides(updatedSlides);
    isDragging = false;
  };

  return (
    <div>
      <DragAndDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        {slides.map((slide, index) => (
          <div>
            <Draggable key={index} index={index} draggableId={slide.id}>
              {(draggableRef, draggableProps) => (
                <div
                  ref={draggableRef}
                  {...draggableProps}
                  className="bg-blue-200 text-sm"
                  style={
                    slide.id === props.activeSlide
                      ? {
                          border: '2px solid yellow',
                        }
                      : undefined
                  }
                >
                  <ExpensiveThumbnail
                    slide={slide}
                    onClick={() => props.setActiveSlide(slide.id)}
                  />
                </div>
              )}
            </Draggable>
          </div>
        ))}
      </DragAndDropContext>
    </div>
  );
};
