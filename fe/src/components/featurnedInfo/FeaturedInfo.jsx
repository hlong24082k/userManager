import './featuredinfo.css';
import { ArrowDownward, 
  ArrowUpward, 
  PeopleAltOutlined, 
  PermIdentityOutlined,
  AssignmentOutlined,
  NotificationsActiveOutlined } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
          <span className="featuredTitle">People</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">15</span>
            <span className="featuredMoneyRate">
              <PermIdentityOutlined  className="featuredIcon negative"/>
            </span>
          </div>
          <span className="featuredSub">Last updated 3 mins ago</span>
        </div>

        <div className="featuredItem">
          <span className="featuredTitle">Department</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">4</span>
            <span className="featuredMoneyRate">
              <PeopleAltOutlined  className="featuredIcon negative"/>
            </span>
          </div>
          <span className="featuredSub">Last updated 3 mins ago</span>
        </div>

        <div className="featuredItem">
          <span className="featuredTitle">Project</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">5</span>
            <span className="featuredMoneyRate">
              <AssignmentOutlined  className="featuredIcon negative"/>
            </span>
          </div>
          <span className="featuredSub">Last updated 3 mins ago</span>
        </div>

        <div className="featuredItem">
          <span className="featuredTitle">Notification</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">2</span>
            <span className="featuredMoneyRate">
              <NotificationsActiveOutlined  className="featuredIcon negative"/>
            </span>
          </div>
          <span className="featuredSub">Last updated 3 mins ago</span>
        </div>
    </div>
  )
}
