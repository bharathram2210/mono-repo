import { RouterProvider } from 'react-router-dom';
import routes from './routes/route';
import { useState } from 'react';
import { AlertProp, AuthUser } from './context/context-type';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './assets/theme/theme.ts';
import { Context } from './context/context.ts';

const App = () => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [alert, setAlert] = useState<AlertProp | null>({
        open: false,
        message: '',
        severity: 'warning',
    });

    return (
        <Context.Provider value={{ user, setUser, alert, setAlert }}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={routes} />
            </ThemeProvider>
        </Context.Provider>
    );
};

export default App;

// // i will use like this
// // -----------------------------------------------
// // const context = useContext(Context);
// // const { alert } = context as ContextTypes;


// import React, { useEffect, useState } from "react";
// import {
//     ComposableMap,
//     Geographies,
//     Geography,
// } from "react-simple-maps";


// // Example enrollment data (you can update this dynamically)
// const enrollmentData: Record<string, number> = {
//     Hyderabad: 95,
//     Warangal: 88,
//     Nizamabad: 72,
//     Karimnagar: 68,
//     // Add other districts...
// };

// // Get color based on enrollment %
// const getColor = (value: number): string => {
//     if (value >= 90) return "#4A90E2";   // Blue
//     if (value >= 80) return "#50E3C2";   // Green
//     if (value >= 70) return "#F5A623";   // Yellow
//     return "#D0021B";                    // Red
// };

// type GeoFeatureCollection = {
//     type: string;
//     features: any[];
//   };
  
// const App: React.FC = () => {
//     const [geoData, setGeoData] = useState<GeoFeatureCollection | null>(null);

//     useEffect(() => {
//         fetch("/districts.geojson")
//             .then((response) => response.json())
//             .then((data) => setGeoData(data))
//             .catch((err) => console.error("Failed to load geojson", err));
//     }, []);
//     return (

//         <ComposableMap projection="geoMercator" width={800} height={600}>

//             <Geographies geography={geoData}>
//                 {({ geographies }: { geographies: any[] }) =>
//                     geographies.map((geo) => {
//                         const districtName: string =
//                             geo.properties?.district || geo.properties?.DISTRICT || "Unknown";
//                         const value = enrollmentData[districtName] || 0;
//                         return (
//                             <Geography
//                                 key={geo.rsmKey}
//                                 geography={geo}
//                                 fill={getColor(value)}
//                                 stroke="#FFFFFF"
//                                 style={{
//                                     default: { outline: "none" },
//                                     hover: { fill: "#999", outline: "none" },
//                                     pressed: { outline: "none" },
//                                 }}
//                             />
//                         );
//                     })
//                 }
//             </Geographies>
//         </ComposableMap>
//     );
// };

// export default App;
