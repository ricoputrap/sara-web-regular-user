import MultiSwitch from '@/base-ui/MultiSwitch';
import React, { useState } from 'react'

type TFilterStatus = "pending" | "closed" | "onhold" | "all";
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

const RequestStatusFilterButton: React.FC = () => {
  const [status, setStatus] = useState<string>("pending");
  const options: TOption[] = ALL_STATUS.map(option => ({
    id: option.id,
    label: option.label,
    active: option.id == status
  }));

  const toggleStatus = (id: string) => {
    setStatus(id);
  }

  return (
    <div id="request-status-filter-button">
      <MultiSwitch
        options={ options }
        toggleOption={ toggleStatus }
      />
    </div>
  )
}

export default RequestStatusFilterButton