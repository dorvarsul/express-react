import React from "react";

const DataTable = ({ data, onDelete, onEdit }) => {
  if (!data.length) return <p>No records found.</p>;

  const headers = Object.keys(data[0]);

  return (
    <table className="min-w-full border border-gray-400 border-collapse">
      <thead className="bg-gray-100">
        <tr>
          {headers.map((h) => (
            <th key={h} className="px-4 py-2 text-left border border-gray-400">
              {h}
            </th>
          ))}
          <th className="px-4 py-2 border border-gray-400">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="hover:bg-gray-50">
            {headers.map((h) => (
              <td key={h} className="px-3 py-2 border border-gray-400">
                {row[h]}
              </td>
            ))}
            <td className="px-3 py-2 border border-gray-400">
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
