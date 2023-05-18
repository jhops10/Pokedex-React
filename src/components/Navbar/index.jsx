import './Navbar.css';

export default function Navbar({ sortPokemonsByName, getPokemon }) {
  return (
    <nav className="navContainer">
      <ul>
        <span>Ordenar Por:</span>
        <button onClick={getPokemon}>ID</button>
        <button onClick={sortPokemonsByName}>A - Z</button>
      </ul>
    </nav>
  );
}
