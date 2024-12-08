import avilaLogo from './assets/avilaLogo.png';
import me from './assets/me.png';
import './App.css';

function App() {
  return (
    <div className="w-full xmas-font">
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '0',
          paddingTop: '141.4286%',
          paddingBottom: '0',
          boxShadow: '0 2px 8px 0 rgba(63, 69, 81, 0.16)',
          marginTop: '1.6em',
          marginBottom: '0.9em',
          overflow: 'hidden',
          borderRadius: '8px',
          willChange: 'transform',
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            border: 'none',
            padding: 0,
            margin: 0,
          }}
          src="https://www.canva.com/design/DAGYt0_tXK4/skLM_KZ4f9wpRdL4VE9L4Q/view?embed"
        />
        <div className="absolute top-[100px] sm:top-52">
          <div className=" w-full flex flex-col items-center justify-center">
            <h1 className="text-3xl sm:text-7xl font-bold">Bota navideña - 2024</h1>
            <div className="w-full flex flex-col  sm:flex-row items-center justify-center">
              <img
                src={avilaLogo}
                alt="Logo de Avila"
                className="responsive-image"
              />
              <img src={me} alt="Yo" className="responsive-image w-[107px]" />
            </div>
            <a
              href="https://wordwall.net/play/83441/786/785"
              target="_blank"
              className="button w-4/6 sm:w-64 mt-12 text-xl py-4"
            >
              Jugar Adivina Quien
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
