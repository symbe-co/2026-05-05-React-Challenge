import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BusinessCase } from './Components/BusinessCase';
import { ActiveSlideProvider } from './Context/ActiveSlideProvider';
import { Slide } from './Slide.types';
import { DEFAULT_SLIDES } from './testData';

export function App() {
  const [slides, setSlides] = useState<Slide[]>(DEFAULT_SLIDES);

  return (
    <Routes>
      <Route
        path="/:slideId"
        element={
          <ActiveSlideProvider slides={slides}>
            <BusinessCase slides={slides} setSlides={setSlides} />
          </ActiveSlideProvider>
        }
      />
    </Routes>
  );
}

export default App;
