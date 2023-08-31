import React from "react";

const CardUser = (props) => {
  const {
    user: { id, firstName, isSelect },
    selectorUser,
  } = props;
  const selectHandler = () => {
    selectorUser(id);
  };
  const styles = { backgroundColor: isSelect ? "pink" : "gray" };
  return (
    <article onClick={selectHandler} style={styles}>
      <h3>{firstName}</h3>
    </article>
  );
};

// class CardUser extends Component {
//   selectHandler = () => {
//     const { user, selectorUser } = this.props;
//     selectorUser(user.id);
//   };
//   render() {
//     const {
//       user: { firstName, isSelect },
//     } = this.props;
//     const styles = { backgroundColor: isSelect ? "pink" : "gray" };
//     return (
//       <article onClick={this.selectHandler} style={styles}>
//         <h3>{firstName}</h3>
//       </article>
//     );
//   }
// }

export default CardUser;
