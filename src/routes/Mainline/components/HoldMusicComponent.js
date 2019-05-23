import React from 'react';
import './MainlineMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader'
const logo = require("../../../styles/img/ic-music.png");

class HoldMusicComponent extends React.Component {

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


  return (
    <div id="hold-music" className="form">
        <div>
            <div className="web-admin-section closed">
                <div className="web-admin-section-header" onClick={(e) => this._toggleDiv()}>
                    <div className="web-admin-section-icon icon-holder mblock">
  <img src={logo} className="logo-size"/>
                    </div>
                    <div className="header-2 web-admin-section-title mblock">

                        Hold Music

                    </div>
                    <div className="web-admin-section-expander snappy icon-holder mblock">

                    </div>
                </div>
                {
           this.state.toggleDiv
             ?

                <div className="web-admin-section-child-view-holder">
                    <div className="web-admin-section-child-view " id="div_be9e_0">
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
export default HoldMusicComponent;
