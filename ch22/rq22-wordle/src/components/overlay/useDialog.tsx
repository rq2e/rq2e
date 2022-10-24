import { useContext } from "react";
import OverlayContext from "./context";
import ResultDialog, { ResultDialogProps } from "./dialogs/ResultDialog";
import WelcomeDialog from "./dialogs/WelcomeDialog";

function useDialog() {
  const { showDialog } = useContext(OverlayContext);

  const showWelcomeDialog = () => showDialog?.(<WelcomeDialog />);
  const showResultDialog = (props: ResultDialogProps) =>
    showDialog?.(<ResultDialog {...props} />);

  return { showResultDialog, showWelcomeDialog };
}

export default useDialog;
