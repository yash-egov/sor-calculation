// src/SORCalculation.js
import React, { useEffect, useState } from 'react';
import './styles.css';

const SORCalculator = () => {
  const [rows, setRows] = useState([{ sNo:0,description:'',quantity: '', rate: '', amount: 0 ,delete:'Delete'}]);
  const [searchString, setsearchString] = useState('');

  const addRow = () => {
    setRows([...rows, { SNo:0,description:'',quantity: '', rate: '', amount: 0 , delete:'Delete'}]);
  };

  const handleChange = (index, field, value) => {
    const newRows = rows.map((row, i) => {
      if (i === index) {
        const newRow = { ...row, [field]: value };
        newRow.amount = newRow.quantity * newRow.rate || 0;
        return newRow;
      }
      return row;
    });
    setRows(newRows);
  };

  const handleFilterChange = (e) => {
    setsearchString(e.target.value);
  };

 
  const filteredRows = rows.filter(row => {
    return row.description.toLowerCase().includes(searchString.toLowerCase())
  });

    let totalAmount = 0;
    filteredRows.forEach((item)=>totalAmount+=item.amount);

  const handleSubmit = () => {
    console.log(JSON.stringify(rows));
    
  };

  const handleDelete=(index)=>{
    console.log('DELETE CLICKED');
    const newRows = rows.filter((row, i) => {
        if (i !== index) {
          return row;
        }
      });
      setRows(newRows);
  }

  return (
    <div>
      <h1>SOR Calculation</h1>

      <div className='searchString'>
   
      <input
        type="text"
        placeholder="Filter"
        value={searchString}
        onChange={handleFilterChange}
      />
      </div>
      <table>
        <thead>
          <tr>
            <th>SNo.</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Amount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row, index) => (
            <tr key={index}>
                <td>
                <input
                  type="number"
                  value={row.sNo}
                  onChange={(e) => handleChange(index, 'sNo', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="String"
                  value={row.description}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.quantity}
                  onChange={(e) => handleChange(index, 'quantity', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.rate}
                  onChange={(e) => handleChange(index, 'rate', e.target.value)}
                />
              </td>
              <td>{row.amount}</td>
              <td>
                <button onClick={()=>handleDelete(index)} className='deleteButton'>Delete</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      <div className='buttons'>
        <button onClick={addRow}>Add Row</button>
        <div>Total Amount: {totalAmount}</div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default SORCalculator;
