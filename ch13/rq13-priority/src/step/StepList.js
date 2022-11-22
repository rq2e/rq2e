import useStep from "./useStep";
import Step from "./Step";
import StepAdd from "./StepAdd";

function StepList() {
  const steps = useStep(({ state: { steps } }) =>
    steps.map(({ step }) => step)
  );

  return (
    <section className="progress">
      <ol className="progress-steps">
        {steps.map((step, index) => (
          <Step index={index} key={step} />
        ))}
        <StepAdd />
      </ol>
    </section>
  );
}

export default StepList;
