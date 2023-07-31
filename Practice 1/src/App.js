import React from "react";
import Expenses from "./components/Expenses";
import expenses from "./components/ExpenseData"


const App = () => {

  // return React.createElement(
  //   'div', {}, React.createElement('h2', {}, 'Let\'s get started!'),
  //   React.createElement(Expenses, { items: expenses })
  // )

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />

    </div>
  );
}

export default App;
