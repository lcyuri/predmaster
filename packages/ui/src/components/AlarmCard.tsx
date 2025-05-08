import React  from 'react';
import Card from 'react-bootstrap/Card';
import { AlarmCardProps } from '../models/component';


const AlarmCard: React.FC<AlarmCardProps> = ({
  color,
  title,
  total,
  porcentage
}) => {
  const getBorder = (): string => {
    switch (color) {
      case 'Vermelho':
      case 'Amarelo':
      case 'Verde':
        return 'none';
      default:
        return 'default';
    }
  }

  const getBackgroundColor = (): string => {
    switch (color) {
      case 'Vermelho':
        return '#FFDDE3';
      case 'Amarelo':
        return '#FFE9C5';
      case 'Verde':
        return '#E3FFD6';
      default:
        return '#FFFFFF';
    }
  }

  const getIconColor = (): string => {
    switch (color) {
      case 'Vermelho':
        return '#FD0F39';
      case 'Amarelo':
        return '#FFA000';
      case 'Verde':
        return '#4CAF50';
      default:
        return '#BFBFBF';
    }
  }

  const getPrevision = (): string => {
    switch (color) {
      case 'Vermelho':
        return 'menor que 60 dias'
      case 'Amarelo':
        return 'entre 60 e 120 dias';
      case 'Verde':
        return 'entre 121 e 365 dias';
      default:
        return '366 dias';
    }
  }

  return (
    <Card text='dark' style={{width: '18rem', border: getBorder()}} className='mb-2'>
      <Card.Body style={{backgroundColor: getBackgroundColor()}}>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <span style={{ fontWeight: 'bold' }}>{title}</span>
          <span style={{color: getIconColor()}}>
            <i className='fas fa-exclamation-triangle'></i>
          </span>
        </Card.Title>
        <Card.Text>
          <div>Total: {total}</div>
          <div>Porcentagem: {porcentage}</div>
          <div>Previsão: {getPrevision()}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AlarmCard;