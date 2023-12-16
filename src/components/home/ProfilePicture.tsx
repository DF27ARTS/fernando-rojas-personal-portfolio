import picture from "@/assets/profile-picture-2.png";
import Image from "next/image";

const ProfilePicture = () => {
  return (
    <div className="profile-picture">
      <div className="gradient-background"></div>
      <Image
        height="1200"
        width="1200"
        src={picture.src}
        alt="Portfolio picture"
        className="picture"
      />
    </div>
  );
};

export default ProfilePicture;
