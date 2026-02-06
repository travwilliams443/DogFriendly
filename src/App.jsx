import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🐕 DogFriendly</h1>
        <p>Welcome to DogFriendly - Discover dog-friendly places!</p>
      </header>
      <main>
        <div className="hero">
          <h2>Hello from Amplify Gen 2!</h2>
          <p>This app is deployed and ready for development.</p>
          <div className="features">
            <div className="feature">
              <h3>🔍 Discover</h3>
              <p>Find dog-friendly restaurants, stores, parks, and more.</p>
            </div>
            <div className="feature">
              <h3>❤️ Favorites</h3>
              <p>Save your favorite places for quick access.</p>
            </div>
            <div className="feature">
              <h3>➕ Submit</h3>
              <p>Share new dog-friendly places with the community.</p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>DogFriendly MVP - Built with React + Vite + AWS Amplify Gen 2</p>
      </footer>
    </div>
  );
}

export default App;