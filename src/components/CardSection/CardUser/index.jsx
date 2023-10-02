import React from "react";
import PropTypes from "prop-types";
import { UserContext } from "../../../contexts";

const CardUser = () => {
  
  const renderFunc = ({
    user: { id, firstName, lastName, imgSrc, isSelect },
    selectorUser,
  }) => {
    const selectHandler = () => {
      selectorUser(id);
    };
    const styles = { backgroundColor: isSelect ? "pink" : "gray" };
    const imgStyles = { with: "70px", height: "70px", borderRadius: "50%" };

    return (
      <article onClick={selectHandler} style={styles}>
        <h3>
          {firstName} {lastName}
          <img src={imgSrc} style={imgStyles} />
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
  imgSrc:
    "https://cdn5.vectorstock.com/i/1000x1000/93/04/little-kid-avatar-profile-picture-vector-25639304.jpg",
};

CardUser.defaultProps = {
  user: defaultUser,
  selectorUser: () => {},
};

export default CardUser;
