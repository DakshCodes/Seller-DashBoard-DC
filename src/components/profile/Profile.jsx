import React from 'react'
import './Profile.css';

const Profile = () => {
    return (
        <div className='content'>
            <div class="card-container">
                <span class="pro">PRO</span>
                <img class="round" src="https://randomuser.me/api/portraits/men/79.jpg" alt="user" />
                <h3>Daksh Codes</h3>
                <h6>India</h6>
                <div class="buttons">
                    <button class="primary">
                        Edit Profile
                    </button>
                    <button class="primary ghost">
                        Your Earnings
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
