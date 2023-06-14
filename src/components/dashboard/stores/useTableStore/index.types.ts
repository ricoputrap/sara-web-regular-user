import { TRequestItem } from "./request.types";

export type TFilterState = "pending" | "closed" | "onHold";

export type TColumnFilterOption = {
  id: number;
  label: string;
}

export type TColumnDisplaySettings = {
  requestor: boolean;
  department: boolean;
  location: boolean;
  pictures: boolean;
  title: boolean;
  description: boolean;
  status: boolean;
  owner: boolean;
  createdDate: boolean;
  dueDate: boolean;
  action: boolean;
}

export type State = {
  pendingRequests: TRequestItem[];
  onHoldRequests: TRequestItem[];
  closedRequests: TRequestItem[];

  columnDisplaySettings: TColumnDisplaySettings;
  columnFilterOptions: {
    requestors: {
      pending: TColumnFilterOption[];
      onHold: TColumnFilterOption[];
      closed: TColumnFilterOption[];
    },
    departments: {
      pending: TColumnFilterOption[];
      onHold: TColumnFilterOption[];
      closed: TColumnFilterOption[];
    },
    locations: {
      pending: TColumnFilterOption[];
      onHold: TColumnFilterOption[];
      closed: TColumnFilterOption[];
    }
  }
}

export type Actions = {
  setData: (data: TRequestItem[], filterState: TFilterState) => void;
  updateRowData: (id: number, data: TRequestItem) => void;
  addRowData: (data: TRequestItem) => void;
  removeRowData: (id: number) => void;
  toggleColumnDisplay: (column: string) => void;
  setColumnFilterOptions: (
    requestors: TColumnFilterOption[],
    departments: TColumnFilterOption[],
    locations: TColumnFilterOption[],
    filterState: TFilterState
  ) => void;
}