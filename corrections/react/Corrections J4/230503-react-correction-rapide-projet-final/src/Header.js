export default function Header() {
  return (
    <header className="Header">
      <img
        className="logo"
        src="./logo.jpg"
        title="les licorns c'est cool"
        alt="une licorne verte, avec des cheveux rose"
      />
      <h1 className="titre">
        <span role="image" aria-label="emoji licorne">
          🦄
        </span>
        Blog licornes & bières
        <span role="image" aria-label="emoji bière">
          🍻
        </span>
      </h1>
      <h2>Le blog ou l'on parle de licornes & bières</h2>
    </header>
  );
}
