import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';
import PageLink from './PageLink';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => (
            <li key={link.id}>
              <PageLink {...link} className="nav-link" />
            </li>
          ))}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <PageLink {...link} className="nav-icon">
                <i className={link.icon}></i>
              </PageLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
