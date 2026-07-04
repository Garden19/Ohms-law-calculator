# Ohms Law Calculator

## Project Description
A full-stack Angular 20 and ASP.NET Core Web API Ohms Law calculator that checks whether a vape coil build is within the safe amp limit of the user's battery.

The frontend is built with Angular 20 and reactive forms. The backend is an ASP.NET Core Web API that provides a list of pre-configured battery options for the calculator.

## Features
- Calculates the required amps using voltage and coil resistance.
- Compares the required amps against the selected battery's amp rating.
- Includes a list of pre-configured battery settings from the backend API.
- Allows users to select a battery from a dropdown.
- Automatically fills the voltage and amp rating values when a pre-configured battery is selected.
- Displays a result message showing whether the build is safe or unsafe.
- Uses Angular reactive forms for form handling.
- Has a responsive layout for both desktop and mobile.

## Tech Stack

### Frontend
- Angular 20
- TypeScript
- HTML
- CSS
- Reactive Forms

### Backend
- ASP.NET Core Web API
- C#
- Minimal API endpoints

## How It Works
The calculator uses Ohms Law to work out the required amps for a coil build.

The calculation is:
```txt
Amps = Voltage / Resistance
```

The app then compares the required amps against the battery amp rating.

For example:
```txt
Voltage: 4.2V
Coil Resistance: 0.2Ω

Required Amps = 4.2 / 0.2
Required Amps = 21A
```

If the required amps are higher than the battery amp rating, the app displays an unsafe result.

## Project Structure

- Frontend > Angular 20 application
- Backend > ASP.NET Core web API

## How to Run the Project

Both the frontend and backend need to be running for the battery selector to load data from the API.

### Run the Frontend

From the `frontend` folder:

```bash
npm install
npm start
```

The Angular app will usually run on:

```txt
http://localhost:4200
```

### Run the Backend

From the `backend` folder:

```bash
dotnet run
```

The API will usually run on a localhost port such as:

```txt
http://localhost:5044
```

The battery endpoint is:

```txt
GET /batteries
```

## API Endpoints

### Get Batteries

```txt
GET /batteries
```

Returns a list of pre-configured batteries.

Example response:

```json
[
  {
    "id": 1,
    "brand": "Sony",
    "model": "VTC6",
    "voltage": 4.2,
    "ampRating": 15
  },
  {
    "id": 2,
    "brand": "Sony",
    "model": "VTC5",
    "voltage": 4.2,
    "ampRating": 20
  }
]
```

## Purpose of This Project
I created this project to practise full-stack development using Angular and ASP.NET Core.

I am a vaper and previously used mechanical mods. For those unfamiliar, a mechanical mod is a vape device without built-in circuitry or safety features. This means the battery has a direct connection to the coil, so it is important to calculate the required amps before using a build.

This project has allowed me to practise:
- Angular reactive forms
- TypeScript interfaces
- Component communication
- Angular services
- HTTP requests with `HttpClient`
- ASP.NET Core Web API endpoints
- Connecting an Angular frontend to a .NET backend
- Working with API data in a frontend application

## Safety Note
This calculator is for educational and practice purposes only.

Battery safety is important. Users should always check reliable battery safety information and manufacturer guidance before using mechanical mods or low-resistance coil builds.

## Screenshots
### Desktop
<img width="1872" height="912" alt="image" src="https://github.com/user-attachments/assets/3d00b3bd-9339-4f2b-8250-258bdfbc6613" />
<img width="1841" height="908" alt="image" src="https://github.com/user-attachments/assets/1f265ffd-638f-4978-aa86-44c22b2dba79" />

### Mobile
<img width="582" height="911" alt="image" src="https://github.com/user-attachments/assets/9d553252-0a9a-4113-bf3f-64c5a6814f50" />
<img width="575" height="911" alt="image" src="https://github.com/user-attachments/assets/f3dfd8a4-6911-4708-b09a-11cdbc4a2564" />


## Future Improvements
- Add a database so users can save their own batteries.
- Allow saved batteries to appear in the pre-configured battery list.
- Add more batteries using trusted battery ratings.
- Improve the result display by showing:
  - Required amps
  - Battery amp limit
  - Safety result
- Add stronger validation to prevent invalid values such as zero resistance.
- Add error handling for when the backend API is unavailable.
- Improve the UI styling and form layout.
- Add unit tests for the calculation logic.
