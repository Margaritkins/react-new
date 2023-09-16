import React from "react";
import PropTypes from "prop-types";
import { UserContext } from "../../../contexts";

const CardUser = () => {
  const renderFunc = ({
    user: { id, firstName, lastName, isSelect },
    selectorUser,
  }) => {
    const selectHandler = () => {
      selectorUser(id);
    };
    const styles = { backgroundColor: isSelect ? "pink" : "gray" };

    return (
      <article onClick={selectHandler} style={styles}>
        <h3>
          {firstName} {lastName}
        </h3>
      </article>
    );
  };

  return <UserContext.Consumer>{renderFunc}</UserContext.Consumer>;
};

export const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  isSelect: PropTypes.bool,
});

CardUser.propTypes = {
  user: userShape.isRequired,
  selectorUser: PropTypes.func.isRequired,
};

export const defaultUser = {
  id: 0,
  firstName: "nonsme",
  lastName: "noname",
};

CardUser.defaultProps = {
  user: defaultUser,
  selectorUser: () => {},
};

export default CardUser;
