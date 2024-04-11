import React from 'react';
import Table from '../../components/Table';
import Container from '../../components/Container';

const Home = () => {
  const data = [
    { id: 1, name: 'John Doe', company: 'DevExtreme', status: 'active', assignedTo: 'John Doe', phone: '555-555-5555', email: 'teste@teste.com' },
    { id: 2, name: 'Jane Doe', company: 'DevExtreme', status: 'inactive', assignedTo: 'John Doe', phone: '555-555-5555', email:  'teste@teste.com' },
    { id: 3, name: 'John Doe', company: 'DevExtreme', status: 'active', assignedTo: 'John Doe', phone: '555-555-5555', email:  'teste@teste.com' },
  ];
  

  const cellRender = (data) => {}
  

  const columns = [
    { dataField: 'name', caption: 'Name', sortOrder: 'asc', hidingPriority: 5, minWidth: 150 },
    { dataField: 'company', caption: 'Company', hidingPriority: 5, minWidth: 150 },
    { dataField: 'status', caption: 'Status', dataType: 'string', hidingPriority: 3, minWidth: 100 },
    { dataField: 'assignedTo', caption: 'Assigned to', hidingPriority: 4 },
    { dataField: 'phone', caption: 'Phone', hidingPriority: 2  },
    { dataField: 'email', caption: 'Email', hidingPriority: 1 },
  ]


  return (
    <Container>
      <Table 
        data={data}
        columns={columns}
        cellRender={cellRender}
      />
    </Container>
  );
};

export default Home;
