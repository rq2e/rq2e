import "./employee.css";

type Employee = {
  name: string;
  title: string;
};

interface CardProps {
  item: Employee;
}

function EmployeeCard({ item }: CardProps) {
  return (
    <section className="employee">
      <h2 className="employee__name">{item.name}</h2>
      <h3 className="employee__title">{item.title}</h3>
    </section>
  );
}

export default EmployeeCard;
