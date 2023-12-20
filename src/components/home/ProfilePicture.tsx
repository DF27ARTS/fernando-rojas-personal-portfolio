import picture from "@/assets/Profile-min.png";
import Image from "next/image";

const ProfilePicture = () => {
  return (
    <div className="profile-picture">
      <div className="gradient-background"></div>
      <Image
        height="2000"
        width="2000"
        src={picture.src}
        alt="Portfolio picture"
        className="picture"
      />
    </div>
  );
};

export default ProfilePicture;
