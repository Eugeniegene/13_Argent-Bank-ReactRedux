import React from "react"

import "./head-banner.css"

/**
 * creates the general banner containing
 * adds regarding the banks perks.
 */
const HeadBanner = () => {
    return (
        <div className="HeadBanner">
            <section className="main-content">
                <p className="sub">No fees.</p>
                <p className="sub">No minimum deposit.</p>
                <p className="sub">High interest rates.</p>
                <p className="add">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
  }

export default HeadBanner