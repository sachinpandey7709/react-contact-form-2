/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Append API key
    formData.append("access_key", "dd27f20d-751e-4900-b1d4-1cc64219be19");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: data.message || "Something went wrong.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message.",
        icon: "error",
      });
    }
  };

  return (
    <div className="container">
      <div className="box">
        <header className="signup-header">
          <h1>JYOTI INDUSTRIES ONLINE ORDER FORM</h1>
        </header>
        <main className="signup-body">
          <form onSubmit={onSubmit}>
            <p>
            <label htmlFor="name">Shop Name</label>
              <input type="text" name="Shop name" placeholder="Shop Name" id="Shop name" required />
            </p>
            <p>
              <label htmlFor="name">Full Name</label>
              <input type="text" name="name" placeholder="Name" id="name" required />
            </p>
            <p>
              <label htmlFor="Email">Email</label>
              <input type="email" name="email" placeholder="Email" id="email" required />
            </p>
            <p>
              <label htmlFor="phone number">Phone Number</label>
              <input
                type="phone number"
                name="phone number"
                placeholder="Phone number"
                id="phone number"
                required
              />
            </p>
            <p>
            <label htmlFor="address">Address</label>
              <input
                type="address"
                name="address"
                placeholder="Address"
                id="address"
                required
              />
              </p>
              <p>
              <label htmlFor="city">City</label>
              <input
                type="city"
                name="city"
                placeholder="City"
                id="city"
                required
              />
              </p>
              <p>
              <label htmlFor="pincode">Pincode</label>
              <input
                type="pincode"
                name="pincode"
                placeholder="pincode"
                id="pincode"
                required
              />
              </p>
              <p>
              <label htmlFor="landmark">Landmark</label>
              <input
                type="landmark"
                name="landmark"
                placeholder="Landmark"
                id="landmark"
                required
              />
              </p>
              <p>
              <label htmlFor="product name">Product Name</label>
              <input
                type="product name"
                name="product name"
                placeholder="Product Name"
                id="product name"
                required
              />
              </p>
              <p>
              <label htmlFor="product quantity">Product Quantity</label>
              <input
                type="product quantity"
                name="product quantity"
                placeholder="Product Quantity"
                id="product quantity"
                required
              />
              </p>
              <p>
              <input type="submit" value="Submit" id="submitBtn" />
            </p>
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;