import React from 'react';
import {Card, Icon} from 'antd';

const Segment = ({title, icon, children}) => (
  <Card
    title={
      <h4>
        <Icon type={icon} />
        {'  '}
        {title || 'Sin titulo'}
      </h4>
    }>
    {children}
  </Card>
);

export default Segment;
