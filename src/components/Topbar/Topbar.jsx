import React from 'react';
import './topbar.css';

import {AccountCircle} from '@material-ui/icons';
import {Notifications} from '@material-ui/icons';
import {Settings} from '@material-ui/icons';
import {Language} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">BK Technology</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <Notifications/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>           
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://scontent-frt3-2.xx.fbcdn.net/v/t31.18172-8/20424159_10155757193433836_2532718778797445315_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=AXkqDN1bNL0AX-GQ4gl&_nc_ht=scontent-frt3-2.xx&oh=00_AT8gRYvpc0uGMMp_c9x1MSaqS42Wp30tl2fTlTHMs-pQJA&oe=62888392" alt="" className='topAvatar' />
            </div>
        </div>
    </div>
  )
}
