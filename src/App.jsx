import React from "react";
import "./App.css";
import Note from "./components/Note";
import {COLORS} from'./constants';


// const List = ({title, children}) => {
//   return (
//     <article>
//       <h3 title={title}>list {title}</h3>
//       <ul>{children}</ul>
//     </article>
//   );
// };

function App() {
  return (
    <>
    <Note title = 'Pitfall' bgColor = {COLORS.PITFALL}>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, esse.</p>
    </Note>
    <Note>
<p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. </em>Veniam perferendis officia mollitia nostrum provident. Ullam accusamus eligendi quas alias, laudantium quaerat saepe. Aliquam molestias enim recusandae. Ducimus cum in numquam doloremque quod. Harum ab delectus officiis facilis dolorum omnis perspiciatis?
</p>
    </Note>
    <Note title = 'Depricated' bgColor = {COLORS.DEPRICATE}>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, esse.</p>
    </Note>
    </>
  );
}

export default App;
