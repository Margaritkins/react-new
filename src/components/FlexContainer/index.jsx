import React from "react";
import PropTypes from "prop-types";
import styles from "./FlexContainer.module.scss";

const FlexContainer = ({ children, title, flexDir, justCont, alItems }) => {
  return (
    <section
      className={styles.FlexContainer}
      style={{
        flexDirection: flexDir,
        justifyContent: justCont,
        alignItems: alItems,
      }}
    >
      <h2 className={styles.FlexContainer__h2}>{title}</h2>
      {children}
    </section>
  );
};

FlexContainer.defaultProps = {
  title: "{title}",
};

FlexContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default FlexContainer;

