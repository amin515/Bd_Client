import React from 'react';
import './SiteCanvas.scss';
import chair from '../../assets/Images/chair.jpg';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const SiteCanvas = () => {
    const options = [
        
        {
          name: 'Enable body scrolling',
          scroll: true,
          backdrop: false,
        }
        
      ];
      
      function OffCanvasExample({ name, ...props }) {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const toggleShow = () => setShow((s) => !s);
      
        return (
          <>
            <Button variant="primary" onClick={toggleShow} className="me-2">
              {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
          </>
        );
      }
      
      function Example() {
        return (
          <>
            {options.map((props, idx) => (
              <OffCanvasExample key={idx} {...props} />
            ))}
          </>
        );
      }
      
}

export default SiteCanvas;

 {/* <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex=""
        id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Your Cart</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Size</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img style={{width : '50px', objectFit : 'cover'}} src={ chair } alt="" /></td>
                        <td>Chair</td>
                        <td> 2500 </td>
                        <td>M</td>
                        <td>1</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><img style={{width : '50px', objectFit : 'cover'}} src={ chair } alt="" /></td>
                        <td>Chair</td>
                        <td> 2500 </td>
                        <td>M</td>
                        <td>1</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><img style={{width : '50px', objectFit : 'cover'}} src={ chair } alt="" /></td>
                        <td>Chair</td>
                        <td> 2500 </td>
                        <td>M</td>
                        <td>1</td>
                    </tr>
                </tbody>

            </table>
            <div className="subtotal__content">
                <h4>Subtotal </h4>
                 <h4>2500 <span>BDT</span></h4>
            </div>
            <div className="checkout__btn">
                <a href="#">CheckOut</a>
            </div>
        </div>
    </div> */}