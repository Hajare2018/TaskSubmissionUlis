import React, { useState } from "react";
import axios from "axios";

function GenrateQrData() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Encrypt personal information data
    const encryptedData = await axios.post("/api/encrypt", {
      name,
      email,
      phone,
    });

    // Generate QR code from encrypted data
    const qrCodeData = await axios.post("/api/qrcode", { encryptedData });

    // Display QR code image to user
    // ...
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GenrateQrData;
