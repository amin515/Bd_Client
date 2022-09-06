import React from 'react';
import './SiteModal.scss';
const SiteModal = () => {
return (
<div>

  <a href="#" data-bs-toggle="modal" data-bs-target="#viewModal">write a review</a>


  <div className="modal fade " id="viewModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Write a Review</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form action="#">
            <div className="my-3">
              <label htmlFor="Name">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="my-3">
              <label htmlFor="Email">Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="my-3">
              <label htmlFor="Details">Comment</label>
              <textarea name="" id="" cols="30" rows="10" className='form-control'></textarea>
            </div>
            <div className="my-3">
              <button type="submit" className="btn-submit w-100">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
)
}

export default SiteModal;