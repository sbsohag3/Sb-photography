import React from "react";

const CheckOut = () => {
  return (
    <div className="register">
      <h2>Please Fill-Up The Form</h2>
      <div className="register-form shadow border">
        <form>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Email"
            required
          />
          <input type="number" name="Phone" id=""placeholder="Phone Number"/>
          <input type="text" name="address" id="" placeholder="Your Address"/>

          <input
            className="btn btn-primary mt-2"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
