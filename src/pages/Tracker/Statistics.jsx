import { useSelector } from "react-redux"
import { selectExpense, selectIncome } from "../../redux/tracker/transactionsSlice"

const Statistics = () => {
    const income = useSelector(selectIncome)
    const expense = useSelector(selectExpense)
  return (
    <div className="h-auto flex justify-center items-center pt-10 ">
      <div className='stats stats-vertical lg:stats-horizontal shadow '>
        <div className='stat'>
          <div className='stat-title'>Income</div>
          <div className='stat-value text-accent'>{income}</div>
          <div className='stat-desc'>Jan 1st - Feb 1st</div>
        </div>

        <div className='stat'>
          <div className='stat-title'>Expense</div>
          <div className='stat-value text-secondary'>{expense}</div>
          <div className='stat-desc'>↗︎ 400 (22%)</div>
        </div>

        <div className='stat'>
          <div className='stat-title'>Total</div>
          <div className='stat-value'>{income - Math.abs(expense)}</div>
          <div className='stat-desc'>↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  )
}

export default Statistics
