import React, { useState } from "react";
import "../../css/MyProfile.css"; 

const MyProfile = () => {
  const [username, setUsername] = useState("Uživatel123");
  const [bio, setBio] = useState("Tady můžete napsat něco o sobě...");
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="MyProfile-Container">
      <h1 className="MyProfile-Title">Můj Profil</h1>
      <div className="MyProfile-Underline"></div>

      
      <div className="MyProfile-ImageContainer">
        <label htmlFor="profile-pic" className="MyProfile-ImageLabel">
          <div className="MyProfile-ImageWrapper">
            {image ? (
              <img src={image} alt="Profilová fotka" className="MyProfile-Image" />
            ) : (
              <span className="MyProfile-Placeholder">Vyberte fotku</span>
            )}
          </div>
        </label>
        <input type="file" id="profile-pic" className="MyProfile-FileInput" onChange={handleImageChange} />
      </div>

      
      <div className="MyProfile-Field">
        <label className="MyProfile-Label">Uživatelské jméno:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="MyProfile-Input"
        />
      </div>

     
      <div className="MyProfile-Field">
        <label className="MyProfile-Label">Bio:</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="MyProfile-Textarea"
          rows="4"
        ></textarea>
      </div>

      
      <button className="MyProfile-Button">Uložit změny</button>
    </div>
  );
};

export default MyProfile;
