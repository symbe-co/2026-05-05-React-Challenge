import { useState } from 'react';
import { FilmStrip, Slide } from './FilmStrip';

const slides: Slide[] = [
  {
    id: '1',
    title: 'Introduction',
    description: "An overview of the presentation's main objectives.",
  },
  {
    id: '2',
    title: 'Problem Statement',
    description: 'Identifying the core challenges to address.',
  },
  {
    id: '3',
    title: 'Proposed Solution',
    description: 'Outline of the proposed solution and its benefits.',
  },
  {
    id: '4',
    title: 'Implementation',
    description: 'Step-by-step plan for implementing the solution.',
  },
];

export function App() {
  const [activeSlide, setActiveSlide] = useState<string>(slides[0].id);

  return (
    <FilmStrip
      userId="RupertSmith"
      slides={slides}
      activeSlide={activeSlide}
      setSlides={() => undefined}
      setActiveSlide={(slide) => {
        console.log(slide);
        setActiveSlide(slide);
      }}
    />
  );
}

export default App;
