import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src="https://avatars.githubusercontent.com/u/1292594?v=4" alt="Elton Santos" />
      <p className="title">Analista de Sistemas</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;