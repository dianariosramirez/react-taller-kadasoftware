// Dependencies
import { createRoot } from 'react-dom/client';

// Components
import { PetList } from './components/PetList/PetList';

const App = () => {
  return (
    <div>
      <h1>Lista de mascotas</h1>
      <PetList />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
