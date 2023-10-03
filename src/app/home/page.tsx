import FullName from "@/components/home-page/home-page-header/FullName";
import Profetion from "@/components/home-page/home-page-header/Profetion";
import ProfilePicture from "@/components/home-page/home-page-header/ProfilePicture";

const HomePage = () => {
    
    return (
        <>
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
        </>
    )
}

export default HomePage;