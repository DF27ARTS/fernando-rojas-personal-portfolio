import FullName from "@/components/FullName";
import Profetion from "@/components/Profetion";
import ProfilePicture from "@/components/ProfilePicture";

const HomePage = () => {
    
    return (
        <div className="home-page" >
            <section className="home-header">
                <div> 
                    <ProfilePicture />
                </div>
                <div>
                    <div className="profile-title">
                        <FullName />
                        <Profetion />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage;