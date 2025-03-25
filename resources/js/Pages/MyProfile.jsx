import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/MyProfile.css"; 
import "../../css/app.css";

const MyProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(null);
  const [profilePicture, setProfilePicture] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("/api/user").then((response) => {
      setFirstName(response.data.first_name || "");
      setLastName(response.data.last_name || "");
      setBio(response.data.bio || "");
      setProfilePicture(response.data.profile_picture || "");
    });
  }, []);


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(file);
      setProfilePicture(imageUrl);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("bio", bio);
    if (image) {
      formData.append("profile_picture", image);
    }
  
    try {
      await axios.post("/profile/update", formData, {
        headers: { 
          "Content-Type": "multipart/form-data",
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
        },
      });
      setMessage("Změny byly úspěšně uloženy!");
    } catch (error) {
      console.error(error);
      setMessage("Chyba při ukládání změn.");
    }
  };
  
  

  return (
    <div className="MyProfile-Container">
      <h1 className="MyProfile-Title">Můj Profil</h1>
      <div className="MyProfile-Underline"></div>

      {message && <p className="MyProfile-Message">{message}</p>}

      <div className="MyProfile-ImageContainer">
        <label htmlFor="profile-pic" className="MyProfile-ImageLabel">
          <div className="MyProfile-ImageWrapper">
            {profilePicture ? (
              <img src={profilePicture} alt="Profilová fotka" className="MyProfile-Image" />
            ) : (
              <span className="MyProfile-Placeholder">Vyberte fotku</span>
            )}
          </div>
        </label>
        <input type="file" id="profile-pic" className="MyProfile-FileInput" onChange={handleImageChange} />
      </div>

      <div className="MyProfile-Field">
        <label className="MyProfile-Label">Jméno:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="MyProfile-Input" />
      </div>

      <div className="MyProfile-Field">
        <label className="MyProfile-Label">Příjmení:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="MyProfile-Input" />
      </div>

      <div className="MyProfile-Field">
        <label className="MyProfile-Label">Bio:</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="MyProfile-Textarea" rows="4"></textarea>
      </div>

      <button className="MyProfile-Button" onClick={handleSubmit}>Uložit změny</button>
    </div>
  );
};

export default MyProfile;
