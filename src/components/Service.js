const Service = ({ service: { icon, title, text: lorem } }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{lorem}</p>
      </div>
    </article>
  );
};
export default Service;
