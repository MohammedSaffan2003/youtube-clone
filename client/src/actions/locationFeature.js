// LocationFeature.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const LocationFeature = () => {
//   const [userLocation, setUserLocation] = useState('');
//   const [showLocation, setShowLocation] = useState(false);

//   const handleClick = () => {
//     axios.get('https://ipapi.co/json/')
//       .then(response => {
//         setUserLocation(response.data.city + ', ' + response.data.country_name);
//         setShowLocation(true);
//       })
//       .catch(error => {
//         console.error('Error fetching location:', error);
//       });
//   };

//   return (
//     <div>
//       <button className="comment_show_location_btn" onClick={handleClick}>Show User's Location</button>
//       {showLocation && <p>User's Location: {userLocation}</p>}
//     </div>
//   );
// };

// export default LocationFeature;


// Display the location without the button
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const LocationFeature = () => {
  const [userLocation, setUserLocation] = useState('');

  useEffect(() => {
    // Fetch user's location when the component mounts
    axios.get('https://ipapi.co/json/')
      .then(response => {
        setUserLocation(response.data.city + ', ' + response.data.country_name);
      })
      .catch(error => {
        console.error('Error fetching location:', error);
      });
  }, []);

  return (
    <div>
      <p>User's Location: {userLocation}</p>
    </div>
  );
};

export default LocationFeature;
