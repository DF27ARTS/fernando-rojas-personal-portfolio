import FullName from "@/components/FullName";

const HomePage = () => {
    
    return (
        <div className="home-page" >
            <section className="home-header">
                <div>
                    <div className="profile-picture"></div>
                </div>
                <div>
                    <div className="profile-title">
                        <FullName />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage;