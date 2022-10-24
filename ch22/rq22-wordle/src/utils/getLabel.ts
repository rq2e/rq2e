import { Status } from "../types";

function getLabel(label: string, status: Status) {
  if (status === Status.Unknown) {
    return label;
  }
  return [label, status].join(" ");
}

export default getLabel;
