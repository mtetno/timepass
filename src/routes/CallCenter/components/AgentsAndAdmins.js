import React from 'react';
import './CallCenterMarkup.scss';
const agentsLogo = require("../../../styles/img/ic-agents.png");


class AgentsAndAdmins extends React.Component {

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


  return (<div className="agents-admins-view-holder ccntr-subview form">
   <div>
      <div className="web-admin-section">
         <div className="web-admin-section-header" onClick={(e) => this._toggleDiv()}>
            <div className="web-admin-section-icon icon-holder mblock">
               <img src={agentsLogo} className="logo-size" />
            </div>
            <div className="header-2 web-admin-section-title mblock">
               Agents &amp; Admins
            </div>
            <div className="web-admin-section-expander snappy icon-holder mblock">
            </div>
         </div>

         {
            this.state.toggleDiv
              ?
         <div className="web-admin-section-child-view-holder" id="div_8963_1">
            <div className="web-admin-section-child-view ">
               <div>
                  <div className="form-block-third">
                     <div className="mblock">
                        <div id="operator-suggest" className="">
                           <div className="operator-suggest">
                              <div className="auto-suggest">
                                 <input type="text" placeholder="+ Add people from your team" autoComplete="off" className="operator-suggest-input" />
                                 <div className="spinner hide"></div>
                                 <ul className="operator-suggest-list hide">
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div id="maximum-fanout-count" className="">
                           <span className="header-6-c4 uppercase">0 Agents</span> <span className="header-6-c3" id="span_8963_0">(200 REMAINING)</span>
                        </div>
                     </div>
                     <div id="operator-list">
                        <div className="list-container">
                           <div id="operator-count" className="body-copy-1"></div>
                           <table className="user-table">
                              <thead>
                                 <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th></th>
                                 </tr>
                              </thead>
                              <tbody id="operators-list"> </tbody>
                           </table>
                           <div id="no-operators" className="attention no-values">
                              <div className="web-icon-s web-icon-s-exclamation mblock"></div>
                              <div className="mblock attention-text">Add agents</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         : <div></div>}
         <div className="web-admin-section-bottom"></div>
      </div>
   </div>
</div>);

}
}

export default AgentsAndAdmins;
