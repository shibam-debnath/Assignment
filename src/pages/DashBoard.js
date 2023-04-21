import Highlights from "../components/Highlights/Highlights";
import NftCard from "../components/NftCard/NftCard";
import Profile from "../components/Profile/Profile";
import styles from "./DashBoard.module.scss";

const DashBoard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.profile}>
        <Profile />
      </div>
      <div className={styles.dashboardContent}>
        <div className={styles.highlights}>
          <Highlights />
        </div>
        <div className={styles.nftCards}>
          <NftCard />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
