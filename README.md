Whole Slide Image (WSI) Viewer - React Assignment
This project is a Whole Slide Image (WSI) Viewer built using React and OpenSeadragon. It allows users to view high-resolution medical images, zoom in/out, and interact with bounding boxes for findings. The project is designed to mimic the functionality of the Scopio Labs website and fulfills the requirements of the React assignment.

Features
WSI Viewer:

Zoom and pan functionality using OpenSeadragon.

Supports high-resolution images.

Hub View:

Displays a zoomed-out view of the WSI.

Full-screen mode support.

Findings Panel:

Displays bounding boxes and findings from output.json.

Interactive bounding boxes with coordinates and type.

Dynamic Image Loading:

Loads images from the backend (if available) or falls back to local images.

Responsive Design:

Works on both desktop and mobile devices.

Technologies Used
Frontend:

React

OpenSeadragon (for WSI viewer)

TailwindCSS (for styling)

Vite (for build tool)

Backend:

Flask (Python)

Flask-CORS (for handling CORS)

File Structure
Copy
├── backend/
│   ├── src/
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   ├── app.py
│   ├── static/
│   │   └── images/
│   │       └── img1.png
│   ├── output.json
│   ├── requirements.txt
│   ├── README.md
│
├── frontend/
│   ├── public/
│   │   └── img1.png
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── WSIViewer.jsx
│   │   │   ├── HubView.jsx
│   │   │   ├── FindingsPanel.jsx
│   │   │   ├── ImageSelector.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── App.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── README.md
Setup and Installation
Backend Setup
Navigate to the backend folder:

bash
Copy
cd backend
Install dependencies:

bash
Copy
pip install -r requirements.txt
Run the Flask server:

bash
Copy
python src/app.py
The backend will run on http://localhost:5000.

Frontend Setup
Navigate to the frontend folder:

bash
Copy
cd frontend
Install dependencies:

bash
Copy
npm install
Run the development server:

bash
Copy
npm run dev
The frontend will run on http://localhost:5173.

How to Use
WSI Viewer:

Use the mouse scroll to zoom in/out.

Click and drag to pan the image.

Hub View:

Displays a zoomed-out view of the WSI.

Click the "Full Screen" button to enter full-screen mode.

Findings Panel:

Displays bounding boxes and findings.

Click on a finding to view its details.

Dynamic Image Loading:

If the backend image is not available, the app will fall back to the local image (/img1.png).

Backend API Endpoints
Get Bounding Boxes:

Endpoint: GET /get_bounding_boxes

Response: Returns bounding boxes from output.json.

Serve Images:

Endpoint: GET /images/<filename>

Response: Serves images from the static/images folder.

Deployment
Backend Deployment
Deploy the Flask backend on platforms like Render, Heroku, or Vercel.

Frontend Deployment
Deploy the React frontend on platforms like Vercel, Netlify, or GitHub Pages.

Screenshots
WSI Viewer:
WSI Viewer

Hub View:
Hub View

Findings Panel:
Findings Panel

Contributing
If you'd like to contribute to this project, please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeatureName).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/YourFeatureName).

Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Scopio Labs for inspiration.

OpenSeadragon for the WSI viewer functionality.

React and Flask communities for their amazing libraries and tools.

Contact
For any questions or feedback, feel free to reach out:

Name: [Your Name]

Email: [Your Email]

GitHub: [Your GitHub Profile]
