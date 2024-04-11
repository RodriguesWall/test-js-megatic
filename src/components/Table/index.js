import React from 'react';
import DataGrid, {
  Sorting, Selection, HeaderFilter, Scrolling, SearchPanel,
  ColumnChooser, Export, Column, Toolbar, Item, LoadPanel,
  DataGridTypes
} from 'devextreme-react/data-grid';
import DropDownButton, { DropDownButtonTypes } from 'devextreme-react/drop-down-button';
import Button from 'devextreme-react/button';
import './crm-contact-list.scss';

const Table = ({ 
  data, 
  columns,
  onRowClick, onExporting, filterByStatus, onAddContactClick, refresh, cellRender}) => {
  const exportFormats = ['xlsx', 'pdf'];
  const filterStatusList = ['All',   'Salaried',
  'Commission',
  'Terminated'];
  const dropDownOptions = { width: 'auto' };


  return (
    <DataGrid
      noDataText=''
      className='grid'
      focusedRowEnabled
      height='100%'
      keyExpr="id"
      dataSource={data}
      onRowClick={onRowClick}
      onExporting={onExporting}
      allowColumnReordering
      showBorders
    >
        <LoadPanel showPane={false} />
        <SearchPanel visible placeholder='Contact Search' />
        <ColumnChooser enabled />
        <Export enabled allowExportSelectedData formats={exportFormats} />
        <Selection
          selectAllMode='allPages'
          showCheckBoxesMode='always'
          mode='multiple'
        />
        <HeaderFilter visible />
        <Sorting mode='multiple' />
        <Scrolling mode='virtual' />
        <Toolbar>
          <Item location='before'>
            <div className='grid-header'>Contacts</div>
          </Item>
          <Item location='before' locateInMenu='auto'>
            <DropDownButton
              items={filterStatusList}
              stylingMode='text'
              text={status}
              dropDownOptions={dropDownOptions}
              useSelectMode
              onSelectionChanged={filterByStatus}
            />
          </Item>
          <Item location='after' locateInMenu='auto'>
            <Button
              icon='plus'
              text='Add Contact'
              type='default'
              stylingMode='contained'
              onClick={onAddContactClick}
            />
          </Item>
          <Item
            location='after'
            locateInMenu='auto'
            showText='inMenu'
            widget='dxButton'
          >
            <Button
              icon='refresh'
              text='Refresh'
              stylingMode='text'
              onClick={refresh}
            />
          </Item>
          <Item location='after' locateInMenu='auto'>
            <div className='separator' />
          </Item>
          <Item name='exportButton' />
          <Item location='after' locateInMenu='auto'>
            <div className='separator' />
          </Item>
          <Item name='columnChooserButton' locateInMenu='auto' />
          <Item name='searchPanel' locateInMenu='auto' />
        </Toolbar>
      {columns.map((column) => {
        return (
          <Column
            key={column?.dataField}
            dataField={column?.dataField}
            caption={column?.caption}
            dataType={column?.dataType}
            width={column?.width}
          />
        );
      })}
      </DataGrid>
  );
};

export default Table;
