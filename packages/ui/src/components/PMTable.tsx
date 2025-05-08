import React, { useEffect, useState } from 'react';
import { Table, FormControl, InputGroup, Pagination } from 'react-bootstrap';
import { TableProps } from '../models/component';

const PMTable: React.FC<TableProps> = ({ headers, data }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchedData, setSearchedData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortColumn, setSortColumn] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none');

  useEffect(() => {
    let result: any;

    if (searchTerm.trim() === '') {
      result = data;
    } else {
      result = data.filter((sensor: any) =>
        Object.values(sensor).some((value: any) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    setSearchedData(result);
  }, [searchTerm, data]);

  useEffect(() => {
    let result: any;

    if (sortOrder === 'asc') {
      result = [...searchedData].sort((a, b) => a[sortColumn].localeCompare(b[sortColumn]));
    } else if (sortOrder === 'desc') {
      result = [...searchedData].sort((a, b) => b[sortColumn].localeCompare(a[sortColumn]));
    } else {
      result = data;
    }

    setSearchedData(result);
  }, [sortColumn, sortOrder]);

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(searchedData.length / itemsPerPage);

  const pageItems = [];
  for (let number = 1; number <= totalPages; number++) {
    pageItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => paginate(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSort = (headerValue: string) => {
    if (sortOrder === 'none') {
      setSortOrder('asc');
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
    } else {
      setSortOrder('none');
    }

    setSortColumn(headerValue);
  };

  const getSortIcon = (): any => {
    if (sortOrder === 'asc') {
      return ('  ↑');
    } else if (sortOrder === 'desc') {
      return ('  ↓');
    } else {
      return ('');
    }
  }

  return (
    <div>
      <div className='d-flex justify-content-end'>
        <InputGroup style={{ maxWidth: '250px' }}>
          <InputGroup.Text>
            <i className='fas fa-search'></i>
          </InputGroup.Text>
          <FormControl
            placeholder='Pesquisar...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </div>
      <Table hover className='mt-3'>
        <thead>
          <tr className='table-active'>
            {headers.map((header, index) => (
              <th key={index} onClick={() => handleSort(header.value)}>
                <span>{header.label}</span>
                {sortColumn === header.value &&
                  <span>{getSortIcon()}</span>
                }
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              {Object.keys(item).map((key) => (
                <td key={key}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <div className='d-flex justify-content-center custom-pagination'>
        <Pagination>{pageItems}</Pagination>
      </div>
    </div>
  );
};

export default PMTable;