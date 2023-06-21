import React from "react";

const TotalResults = ({ total, shown }) => {
  return (
    <div className="alert alert-info">
      Showing {shown} of {total} results
    </div>
  );
};

export default TotalResults;
