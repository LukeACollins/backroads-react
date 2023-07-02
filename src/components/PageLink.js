

const PageLink = ({
  href = '',
  text = '',
  target = '_self',
  rel = 'noreferrer',
  children,
  className,
}) => {
  return (
    <a href={href} className={className} target={target} rel={rel}>
      {children || text}
    </a>
  );
};
export default PageLink;
