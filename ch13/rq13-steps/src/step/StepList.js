import useTask from "../task/useTask";
import Step from "./Step";
import StepAdd from "./StepAdd";

function StepList({ taskId }) {
  const {
    state: { tasks },
  } = useTask();
  const steps = tasks
    .find((task) => task.id === taskId)
    .steps.map(({ step }) => step);

  return (
    <section className="progress">
      <ol className="progress-steps">
        {steps.map((step, index) => (
          <Step taskId={taskId} index={index} key={step} />
        ))}
        <StepAdd taskId={taskId} />
      </ol>
    </section>
  );
}

export default StepList;
