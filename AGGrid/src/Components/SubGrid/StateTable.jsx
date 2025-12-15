function StateTable({ state }) {
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '16px'
      }}
    >
      <thead>
        <tr>
          <th style={th}>Key</th>
          <th style={th}>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(state).map(([key, value]) => (
          <tr key={key}>
            <td style={td}>{key}</td>
            <td style={td}>
              {typeof value === 'object' && value !== null
                ? JSON.stringify(value)
                : String(value)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const th = {
  border: '1px solid #ccc',
  padding: '8px',
  background: '#f0f0f0',
  textAlign: 'left'
};

const td = {
  border: '1px solid #ccc',
  padding: '8px',
  verticalAlign: 'top'
};
export default StateTable;