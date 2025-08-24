import React from "react";

const DataTable = ({ data, onDelete, onEdit }) => {
  if (!data.length) return <p>No records found.</p>; // show message if no rows

  const headers = Object.keys(data[0]); // extract column names from first row

  return (
    <table className="min-w-full border border-collapse">
      <thead className="bg-gray-100">
        <tr className="divide-x">
          {headers.map((h) => (
            <th key={h} className="px-3 py-2 text-left">
              {h}
            </th>
          ))}
          <th className="px-3 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="divide-x hover:bg-gray-50">
            {headers.map((h) => (
              <td key={h} className="px-3 py-2">
                {row[h]}
              </td>
            ))}
            <td className="px-3 py-2">
              <button
                onClick={() => onEdit(row)}
                className="mr-3 text-blue-600 hover:underline"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => onDelete(row.id)}
                className="text-red-600 hover:underline"
              >
                🗑 Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
