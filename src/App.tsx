import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";



const App = () => {
  const [selectCategory, setSelectCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "lorem ipsum 1", amount: 10, category: "Utilities" },
    { id: 2, description: "lorem ipsum 2", amount: 10, category: "Utilities" },
    { id: 3, description: "lorem ipsum 3", amount: 10, category: "Utilities" },
    { id: 4, description: "lorem ipsum 4", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectCategory
    ? expenses.filter((e) => e.category === selectCategory)
    : expenses;
  return (
    <div className="m-4">
      <div className="mb-5" >
        <ExpenseForm />
      </div>

      <div className="mb-3" style={{ marginTop: "5rem" }}>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
};

export default App;
