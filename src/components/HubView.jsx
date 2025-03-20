// import React, { useEffect, useRef, useState } from "react";
// import OpenSeadragon from "openseadragon";

// const HubView = ({ bounds }) => {
//   const viewerRef = useRef(null);
//   const [isFullScreen, setIsFullScreen] = useState(false);

//   // Initialize OpenSeadragon
//   const initializeViewer = () => {
//     const viewerElement = document.getElementById("hub-view");
//     if (!viewerElement) {
//       console.error("Element with id 'hub-view' not found!");
//       return;
//     }

//     const viewer = OpenSeadragon({
//       id: "hub-view",
//       prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/3.0.0/images/",
//       tileSources: {
//         type: "image",
//         url: "http://localhost:5000/images/img1.png",
//       },
//       maxZoomLevel: 10, // Same as WSIViewer
//       showNavigator: true,
//       gestureSettingsMouse: {
//         scrollToZoom: true, // Enable mouse scroll to zoom
//       },
//     });

//     viewerRef.current = viewer;
//   };

//   // Destroy OpenSeadragon
//   const destroyViewer = () => {
//     if (viewerRef.current) {
//       viewerRef.current.destroy();
//       viewerRef.current = null;
//     }
//   };

//   // Handle full screen toggle
//   const toggleFullScreen = () => {
//     const viewerElement = document.getElementById("hub-view");
//     if (!viewerElement) return;

//     if (!isFullScreen) {
//       // Enter full screen mode
//       if (viewerElement.requestFullscreen) {
//         viewerElement.requestFullscreen();
//       } else if (viewerElement.mozRequestFullScreen) {
//         viewerElement.mozRequestFullScreen();
//       } else if (viewerElement.webkitRequestFullscreen) {
//         viewerElement.webkitRequestFullscreen();
//       } else if (viewerElement.msRequestFullscreen) {
//         viewerElement.msRequestFullscreen();
//       }
//     } else {
//       // Exit full screen mode
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       } else if (document.mozCancelFullScreen) {
//         document.mozCancelFullScreen();
//       } else if (document.webkitExitFullscreen) {
//         document.webkitExitFullscreen();
//       } else if (document.msExitFullscreen) {
//         document.msExitFullscreen();
//       }
//     }

//     setIsFullScreen(!isFullScreen);
//   };

//   // Reinitialize OpenSeadragon on full screen change
//   useEffect(() => {
//     const handleFullScreenChange = () => {
//       const isCurrentlyFullScreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
//       setIsFullScreen(!!isCurrentlyFullScreen);

//       // Reinitialize OpenSeadragon
//       destroyViewer();
//       initializeViewer();
//     };

//     document.addEventListener("fullscreenchange", handleFullScreenChange);
//     document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
//     document.addEventListener("mozfullscreenchange", handleFullScreenChange);
//     document.addEventListener("msfullscreenchange", handleFullScreenChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", handleFullScreenChange);
//       document.removeEventListener("webkitfullscreenchange", handleFullScreenChange);
//       document.removeEventListener("mozfullscreenchange", handleFullScreenChange);
//       document.removeEventListener("msfullscreenchange", handleFullScreenChange);
//     };
//   }, []);

//   // Initialize OpenSeadragon on mount
//   useEffect(() => {
//     initializeViewer();

//     return () => {
//       destroyViewer();
//     };
//   }, []);

//   // Update HubView based on bounds from WSIViewer
//   useEffect(() => {
//     if (viewerRef.current && bounds) {
//       const viewport = viewerRef.current.viewport;
//       viewport.fitBounds(bounds, true); // Use `true` to avoid animation
//     }
//   }, [bounds]);

//   return (
//     <div
//       id="hub-view"
//       className={`w-64 h-48 border border-gray-300 shadow-md rounded-lg bg-white p-4 ${
//         isFullScreen ? "fixed inset-0 z-50 w-screen h-screen" : ""
//       }`}
//     >
//       {/* Full screen toggle button */}
//       <button
//         onClick={toggleFullScreen}
//         className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full shadow-lg"
//       >
//         {isFullScreen ? "Exit Full Screen" : "Full Screen"}
//       </button>
//     </div>
//   );
// };

// export default HubView;



















import React, { useEffect, useRef, useState } from "react";
import OpenSeadragon from "openseadragon";

const HubView = ({ bounds }) => {
  const viewerRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
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

  // Initialize OpenSeadragon
  const initializeViewer = () => {
    const viewerElement = document.getElementById("hub-view");
    if (!viewerElement) {
      console.error("Element with id 'hub-view' not found!");
      return;
    }

    const viewer = OpenSeadragon({
      id: "hub-view",
      prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/3.0.0/images/",
      tileSources: {
        type: "image",
        url: imageUrl || "/img1.png", // Use either the backend or fallback URL
      },
      maxZoomLevel: 10, // Same as WSIViewer
      showNavigator: true,
      gestureSettingsMouse: {
        scrollToZoom: true, // Enable mouse scroll to zoom
      },
    });

    viewerRef.current = viewer;
  };

  // Destroy OpenSeadragon
  const destroyViewer = () => {
    if (viewerRef.current) {
      viewerRef.current.destroy();
      viewerRef.current = null;
    }
  };

  // Handle full screen toggle
  const toggleFullScreen = () => {
    const viewerElement = document.getElementById("hub-view");
    if (!viewerElement) return;

    if (!isFullScreen) {
      // Enter full screen mode
      if (viewerElement.requestFullscreen) {
        viewerElement.requestFullscreen();
      } else if (viewerElement.mozRequestFullScreen) {
        viewerElement.mozRequestFullScreen();
      } else if (viewerElement.webkitRequestFullscreen) {
        viewerElement.webkitRequestFullscreen();
      } else if (viewerElement.msRequestFullscreen) {
        viewerElement.msRequestFullscreen();
      }
    } else {
      // Exit full screen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullScreen(!isFullScreen);
  };

  // Reinitialize OpenSeadragon on full screen change
  useEffect(() => {
    const handleFullScreenChange = () => {
      const isCurrentlyFullScreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      setIsFullScreen(!!isCurrentlyFullScreen);

      // Reinitialize OpenSeadragon
      destroyViewer();
      initializeViewer();
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("msfullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullScreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullScreenChange);
      document.removeEventListener("msfullscreenchange", handleFullScreenChange);
    };
  }, []);

  // Initialize OpenSeadragon on mount and check the image URL
  useEffect(() => {
    checkImageExistence(`${backendUrl}/images/img1.png`)
      .then(() => {
        setImageUrl(`${backendUrl}/images/img1.png`); // Set backend image URL if exists
        initializeViewer();
      })
      .catch(() => {
        setImageUrl("/img1.png"); // Fallback to local image if backend image is not available
        initializeViewer();
      });

    return () => {
      destroyViewer();
    };
  }, []);

  // Update HubView based on bounds from WSIViewer
  useEffect(() => {
    if (viewerRef.current && bounds) {
      const viewport = viewerRef.current.viewport;
      viewport.fitBounds(bounds, true); // Use `true` to avoid animation
    }
  }, [bounds]);

  return (
    <div
      id="hub-view"
      className={`w-64 h-48 border border-gray-300 shadow-md rounded-lg bg-white p-4 ${
        isFullScreen ? "fixed inset-0 z-50 w-screen h-screen" : ""
      }`}
    >
      {/* Full screen toggle button */}
      <button
        onClick={toggleFullScreen}
        className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full shadow-lg"
      >
        {isFullScreen ? "Exit Full Screen" : "Full Screen"}
      </button>
    </div>
  );
};

export default HubView;
