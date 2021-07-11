import "../App.css";
import EditorComponent from "../components/Editor";
import TopTrendingComponent from "../components/TopicTrending";
import SideBarComponent from "../components/SideBar";

const EditorPageComponent = (props) => {
    return (
        <div className="App">
            <div className="extra-content-area">
                <SideBarComponent component={[
                    <TopTrendingComponent />,
                    <TopTrendingComponent />
                ]} />
            </div>
            <div className="main-content">
                <EditorComponent className="editor"/>
            </div>
            <div className="profile-area">
            </div>
        </div>
    );
}

export default EditorPageComponent;