// import React, { useEffect, useRef } from "react";
// import OpenSeadragon from "openseadragon";

// const WSIViewer = ({ onViewerUpdate }) => {
//   const viewerRef = useRef(null);

//   useEffect(() => {
//     const viewerElement = document.getElementById("wsi-viewer");
//     if (!viewerElement) {
//       console.error("Element with id 'wsi-viewer' not found!");
//       return;
//     }

//     const viewer = OpenSeadragon({
//       id: "wsi-viewer",
//       prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/3.0.0/images/",
//       tileSources: {
//         type: "image",
//         url: "http://localhost:5000/images/img1.png",
//       },
//       maxZoomLevel: 10,
//       showNavigator: false,
//     });

//     let timeoutId;
//     const handleUpdate = () => {
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//       timeoutId = setTimeout(() => {
//         if (onViewerUpdate) {
//           onViewerUpdate(viewer.viewport.getBounds());
//         }
//       }, 100); // Debounce time: 100ms
//     };

//     // Add event listeners for zoom and pan
//     viewer.addHandler("zoom", handleUpdate);
//     viewer.addHandler("pan", handleUpdate);

//     viewerRef.current = viewer;

//     return () => {
//       if (viewerRef.current) {
//         viewerRef.current.destroy();
//       }
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//     };
//   }, [onViewerUpdate]);

//   return (
//     <div
//       id="wsi-viewer"
//       className="w-full h-full bg-black p-4 rounded-lg shadow-lg overflow-hidden"
//     ></div>
//   );
// };

// export default WSIViewer;






















import React, { useEffect, useRef, useState } from "react";
import OpenSeadragon from "openseadragon";

const WSIViewer = ({ onViewerUpdate }) => {
  const viewerRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null); // Dynamically set image URL
  const backendUrl = "https://wireframe-python-backend-1.onrender.com";

  // Function to check if the image exists
  const checkImageExistence = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => reject(false);
      img.src = url;
    });
  };

  useEffect(() => {
    const viewerElement = document.getElementById("wsi-viewer");
    if (!viewerElement) {
      console.error("Element with id 'wsi-viewer' not found!");
      return;
    }

    // Check if the backend image exists
    checkImageExistence(`${backendUrl}/images/img1.png`)
      .then(() => {
        setImageUrl(`${backendUrl}/images/img1.png`); // Set backend image URL if it exists
        initializeViewer(`${backendUrl}/images/img1.png`);
      })
      .catch(() => {
        setImageUrl("/img1.png"); // Fallback to local image if backend image is not available
        initializeViewer("/img1.png");
      });

    // Initialize OpenSeadragon viewer
    const initializeViewer = (url) => {
      const viewer = OpenSeadragon({
        id: "wsi-viewer",
        prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/3.0.0/images/",
        tileSources: {
          type: "image",
          url: url,
        },
        maxZoomLevel: 10,
        showNavigator: false,
      });

      let timeoutId;
      const handleUpdate = () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          if (onViewerUpdate) {
            onViewerUpdate(viewer.viewport.getBounds());
          }
        }, 100); // Debounce time: 100ms
      };

      // Add event listeners for zoom and pan
      viewer.addHandler("zoom", handleUpdate);
      viewer.addHandler("pan", handleUpdate);

      viewerRef.current = viewer;
    };

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [onViewerUpdate]);

  return (
    <div
      id="wsi-viewer"
      className="w-full h-full bg-black p-4 rounded-lg shadow-lg overflow-hidden"
    ></div>
  );
};

export default WSIViewer;
