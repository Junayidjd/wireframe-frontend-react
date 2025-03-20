// import React, { useState, useCallback } from "react";
// import WSIViewer from "./components/WSIViewer";
// import HubView from "./components/HubView";
// import FindingsPanel from "./components/FindingsPanel";

// function App() {
//   const [isFindingsOpen, setIsFindingsOpen] = useState(true);
//   const [viewerBounds, setViewerBounds] = useState(null);

//   const handleViewerUpdate = useCallback((bounds) => {
//     setViewerBounds(bounds);
//   }, []);

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Findings Panel - It can be toggled open/close */}
//       <div
//         className={`transition-all ease-in-out ${
//           isFindingsOpen ? "w-80" : "w-0"
//         } bg-white shadow-xl p-6 overflow-y-auto duration-300`}
//       >
//         <FindingsPanel />
//       </div>

//       {/* Main Viewer Section */}
//       <div className="flex-1 flex flex-col overflow-hidden relative">
//         {/* WSI Viewer */}
//         <div className="flex-1 w-full bg-black p-4 rounded-lg shadow-lg overflow-hidden">
//           <WSIViewer onViewerUpdate={handleViewerUpdate} />
//         </div>

//         {/* Hub View */}
//         <div className="absolute bottom-4 right-4">
//           <HubView bounds={viewerBounds} />
//         </div>

//         {/* Floating button to toggle Findings Panel */}
//         <button
//           onClick={() => setIsFindingsOpen(!isFindingsOpen)}
//           className="fixed bottom-8 left-8 bg-blue-500 text-white p-3 rounded-full shadow-lg"
//         >
//           {isFindingsOpen ? "Close Panel" : "Open Panel"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;








import React, { useState, useCallback } from "react";
import WSIViewer from "./components/WSIViewer";
import HubView from "./components/HubView";
import FindingsPanel from "./components/FindingsPanel";

function App() {
  const [isFindingsOpen, setIsFindingsOpen] = useState(true);
  const [viewerBounds, setViewerBounds] = useState(null);

  const handleViewerUpdate = useCallback((bounds) => {
    setViewerBounds(bounds);
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Findings Panel - It can be toggled open/close */}
      <div
        className={`transition-all ease-in-out ${
          isFindingsOpen ? "w-80" : "w-0"
        } bg-white shadow-xl p-6 overflow-y-auto duration-300`}
      >
        <FindingsPanel />
      </div>

      {/* Main Viewer Section */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* WSI Viewer */}
        <div className="flex-1 w-full bg-black p-4 rounded-lg shadow-lg overflow-hidden">
          <WSIViewer onViewerUpdate={handleViewerUpdate} />
        </div>

        {/* Hub View */}
        <div className="absolute bottom-4 right-4">
          <HubView bounds={viewerBounds} />
        </div>

        {/* Floating button to toggle Findings Panel */}
        <button
          onClick={() => setIsFindingsOpen(!isFindingsOpen)}
          className="fixed bottom-8 left-8 bg-blue-500 text-white p-3 rounded-full shadow-lg"
        >
          {isFindingsOpen ? "Close Panel" : "Open Panel"}
        </button>
      </div>
    </div>
  );
}

export default App;