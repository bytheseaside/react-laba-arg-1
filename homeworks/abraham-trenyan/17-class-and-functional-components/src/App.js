import Faces from '../src/Components/Faces/Faces.jsx'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary.jsx';
function App() {
  return (
    <ErrorBoundary>
      <Faces />
    </ErrorBoundary>
  );
}

export default App;
