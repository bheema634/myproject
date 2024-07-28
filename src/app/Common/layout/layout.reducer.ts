/* The reducer of the layout will handle all changes of the application layout 
and create a new state every time the UI has to change.*/

import * as layout from "./layout.actions"

export interface state{
    /*
   The description of the different parts of the layout go here
  */
}

const initialState: state={
    /*
    The initial values of the layout state will be initialized here
   */
}

export function reducer(
    state = initialState,
    action:layout.LayoutActions
):state{
switch (action.type){
    default: return state;
}
}