import css from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={css.contentNavbar}>
      <img
        src={
          'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
        }
        alt='pokeapi'
      />
      <ul className={css.listNavbar}>
        <li>
          <a href='/home'>home</a>
        </li>
        <li>
          <a href='/listpokemons'>catalog of pokemons</a>
        </li>
      </ul>
      <h2>Serchbar of pokemons</h2>
    </div>
  )
}

export default Navbar
