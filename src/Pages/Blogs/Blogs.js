import React from 'react';

const Blogs = () => {
  return (
    <div className="container  mt-4 d-flex ">
      <div className="border me-4 p-4">
        <h4> Difference between authorization and authentication</h4>
        <p>
          Authentication is a process to check if a user is allowed to access
          information or perform a task. If a certified user uses your app, they
          have identified their true identity in a variety of ways, such as
          issuing the correct certificate. <br />
          Authentication will help you find out the true identity of a user, it
          cannot help you control access, which is why we use authentication
          with authentication.
        </p>
      </div>
      <div className="border p-4">
        <h4>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <p>
          Firebase is a set of tools offered by Google to create excellent
          scalable applications in the cloud. It is a powerful service that
          helps you build applications quickly without having to redesign
          components or modules. <br />
          Authentication by a server entails the use of a user name and
          password. Other ways to authenticate can be through cards, retina
          scans, voice recognition, and fingerprints.
        </p>
      </div>
    </div>
  );
};

export default Blogs;