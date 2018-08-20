import React from 'react';
import { Link } from 'react-router-dom';

const CreateRequest = () => (
  <div className="form-wrapper request-wrapper">
    <h3 className="form-title">Create new request</h3>
    <form id="createRequest" method="post">
      <div className="input-group">
        <input type="text" id="dept" name="dept" placeholder="Enter the department" />
        <span id="error-dept" className="error" />
        <br />
        <textarea
          rows="5"
          id="request"
          name="request"
          placeholder="Write the details of the request"
        />
        <span id="error-request" className="error" />
      </div>
      <div>
        <a className="left btn btn-default" href="user.html"><i className="fa fa-arrow-left" /> Back</a>
      </div>
      <div>
        <button type="submit" className="right btn btn-default" name="submit"><i className="fa fa-plus" /> Create
        </button>
      </div>
      <div className="clearfix" />
    </form>
  </div>
);

export default CreateRequest;
