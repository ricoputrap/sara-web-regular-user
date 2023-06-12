import React from 'react'
import useFiltersStore, { TFilterStatus } from '../../stores/useFiltersStore'

type TOption = {
  id: TFilterStatus;
  label: string;
  active: boolean;
}

type TStatus = {
  id: TFilterStatus;
  label: string;
}

const ALL_STATUS: TStatus[] = [
  { id: "pending", label: "Pending" },
  { id: "closed", label: "Closed" },
  { id: "onhold", label: "On Hold" },
  { id: "all", label: "All" }
]

const useMultiSwitch = () => {
  const status = useFiltersStore(state => state.status);
  const toggleStatus = useFiltersStore(state => state.toggleStatus);
  const options: TOption[] = ALL_STATUS.map(option => ({
    ...option,
    active: option.id == status
  }))

  return { options, toggleStatus }
}

export default useMultiSwitch