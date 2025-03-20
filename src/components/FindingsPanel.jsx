import React, { useEffect, useState } from "react";

const FindingsPanel = ({ onFindingClick }) => {
  const [findings, setFindings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const backendUrl = "https://wireframe-python-backend-1.onrender.com";

  useEffect(() => {
    fetch(`${backendUrl}/get_bounding_boxes`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch findings");
        }
        return response.json();
      })
      .then((data) => {
        setFindings(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-lg text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white shadow-xl p-6 overflow-y-auto h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Findings</h2>
      <div id="findings-details" className="text-gray-600">
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <img
              src="https://i.gifer.com/4V0b.gif"
              alt="Loading..."
              className="w-16 h-16 animate-pulse hover:scale-110 transition-all duration-500"
            />
          </div>
        ) : findings.length === 0 ? (
          <p>No findings available.</p>
        ) : (
          <div>
            {findings.map((box, index) => (
              <div
                key={index}
                className="mb-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-300"
                onClick={() => onFindingClick(box)} // Pass the finding data to parent
              >
                <p className="font-semibold">Finding {index + 1}</p>
                <p>Coordinates: ({box[0]}, {box[1]}) to ({box[2]}, {box[3]})</p>
                <p>Type: {box[4]}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindingsPanel;
