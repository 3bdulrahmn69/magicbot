import PropTypes from 'prop-types';

const Section = ({ id, title, description, desClass, className, children }) => {
  return (
    <section id={id} className={className}>
      <h2 className="text-center text-4xl font-bold uppercase">{title}</h2>
      {description ? (
        <p className={`text-lg text-center mb-8 mt-4 ${desClass}`}>
          {description}
        </p>
      ) : null}
      {children}
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  desClass: PropTypes.string,
};

export default Section;
