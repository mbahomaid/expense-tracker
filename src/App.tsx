import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "lorem ipsum 1", amount: 10, category: "Utilities" },
    { id: 2, description: "lorem ipsum 2", amount: 10, category: "Utilities" },
    { id: 3, description: "lorem ipsum 3", amount: 10, category: "Utilities" },
    { id: 4, description: "lorem ipsum 4", amount: 10, category: "Utilities" },
  ]);

  return (
    <div className="m-4">
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
};

export default App;
