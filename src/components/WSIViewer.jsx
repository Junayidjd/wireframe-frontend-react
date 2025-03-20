import React, { useEffect, useRef } from "react";
import OpenSeadragon from "openseadragon";

const WSIViewer = ({ onViewerUpdate }) => {
  const viewerRef = useRef(null);
  const timeoutIdRef = useRef(null); // Use useRef for timeoutId

  useEffect(() => {
    const viewerElement = document.getElementById("wsi-viewer");
    if (!viewerElement) {
      console.error("Element with id 'wsi-viewer' not found!");
      return;
    }

    const viewer = OpenSeadragon({
      id: "wsi-viewer",
      prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/3.0.0/images/",
      tileSources: {
        type: "image",
        url: "/img1.png", // Use local image as fallback
      },
      maxZoomLevel: 10,
      showNavigator: false,
    });

    const handleUpdate = () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      timeoutIdRef.current = setTimeout(() => {
        if (onViewerUpdate) {
          onViewerUpdate(viewer.viewport.getBounds());
        }
      }, 100); // Debounce time: 100ms
    };

    // Add event listeners for zoom and pan
    viewer.addHandler("zoom", handleUpdate);
    viewer.addHandler("pan", handleUpdate);

    viewerRef.current = viewer;

    // Cleanup function
    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
      }
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
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