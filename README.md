# CSV File Manager: A Simple Web Application

This document serves as a guide for setting up and running a simple web application designed to upload, list, and interact with CSV files. This project allows users to dynamically view CSV file content in a table format on the frontend, complete with functionalities such as searching, sorting, and pagination. Additionally, it includes an integration with a charting library for visualizing selected column data.

## System Requirements

- Node.js (version 14 or later)
- npm (Node Package Manager)
- A modern web browser

## Project Setup

Follow these steps to get the project up and running on your local system:

### 1. Clone the Repository

First, clone the project repository from GitHub or another version control system. Open your terminal, navigate to the directory where you want to clone the project, and run:

```
git clone <repository-url>
```

Replace `<repository-url>` with the actual URL of the project repository.

### 2. Install Dependencies

Navigate into the project directory:

```
cd csv-file-manager
```

Install the project dependencies by running:

```
npm install
```

This command reads the `package.json` file and installs all the required npm packages for the project.

### 3. Start the Server

Once the dependencies are installed, you can start the server by running:

```
npm start
```

This command starts the local server, usually on port 3000, unless configured otherwise.

### 4. Access the Application

Open a web browser and go to `http://localhost:3000` to access the application. You should see the homepage of the CSV File Manager application.

## Features and Usage

### Uploading CSV Files

- On the homepage, there's an option to upload CSV files. Click the upload button and select a CSV file from your system.
- Only files with the `.csv` extension are allowed. An error message will display if you attempt to upload a different file type.

### Viewing Uploaded Files

- After uploading, the application will redirect you to a list of all uploaded CSV files.
- Click on any file in the list to view its contents.

### Viewing and Interacting with CSV Data

- The selected CSV file's data will be displayed in a table format. Column headers are dynamically generated based on the CSV file's content.
- A search box allows you to search for specific data within the table. The search functionality is implemented on one of the columns (you can configure which one).
- Sorting functionality is available for each column. You can sort the data in ascending or descending order.
- Pagination is implemented to limit the display to 100 records per page, enhancing performance for large CSV files.

### Data Visualization

- Below the table, you can select a column to visualize its data using a chart. This feature integrates a charting library such as Google Charts or D3.js.
- Select the column and the chart type to see the visualization.

## Conclusion

This README provides a comprehensive guide to setting up and using the CSV File Manager application. By following the steps outlined above, you can quickly get the application running on your local system and begin managing CSV files with ease.
