import { pageLinks, socialLinks } from '../data';
import PageLink from './PageLink';

const Footer = () => {
  const jsxFooterLinks = pageLinks.map((link) => (
    <li key={link.id}>
      <PageLink {...link} className="footer-link" />
    </li>
  ));

  const jsxSocialLinks = socialLinks.map((link) => (
    <li key={link.id}>
      <PageLink {...link} className="footer-link">
        <i className={link.icon}></i>
      </PageLink>
    </li>
  ));

  return (
    <footer className="section footer">
      <ul className="footer-links">{jsxFooterLinks}</ul>
      <ul className="footer-icons">{jsxSocialLinks}</ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
