import './index.css';
import { SalesCard } from './components/SalesCard';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>

    </>
  )
}
export default App
