import React from 'react';
import { createInstanceHook, createStateSelector } from 'in-a-state';
import { state, State } from './state';

export const StateContext = React.createContext(true)

// Hooks used to help access state
export const useStateSelector = createStateSelector<State>(StateContext)
export const useInstanceOf = createInstanceHook(StateContext)