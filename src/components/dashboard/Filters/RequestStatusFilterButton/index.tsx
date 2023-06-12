import MultiSwitch from '@/base-ui/MultiSwitch';
import React from 'react'
import useMultiSwitch from './useMultiSwitch';

const RequestStatusFilterButton: React.FC = () => {
  const { options, toggleStatus } = useMultiSwitch();

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