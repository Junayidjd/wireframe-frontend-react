# Whole Slide Image (WSI) Viewer - React Assignment

This project is a Whole Slide Image (WSI) Viewer built using React and OpenSeadragon. It allows users to view high-resolution medical images, zoom in/out, and interact with bounding boxes for findings.

## Features

- **WSI Viewer**: Zoom and pan functionality.
- **Hub View**: Zoomed-out view with full-screen mode.
- **Findings Panel**: Displays bounding boxes and findings.
- **Dynamic Image Loading**: Loads images from backend or falls back to local images.

## Technologies Used

- **Frontend**: React, OpenSeadragon, TailwindCSS, Vite.
- **Backend**: Flask, Flask-CORS.

## Setup and Installation

### Backend

1. Navigate to the backend folder:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3. Run the Flask server:

    ```bash
    python src/app.py
    ```

    The backend will run on [http://localhost:5000](http://localhost:5000).

### Frontend

1. Navigate to the frontend folder:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

    The frontend will run on [http://localhost:5173](http://localhost:5173).

## How to Use

- **WSI Viewer**: Use mouse scroll to zoom in/out and click-drag to pan.
- **Hub View**: Displays a zoomed-out view. Click "Full Screen" for full-screen mode.
- **Findings Panel**: Displays bounding boxes and findings. Click on a finding to view details.

## Backend API Endpoints

- **Get Bounding Boxes**:
    - Endpoint: `GET /get_bounding_boxes`
    - Response: Returns bounding boxes from `output.json`.

- **Serve Images**:
    - Endpoint: `GET /images/<filename>`
    - Response: Serves images from the `static/images` folder.

## Deployment

- **Backend**: Deploy on Render, Heroku, or Vercel.
- **Frontend**: Deploy on Vercel, Netlify, or GitHub Pages.

## Screenshots

- **WSI Viewer**:
  ![WSI Viewer](path/to/wsi-viewer-screenshot.png)

- **Hub View**:
  ![Hub View](path/to/hub-view-screenshot.png)

- **Findings Panel**:
  ![Findings Panel](path/to/findings-panel-screenshot.png)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any questions or feedback, feel free to reach out:

- **Name**: [Your Name]
- **Email**: [Your Email]
- **GitHub**: [Your GitHub Profile]
