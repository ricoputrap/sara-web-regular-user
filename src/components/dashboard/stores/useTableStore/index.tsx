import React from 'react'
import { create } from 'zustand';
import { Actions, State, TFilterState } from './index.types';
import { initialColumnDisplaySettings } from './initialData';
import { TRequestItem } from './request.types';

const REQUEST_STATE = {
  PENDING: "pending",
  ON_HOLD: "onHold",
  CLOSED: "closed"
}

const useTableStore = create<State & Actions>((set, get) => ({
  // STATE
  pendingRequests: [],
  onHoldRequests: [],
  closedRequests: [],

  columnDisplaySettings: initialColumnDisplaySettings,
  columnFilterOptions: {
    requestors: {
      pending: [],
      onHold: [],
      closed: []
    },
    departments: {
      pending: [],
      onHold: [],
      closed: []
    },
    locations: {
      pending: [],
      onHold: [],
      closed: []
    }
  },

  // ACTIONS
  setData(data, filterState) {
    switch (filterState) {
      case "pending":
        set({ pendingRequests: data });
        break;
      case "onHold":
        set({ onHoldRequests: data });
        break;
      case "closed":
        set({ closedRequests: data });
        break;
      default:
        break;
    }
  },
  updateRowData(id, data) {
    const { PENDING, ON_HOLD, CLOSED } = REQUEST_STATE;

    // find a request item object in one of state values
    // (`pendingRequests`, `onHoldRequests`, `closedRequests`)
    // based on the filtering using the updated values in `data`

    // for example, after doing some processes, we get to know
    // that the state of the request with that `id` is "pending" 
    const requestState: TFilterState = "pending";
    const updatedRequests: TRequestItem[] = [];

    // update state value
    switch (requestState) {
      case PENDING:
        set({ pendingRequests: updatedRequests })
        break;
      case ON_HOLD:
        set({ onHoldRequests: updatedRequests })
        break;
      case CLOSED:
        set({ closedRequests: updatedRequests })
        break;
      default:
        break;
    }
  },
  addRowData(data) {
    
  },
  removeRowData(id) {
    
  },
  toggleColumnDisplay(column) {
    
  },

  setColumnFilterOptions(requestors, departments, locations, filterState) {
    
  },
}));

export default useTableStore