import picture from "../assets/profile-picture-2.png";

const ProfilePicture = () => {
    return (
        <div className="profile-picture">
            <div className="gradient-background"></div>
            <img src={picture.src} className="picture" />
        </div>
    )
}

export default ProfilePicture;