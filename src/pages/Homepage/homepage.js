import React from "react"
import HeadBanner from "../../components/Homepage-HeadBanner/head-banner"
import CentralContentData from "../../components/Hompage-CentralContent/centralContent"

import chatIcon from "../../assets/icon-livechat.png"
import moneyIcon from "../../assets/icon-money.png"
import securityIcon from "../../assets/icon-security.png"

/**
 * Creates the Homepage structure
 * It contains the headbanner (adds in a white rectangles on the right side of the screen, center on mobile format),
 * and general data (center line on desktop, column center on mobile), containing icons, titles and description. 
 * @component
 */

const Homepage = () => {
    return (
      <div className="homepage-container">
        <HeadBanner />
        <div className="AB-Features">
          <CentralContentData image={chatIcon} title='You are our #1 priority' info='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.' />
          <CentralContentData image={moneyIcon} title='More savings means higher rates' info='The more you save with us, the higher your interest rate will be!' />
          <CentralContentData image={securityIcon} title='Security you can trust' info='We use top of the line encryption to make sure your data and money is always safe.' />
        </div>
      </div>
    )
  }

export default Homepage