import React from "react";

const Body = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center">
          <h2 className="mb-4">Download Instagram Reels</h2>
          <p className="mb-4">
            Download any public Instagram post, reel, igtv, story. Paste your
            link below and click on download button.
          </p>
          <form className="row justify-content-center">
            <div className="col-auto">
              <label htmlFor="link" className="visually-hidden" />
              <input
                type="text"
                className="form-control"
                id="link"
                placeholder="Paste link here .."
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-secondary mb-3">
                Download
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Body;
