import React from 'react';
import './GroupsMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader';
const logo = require("../../../styles/img/ic-business.png");

class BusinessHoursComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleDiv: false
    };
  }

  _toggleDiv() {
    this.setState({
      toggleDiv: !this.state.toggleDiv
    });
  }

  render() {

  return (  <div id="hours-summary-view" className="form">
        <div>
            <div className="web-admin-section closed">
                <div className="web-admin-section-header" onClick={(e) => this._toggleDiv()} >
                    <div className="web-admin-section-icon icon-holder mblock">
  <img src={logo} className="logo-size"/>
                    </div>
                    <div className="header-2 web-admin-section-title mblock">

                        Business Hours &amp; Call Routing

                    </div>
                    <div className="web-admin-section-expander snappy icon-holder mblock">

                    </div>
                </div>

                {this.state.toggleDiv ?
                <div className="web-admin-section-child-view-holder">
                    <div id="businessHours" className="web-admin-section-child-view " >
                        <div>
                            <div>
                                <div className="hours-summary-header iblock">Normal Business Hours</div>
                                <button className="hours-summary-bus-hrs-edit rfloat primary-button">Edit Details</button>
                            </div>
                            <table className="user-table">
                                <thead>
                                    <tr>
                                        <th>Time Zone</th>
                                        <th>Open Hours</th>
                                    </tr>
                                </thead>

                                <tbody className="hours-summary-list">
                                    <tr className="item">
                                        <td className="body-copy-1">US/Pacific</td>
                                        <td className="body-copy-1">

                                            Specific Hours

                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                : <div></div>
              }

                <div className="web-admin-section-bottom"></div>
            </div>
        </div>
    </div>);

};
}
export default BusinessHoursComponent;
