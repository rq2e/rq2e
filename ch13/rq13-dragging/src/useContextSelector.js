import { useContextSelector as useContextSelectorOrig } from "use-context-selector";
import { shallowEqualObjects } from "shallow-equal";
import { useRef } from "react";

function useContextSelector(context, selector, selectMultiple = false) {
  const ref = useRef();

  const equalityFnCallback = (state) => {
    const selected = selector(state);
    if (shallowEqualObjects(ref.current, selected)) {
      return ref.current;
    }
    ref.current = selected;
    return selected;
  };

  // Update the selector fn to memoize the selected value by [equalityFn].
  const patchedSelector = selectMultiple ? equalityFnCallback : selector;
  return useContextSelectorOrig(context, patchedSelector);
}

export default useContextSelector;
