import React from 'react'
import './Profile.css';

const Profile = () => {
    return (
        <div className='content'>
            <div class="card-container">
                <span class="pro">PRO</span>
                <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                <h3>Daksh Codes</h3>
                <h6>India</h6>
                <p>User interface designer and <br /> Full Stack developer</p>
                <div class="buttons">
                    <button class="primary">
                        Message
                    </button>
                    <button class="primary ghost">
                        Following
                    </button>
                </div>
                <div class="info">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, aperiam ex corporis illo laudantium accusamus. Optio sunt dicta veritatis, ipsam ex totam distinctio voluptatum error quos, corporis harum exercitationem necessitatibus.
                </div>
            </div>
        </div>
    )
}

export default Profile
