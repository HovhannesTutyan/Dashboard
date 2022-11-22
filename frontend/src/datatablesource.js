export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 80,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "description",
      headerName: "Description",
      width: 200,
    },
    {
      field: "reproduction_steps",
      headerName: "reproduction_steps",
      width: 200,
    },
    {
      field: "expected_results",
      headerName: "expected_results",
      width: 200,
    },
    {
      field: "actual_results",
      headerName: "actual_results",
      width: 200,
    },
    {
      field: "comments",
      headerName: "comments",
      width: 200,
    },
    {
      field: "environment",
      headerName: "environment",
      width: 200,
    },
    {
      field: "test_suit",
      headerName: "test_suit",
      width: 200,
    },
  ];
  