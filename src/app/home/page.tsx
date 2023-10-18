import FullName from "@/components/home-page/home-page-header/FullName";
import Profetion from "@/components/home-page/home-page-header/Profetion";
import ProfilePicture from "@/components/home-page/home-page-header/ProfilePicture";
import GridContent from "@/components/home-page/table-of-content/GridContent";

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


            <section className="table-of-content">
                <h2 className="table-of-content__title">TABLE OF CONTENT</h2>
                <GridContent />
            </section>
        </>
    )
}

export default HomePage;