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
                <img src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/283116603_10160977652083836_1305599984228978889_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=agfMhoK-urYAX_l6v1q&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT-FKEkSm0131el0vgdB5pcfZzUkDuch4_ZhpFtGETl9PA&oe=6290FB0D" alt="alo" className='topAvatar' />
            </div>
        </div>
    </div>
  )
}
