import PropTypes from "prop-types";
const Container = ({ children }) => {
  return <div className="max-w-[1800px] mx-auto relative">{children}</div>;
};

export default Container;
Container.propTypes = {
  children: PropTypes.node,
};
