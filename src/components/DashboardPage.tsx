import { Button } from 'antd';
import React, { useState } from 'react';

export interface DashboardPageProps {}

const DashboardPage: React.FC<DashboardPageProps> = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div style={{ paddingTop: 200, maxWidth: 600, textAlign: 'center', margin: '0 auto' }}>
      <h1>My dashboard</h1>
      <Button onClick={() => setVisible(true)}>Show me money</Button>
      {isVisible && <div>Here's my money</div>}
    </div>
  );
};

export default DashboardPage;
