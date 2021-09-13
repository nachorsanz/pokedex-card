import StyledHeader from './StyledHeader';
import pokedexLogo from '../../assets/logo.svg';
function Header() {
    return (
        <StyledHeader>
            <div>
                <img
                    className="logo"
                    width="20%"
                    src={pokedexLogo}
                    alt="logo"
                />
            </div>
        </StyledHeader>
    );
}
export default Header;
