import { useState } from "react";

export function useTrigger() {
    const [state, setState] = useState(Math.random());
    return {
        state: state.toString(),
        onClick: () => setState(Math.random())
    }
}