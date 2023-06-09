import React  from 'react'
import { Circle, Container, Lane } from './index.styles';

interface Props {
  isActive: boolean;
  toggle: () => void;
}

const Switch: React.FC<Props> = ({ isActive, toggle }) => {
  return (
    <div className="sara-switch">
      <Container>
        <Circle
          isActive={ isActive }
          onClick={ toggle }
        />
        <Lane
          isActive={ isActive }
          onClick={ toggle }
        />
      </Container>
    </div>
  )
}

export default Switch