import React from "react";
import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.groupParent}>
            <img className={styles.frameChild} alt="" src="/group-371.svg" />
            <div className={styles.lvl2Wrapper}>
              <div className={styles.lvl2}>LVL 2</div>
            </div>
          </div>
          <div className={styles.dingalingethParent}>
            <div className={styles.dingalingeth}>dingaling.eth</div>
            <div className={styles.xadgfjkld}>0xadgf....jkld</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.socialIconsParent}>
            <img
              className={styles.socialIcons}
              alt=""
              src="/social-icons.svg"
            />
            <div className={styles.dingalingts}>@dingalingts</div>
          </div>
          <div className={styles.socialIconsWrapper}>
            <img
              className={styles.socialIcons}
              alt=""
              src="/social-icons1.svg"
            />
          </div>
        </div>
        <div className={styles.anInvestor}>
          An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and
          owner of 📦 @nftboxes
        </div>
        <div className={styles.commonCommunties3Parent}>
          <div className={styles.dingalingts}>Common communties (3)</div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameItem}
              alt=""
              src="/rectangle-1599@2x.png"
            />
            <img
              className={styles.frameItem}
              alt=""
              src="/rectangle-1600@2x.png"
            />
            <img
              className={styles.frameItem}
              alt=""
              src="/rectangle-1601@2x.png"
            />
            <img
              className={styles.frameItem}
              alt=""
              src="/rectangle-1602@2x.png"
            />
          </div>
        </div>
        <div className={styles.commonCommunties3Parent}>
          <div className={styles.frameParent1}>
            <div className={styles.artParent}>
              <div className={styles.art}>Art</div>
              <div className={styles.art}>12%</div>
            </div>
            <div className={styles.artParent}>
              <div className={styles.art}>Utility</div>
              <div className={styles.art}>12%</div>
            </div>
            <div className={styles.pfpParent}>
              <div className={styles.art}>PFP</div>
              <div className={styles.art}>12%</div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.metaverseParent}>
              <div className={styles.art}>Metaverse</div>
              <div className={styles.art}>12%</div>
            </div>
            <div className={styles.metaverseParent}>
              <div className={styles.art}>Gaming</div>
              <div className={styles.art}>12%</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.metaverseParent}>
              <div className={styles.art}>PFP</div>
              <div className={styles.art}>12%</div>
            </div>
            <div className={styles.metaverseParent}>
              <div className={styles.art}>ens</div>
              <div className={styles.art}>12%</div>
            </div>
          </div>
        </div>
        <div className={styles.subscribeParent}>
          <div className={styles.dingalingts}>Subscribe</div>
          <img className={styles.chevronIcon} alt="" src="/chevron.svg" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
