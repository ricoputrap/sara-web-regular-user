import React from 'react'
import { Container } from './index.styles';
import SwitchItem from './SwitchItem';

type TOption = {
  id: string;
  label: string;
  active: boolean;
}

interface Props {
  options: TOption[];
  toggleOption: (id: string) => void;
}

const MultiSwitch: React.FC<Props> = ({ options, toggleOption }) => {
  return (
    <div className="multi-switch">
      <Container>
        {options.map(option => (
          <SwitchItem
            key={ option.id }
            label={ option.label }
            active={ option.active }
            onClick={() => toggleOption(option.id)}
          />
        ))}
      </Container>
    </div>
  )
}

export default MultiSwitch