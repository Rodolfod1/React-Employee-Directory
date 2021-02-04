import "./style.css"
const EmployeeTable = (props) => {
    return (
         <main className="table">{props.children}</main>
    )
}
export default EmployeeTable

