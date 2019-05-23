import React from 'react';
import './MainlineMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader'
const logo = require("../../../styles/img/ic-business.png");
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import autobind from 'autobind-decorator';
import {browserHistory} from 'react-router';
import actions from '../modules/actions';

class HoursSummaryComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDefaultSet: false,
      toggleDiv: false
    };
  }

  _toggleDiv() {
    this.setState({
      toggleDiv: !this.state.toggleDiv
    });
    if (this.state.isDefaultSet === false) {
      this.props.actions.fetchBusinessHours(this.props.accessToken);
      this.props.actions.fetchBusinessHoursAndTimezoneEditDetails(this.props.accessToken);
      this.setState({isDefaultSet: true});
    }
  }

  render() {

    return (<div id="hours-summary-view" className="form">
      <div>
        <div className="web-admin-section">
          <div className="web-admin-section-header" onClick={(e) => this._toggleDiv()}>
            <div className="web-admin-section-icon icon-holder mblock">
              <img src={logo} className="logo-size"/>
            </div>
            <div className="header-2 web-admin-section-title mblock">

              Business Hours &amp; Call Routing

            </div>
            <div className="web-admin-section-expander snappy icon-holder mblock"></div>
          </div>

          {
            this.state.toggleDiv &&
                this.props.businessHours

              ? <div className="web-admin-section-child-view-holder">

                  <div className="web-admin-section-child-view " id="businessHours">
                    <div>
                      <div>
                        <div className="hours-summary-header iblock">Normal Business Hours</div>
                        <button onClick={this.props.onEditBusinessHours} className="hours-summary-bus-hrs-edit rfloat primary-button">Edit Details</button>
                      </div>
                      <table className="user-table">
                        <thead>
                          <tr>
                            <th>Time Zone</th>
                            <th>Open Hours</th>
                          </tr>
                        </thead>



                          {
                            this.props.businessHours
                              ?
                              <tbody className="hours-summary-list">

                                 <tr className="item">
                                    <td className="body-copy-1">{this.props.businessHours.time_zone}</td>
                                    <td className="body-copy-1">
                                    {this.props.businessHours.open_hours}
                                    </td>
                                  </tr>


                                    </tbody>
                              : undefined
                          }

                      </table>

                      <div>
                <div className="hours-summary-header iblock">Holiday Hours</div>

                  <button className="hours-summary-holiday-add rfloat primary-button">Add Holiday</button>

              </div>

              <div className="body-copy-2 form-block-desc">
                Apply holiday hours to override normal business hours.
              </div>


              <div className="observed-holidays-list"><div><table className="user-table">
              <thead>
                <tr>
                  <th>Holiday</th>
                  <th>Date</th>
                  <th>Repeat</th>
                  <th>Owner</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody className="observed-holidays-table-body">

{
  this.props.holidayHours ?
  this.props.holidayHours.map((item,index)=><tr className="item"><td className="ellipsis ">

   {item.holiday_name}
 </td>

 <td className="">
    {item.holiday_date}
 </td>

 <td className="ellipsis ">


       {item.holiday_repeat}

 </td>

 <td className="ellipsis">
   <div className="recur-event-row-owner-type">

            {item.owner}

   </div>
 </td>

 <td>

     <div className="account-action observed-holidays-action"><div className="select-menu-view"><div className="select-menu snappy  closed row-options-select-menu">
   <div className="sm-input-shim" tabindex="0">


     <input type="text" value="Options" className="snappy sm-input sm-item-value- unselected " tabindex="-1"/>
   </div>
   <div className="sm-menu"><div></div>
     <ul className="sm-list">

         <li className="sm-item" id="sm-item--edit" data-value="edit">

           <a className="sm-text sm-item-value-edit " href="javascript:void(0)" title="Edit">

             Edit
           </a>
         </li>

         <li className="sm-item" id="sm-item--remove" data-value="remove">

           <a className="sm-text sm-item-value-remove " href="javascript:void(0)" title="Remove">

             Remove
           </a>
         </li>

         <li className="sm-item" id="sm-item--delete" data-value="delete">

           <a className="sm-text sm-item-value-delete " href="javascript:void(0)" title="Delete Holiday">

             Delete Holiday
           </a>
         </li>

     </ul>
   </div>
 </div>
 </div></div>

 </td></tr>)
  : undefined

}



            </tbody>
            </table>
            <div className={  this.props.holidayHours.length > 0 ? "no-observed-holidays hide" : "no-observed-holiday"}>No holiday hours defined</div>
            </div></div>
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

const mapStateToProps = (state) => ({
    accessToken: state.login.data.access_token,
    businessHours: state.mainline.businessHours
      ? state.mainline.businessHours.data.business_hours
      : undefined,
      holidayHours: state.mainline.businessHours
        ? state.mainline.businessHours.data.holiday_hours
        : undefined,
    businessHoursAndTimezoneEditDetails: state.mainline.businessHoursAndTimezoneEditDetails
      ? state.mainline.businessHoursAndTimezoneEditDetails.data.business_hours_edit
      : undefined
  }),
  mapDispatchToProps = (dispatch) => {
    const {fetchBusinessHours, fetchBusinessHoursAndTimezoneEditDetails} = actions;
    return {
      actions: bindActionCreators({
        fetchBusinessHours,
        fetchBusinessHoursAndTimezoneEditDetails
      }, dispatch)
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(HoursSummaryComponent);
