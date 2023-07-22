import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "./Card";

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.items.map((item) => (
                <ExpenseItem
                    title={item.title}
                    date={item.date}
                    amount={item.amount} />
            ))}
        </Card>
    )
}

export default Expenses;