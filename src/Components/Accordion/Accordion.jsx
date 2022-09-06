import React from 'react';
import './Accordion.scss';
import { BsStarFill , BsStarHalf } from "react-icons/bs";
import chair from '../../assets/Images/chair.jpg';
const Accordion = () => {
return (
<div>
    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h4>Description</h4>
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p className='border__t'>The D300 incorporates a range of innovative technologies and features that
                        will significantly improve the accuracy, control, and performance photographers can get from
                        their equipment. Its new Scene Recognition System advances the use of Nikon's acclaimed
                        1,005-segment sensor to recognize colors and light patterns that help the camera determine the
                        subject and the type of scene being photographed before a picture is taken. This information is
                        used to improve the accuracy of autofocus, autoexposure, and auto white balance functions in the
                        D300. For example, the camera can track moving subjects better and by identifying them, it can
                        also automatically select focus points faster and with greater accuracy. It can also analyze
                        highlights and more accurately determine exposure, as well as infer light sources to deliver
                        more accurate white balance detection.</p>
                    <p className='border__t'>Similar to the D3, the D300 features Nikon's exclusive EXPEED Image Processing System that is
                        central to driving the speed and processing power needed for many of the camera's new features.
                        The D300 features a new 51-point autofocus system with Nikon's 3D Focus Tracking feature and two
                        new LiveView shooting modes that allow users to frame a photograph using the camera's
                        high-resolution LCD monitor. The D300 shares a similar Scene Recognition System as is found in
                        the D3; it promises to greatly enhance the accuracy of autofocus, autoexposure, and auto white
                        balance by recognizing the subject or scene being photographed and applying this information to
                        the calculations for the three functions.</p>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h4>Review</h4>
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                 <div className="accordion__list">
                    <table className='table table-striped'>
                        <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Comment</th>
                            <th>Review</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><img style={{width : '100px', objectFit : 'cover'}} src={ chair } alt="" /></td>
                            <td>Nur Amin</td>
                            <td>stack.developer51@gmail.com</td>
                            <td className='comment__tab'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa exercitationem ex cumque. Aspernatur nisi rem, quod iure esse optio mollitia.</td>
                            <td>
                            <div className="revirw__star">
                                <ul>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><BsStarFill /></li>
                                    <li><BsStarHalf /></li>
                                </ul>
                            </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                 </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Accordion;