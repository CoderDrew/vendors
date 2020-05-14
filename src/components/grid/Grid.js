import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      quickFilterText: null,
      columnDefs: [
        {
          headerName: 'Date',
          field: 'check_dt',
        },
        {
          headerName: 'Type',
          field: 'type',
          cellRenderer: 'boldRenderer',
        },
        {
          headerName: 'Total',
          field: 'check_amount',
        },
        {
          headerName: 'Line Amount',
          field: 'line_amount',
        },
        {
          headerName: 'Vendor Name',
          field: 'vendor',
        },
        {
          headerName: 'Invoice',
          field: 'vendor_invoice_no',
        },
        {
          headerName: 'Agency',
          field: 'agency_wolfs_id',
        },
        {
          headerName: 'Description',
          field: 'agency',
        },
        {
          headerName: 'Contact',
          field: 'agency_desc',
        },
        {
          headerName: 'Document',
          field: 'reference_doc_id',
        },
      ],
      defaultColDef: {
        resizable: true,
        sortable: true,
        filter: true,
        unSortIcon: true,
      },
      paginationPageSize: 100,
    };
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  };

  onQuickFilterText = (event) => {
    this.setState({ quickFilterText: event.target.value });
  };

  componentDidMount() {
    fetch(`../vendor.json`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((rowData) => this.setState({ rowData }));
  }

  render() {
    return (
      <div>
        <div style={{ display: 'inline-block', width: '100%', marginTop: 10, marginBottom: 10 }}>
          <div className='input-group' style={{ width: '30%', float: 'left' }}>
            <input type='text' id='quickFilter' className='form-control bg-light border-0 small search' onChange={this.onQuickFilterText} placeholder='Type text to filter...' />
          </div>
          <button className='btn btn-primary btn-sm' style={{ float: 'right', marginRight: '10px' }}>
            Download CSV <i class='fas fa-download'></i>
          </button>
        </div>

        <div
          className='ag-theme-balham'
          style={{
            height: '700px',
            width: '100%',
          }}
        >
          <AgGridReact
            quickFilterText={this.state.quickFilterText}
            paginationPageSize={this.state.paginationPageSize}
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            onGridReady={this.onGridReady.bind(this)}
            defaultColDef={this.state.defaultColDef}
            pagination={true}
          ></AgGridReact>
        </div>
      </div>
    );
  }
}

export default Grid;
