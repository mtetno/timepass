import React from 'react';
import './MainlineMarkup.scss';
import SimpleSlider from '../../../components/shared/controls/SimpleSlider';

const BusinessHoursRightPopup = ({onEditBusinessHours,businessHoursTimezoneDDValues,onTimezoneSelction,onTimezoneDDClik,isTimezoneMenuOpen,defaultTimeZoneValue,businessHoursAndTimezoneEditDetails,fetchBusinessHoursPopup,handleSliderChange,onClickHoldIntro,onClickHoldMusic,onBusinessHourTimeChange,defaultHours,defaultSelectedHours,onTimeClick,onEndTimeClick,specificHoursSameForAllWeekdaysFlag,specificHoursSameForAllWeeksFlag,currentClickedOpenClosePopupIndex,onTimeSelectionClick,onSpecificHoursSameForAllWeeksFlag,onSpecificHoursSameForAllWeekdaysFlag,onRuleHourTypeChange,onSendCallTypeChange,
ruleHrType,sendCallTypeForOpenRouting,sendCallTypeForCloseRouting,operatorOptionSelected,onOperatorOptionChange,otherOptionSelected,onOtherOptionSelected,onShowViewPopupForFixedAndRorundRobin}) => {
  return ( <td id="rightbar" className="snappy app-footer-none app-subheader-default app-header-default app-sidebar-main app-overlay-none app-rightbar-hours-business"><div><div className="hdrb-container ">

{
  businessHoursTimezoneDDValues && fetchBusinessHoursPopup ?
<div>
  <div id="hdrb-header"><div><div className="rightbar-simple-header">
    <div className="rightbar-simple-header-title-row ">
      <div className="header-text header-2 rightbar-simple-header-title">Normal Business Hours</div>
      <div onClick={onEditBusinessHours} className="web-icon-xs web-icon-xs-x rightbar-close"></div>
    </div>

  </div>
  </div></div>

  <div id="hdrb-content" className="form"><div className="body-copy-2"><div className="bh-container form-block">
  <div className="header-1" id="div_b4e5_0">


        Set your business hours for this office.


  </div>
  <table>
    <tbody><tr className="body-copy-2">
      <td className="bh-receive-subtitle">Select when operators receive calls.</td>
    </tr>
    <tr>
      <td>
        <table>
          <tbody><tr>
            <td id="hours-off" onClick={(e)=>onBusinessHourTimeChange("1")} className="radio-sec simple-trans hours_on hours-on-option"><div className={fetchBusinessHoursPopup.isSpecificHours === "1" ? "radio checked" : "radio"} ><div className="snappy"></div>
<input id="hours-off-inp" name="hours_on" type="radio"  value="false"/></div></td>
            <td className="bh-first-radio-label radio-label">24/7</td>
            <td id="hours-on"  onClick={(e)=>onBusinessHourTimeChange("2")} className="radio-sec simple-trans hours_off hours-on-option"><div className={fetchBusinessHoursPopup.isSpecificHours === "2" ? "radio checked" : "radio"}><div className="snappy"></div>
<input id="hours-on-inp" name="hours_on" type="radio"  value="true"/></div></td>
            <td className="radio-label">Specific hours</td>
          </tr>
        </tbody></table>
      </td>
    </tr>
    <tr className="body-copy-2">
      <td className="bh-timezone-subtitle">Time zone</td>
    </tr>
    <tr className="bh-timezone" id="business-timezone"><div><div>
  <div className="mblock">
    <div className="timezone-menu"><div className="select-menu-view"><div className={isTimezoneMenuOpen ? "select-menu snappy" : "select-menu snappy  closed" }>
  <div onClick={onTimezoneDDClik} className="sm-input-shim" tabindex="0">


    <input id="timezone" name="timezone" type="text" value={defaultTimeZoneValue} className="snappy sm-input sm-item-value-US/Eastern " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">


{
  businessHoursTimezoneDDValues.time_zone_drop_down.map((item)=>  <li className="sm-item" id={`sm-item-timezone-${item}`} data-value={item}>

      <a onClick={(e)=>onTimezoneSelction(item)} className={`sm-text sm-item-value-${item} `}   title= {item}>
        {item}
      </a>
    </li>)
}


    </ul>
  </div>
</div>
</div></div>
  </div>

    <div className="mblock">
      <div className="display-all-timezones">
        <div className="mblock" id="display-all-timezones-checkbox"><div className="radio mblock" id="div_b4e5_1">
<div className="snappy"></div>
<input id="input-display-all-timezones-checkbox" name="" type="checkbox"  value=""/>
</div></div>
        <label for="input-display-all-timezones-checkbox" className="radio-label">Display all time zones</label>
      </div>
    </div>


</div></div></tr>
  </tbody></table>

  <div id="business-hours">
    <div className={fetchBusinessHoursPopup.isSpecificHours === "1" ? "form-sec-divider hide" : "form-sec-divider"} ></div>
    <table className={fetchBusinessHoursPopup.isSpecificHours === "1" ? "business-hours  hide" : "business-hours "}>
      <tbody><tr>
        <th className="bh-day"></th>
        <th><label>Open</label></th>
        <th className="bh-to"></th>
        <th><label>Close</label></th>
      </tr>
      <tr>
        <td className="bh-day">Mon</td>
        <td className="bh-time" id="monday-start"><div className="select-menu-view"><div className={currentClickedOpenClosePopupIndex  === 0 ? "select-menu snappy" : "select-menu snappy  closed" }>
  <div className="sm-input-shim" tabindex="0"  onClick={(e)=>onTimeClick(0)}>


    <input id="monday_start_time" name="monday_start_time" type="text" value={defaultSelectedHours[0]} className="snappy sm-input sm-item-value-11:00 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">


{
  defaultHours.map((item)=><li className="sm-item" id={item} data-value={item} data-off="true">
    <a className="sm-text sm-item-value-00:15 " href="javascript:void(0)" title={item} onClick={(e)=>onTimeSelectionClick(0,item)}>
      {item}
    </a>
  </li>)
}



    </ul>
  </div>
</div>
</div></td>
        <td className="bh-to"><label id="monday-to">to</label></td>
        <td className="bh-time" id="monday-end"><div className="select-menu-view"><div className={currentClickedOpenClosePopupIndex  === 1 ? "select-menu snappy" : "select-menu snappy  closed" }>
  <div className="sm-input-shim" tabindex="0" onClick={(e)=>onTimeClick(1)}>


    <input id="monday_end_time" name="monday_end_time" type="text" value={defaultSelectedHours[1]} className="snappy sm-input sm-item-value-20:00 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    {
      defaultHours.map((item)=><li className="sm-item"id={item} data-value={item} >
        <a className="sm-text sm-item-value-00:15 " href="javascript:void(0)" title={item} onClick={(e)=>onTimeSelectionClick(1,item)}>
       {item}
        </a>
      </li>)
    }



    </ul>
  </div>
</div>
</div></td>
        <td className="bh-all-weekdays" id="business-all-weekdays">
        <div className={specificHoursSameForAllWeekdaysFlag ?"radio square mblock checked":"radio square mblock"} id="div_b4e5_2" onClick={onSpecificHoursSameForAllWeekdaysFlag} >
<div className="snappy"></div>
<input id="input-all-weekdays" name="" type="checkbox"  value=""/>
</div></td>
        <td className="bh-checkbox-label">Same for all weekdays</td>
        <td className="bh-all-days" id="business-all-days">
        <div className={specificHoursSameForAllWeeksFlag ?"radio square mblock checked":"radio square mblock"} id="div_b4e5_3" onClick={onSpecificHoursSameForAllWeeksFlag} >
<div className="snappy"></div>
<input id="input-all-weekdays" name="" type="checkbox"  value=""/>
</div></td>
        <td className="bh-checkbox-label">Same all week</td>
      </tr>
      <tr>
        <td className="bh-day">Tue</td>
        <td className="bh-time" id="tuesday-start"><div className="select-menu-view"><div className={currentClickedOpenClosePopupIndex  === 2 ? "select-menu snappy" : "select-menu snappy  closed" }>
  <div className="sm-input-shim" tabindex="0" onClick={(e)=>onTimeClick(2)}>


    <input id="tuesday_start_time" name="tuesday_start_time" type="text" value= {defaultSelectedHours[2]} className="snappy sm-input sm-item-value-11:00 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    {
defaultHours.map((item)=><li className="sm-item" id={item} data-value={item} data-off="true">
<a className="sm-text sm-item-value-00:15 " href="javascript:void(0)" title={item} onClick={(e)=>onTimeSelectionClick(2,item)}>
{item}
</a>
</li>)
}


    </ul>
  </div>
</div>
</div></td>
        <td className="bh-to"><label id="tuesday-to">to</label></td>
        <td className="bh-time" id="tuesday-end"><div className="select-menu-view"><div className={currentClickedOpenClosePopupIndex  === 3 ? "select-menu snappy" : "select-menu snappy  closed" }>
  <div className="sm-input-shim" tabindex="0" onClick={(e)=>onTimeClick(3)}>


    <input id="tuesday_end_time" name="tuesday_end_time" type="text" value= {defaultSelectedHours[3]} className="snappy sm-input sm-item-value-20:00 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">


{
defaultHours.map((item)=><li className="sm-item"id={item} data-value={item} >
<a className="sm-text sm-item-value-00:15 " href="javascript:void(0)" title={item}  onClick={(e)=>onTimeSelectionClick(3,item)}>
{item}
</a>
</li>)
}


    </ul>
  </div>
</div>
</div></td>
      </tr>
      <tr>
        <td className="bh-day">Wed</td>
        <td className="bh-time" id="wednesday-start"><div className="select-menu-view"><div className={currentClickedOpenClosePopupIndex  === 4 ? "select-menu snappy" : "select-menu snappy  closed" }>
  <div className="sm-input-shim" tabindex="0"  onClick={(e)=>onTimeClick(4)}>


    <input id="wednesday_start_time" name="wednesday_start_time" type="text" value= {defaultSelectedHours[4]} className="snappy sm-input sm-item-value-11:00 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    {
    defaultHours.map((item)=><li className="sm-item" id={item} data-value={item} data-off="true">
      <a className="sm-text sm-item-value-00:15 " href="javascript:void(0)" title={item}  onClick={(e)=>onTimeSelectionClick(4,item)}>
        {item}
      </a>
    </li>)
  }


    </ul>
  </div>
</div>
</div></td>
        <td className="bh-to"><label id="wednesday-to">to</label></td>
        <td className="bh-time" id="wednesday-end"><div className="select-menu-view"><div className={currentClickedOpenClosePopupIndex  === 5 ? "select-menu snappy" : "select-menu snappy  closed" }>
  <div className="sm-input-shim" tabindex="0"  onClick={(e)=>onTimeClick(5)}>


    <input id="wednesday_end_time" name="wednesday_end_time" type="text" value={defaultSelectedHours[5]} className="snappy sm-input sm-item-value-20:00 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    {
   defaultHours.map((item)=><li className="sm-item"id={item} data-value={item} >
     <a className="sm-text sm-item-value-00:15 " href="javascript:void(0)" title={item} onClick={(e)=>onTimeSelectionClick(5,item)}>
    {item}
     </a>
   </li>)
 }



    </ul>
  </div>
</div>
</div></td>
      </tr>
      <tr>
        <td className="bh-day">Thu</td>
        <td className="bh-time" id="thursday-start"><div className="select-menu-view"><div className={currentClickedOpenClosePopupIndex  === 6 ? "select-menu snappy" : "select-menu snappy  closed" }>
  <div className="sm-input-shim" tabindex="0"     onClick={(e)=>onTimeClick(6)}>


    <input id="thursday_start_time" name="thursday_start_time" type="text" value={defaultSelectedHours[6]} className="snappy sm-input sm-item-value-11:00 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    {
    defaultHours.map((item)=><li className="sm-item" id={item} data-value={item} data-off="true">
      <a className="sm-text sm-item-value-00:15 " href="javascript:void(0)" title={item} onClick={(e)=>onTimeSelectionClick(6,item)}>
        {item}
      </a>
    </li>)
  }


    </ul>
  </div>
</div>
</div></td>
        <td className="bh-to"><label id="thursday-to">to</label></td>
        <td className="bh-time" id="thursday-end"><div className="select-menu-view"><div className={currentClickedOpenClosePopupIndex  === 7 ? "select-menu snappy" : "select-menu snappy  closed" }>
  <div className="sm-input-shim" tabindex="0"  onClick={(e)=>onTimeClick(7)}>


    <input id="thursday_end_time" name="thursday_end_time" type="text" value={defaultSelectedHours[7]} className="snappy sm-input sm-item-value-20:00 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    {
defaultHours.map((item)=><li className="sm-item"id={item} data-value={item} >
<a className="sm-text sm-item-value-00:15 " href="javascript:void(0)" title={item} onClick={(e)=>onTimeSelectionClick(7,item)}>
{item}
</a>
</li>)
}


    </ul>
  </div>
</div>
</div></td>
      </tr>
      <tr>
        <td className="bh-day">Fri</td>
        <td className="bh-time" id="friday-start"><div className="select-menu-view"><div className={currentClickedOpenClosePopupIndex  === 8 ? "select-menu snappy" : "select-menu snappy  closed" }>
  <div className="sm-input-shim" tabindex="0" onClick={(e)=>onTimeClick(8)}>


    <input id="friday_start_time" name="friday_start_time" type="text" value={defaultSelectedHours[8]} className="snappy sm-input sm-item-value-11:00 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    {
    defaultHours.map((item)=><li className="sm-item" id={item} data-value={item} data-off="true">
      <a className="sm-text sm-item-value-00:15 " href="javascript:void(0)" title={item} onClick={(e)=>onTimeSelectionClick(8,item)}>
        {item}
      </a>
    </li>)
  }



    </ul>
  </div>
</div>
</div></td>
        <td className="bh-to"><label id="friday-to">to</label></td>
        <td className="bh-time" id="friday-end"><div className="select-menu-view"><div className={currentClickedOpenClosePopupIndex  === 9 ? "select-menu snappy" : "select-menu snappy  closed" }>
  <div className="sm-input-shim" tabindex="0" onClick={(e)=>onTimeClick(9)}>


    <input id="friday_end_time" name="friday_end_time" type="text" value= {defaultSelectedHours[9]} className="snappy sm-input sm-item-value-20:00 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">



{
  defaultHours.map((item)=><li className="sm-item"id={item} data-value={item} >
    <a className="sm-text sm-item-value-00:15 " href="javascript:void(0)" title={item} onClick={(e)=>onTimeSelectionClick(9,item)}>
   {item}
    </a>
  </li>)
}

    </ul>
  </div>
</div>
</div></td>
      </tr>
      <tr>
        <td className="bh-day">Sat</td>
        <td className="bh-time" id="saturday-start"><div className="select-menu-view"><div className={currentClickedOpenClosePopupIndex  === 10 ? "select-menu snappy" : "select-menu snappy  closed" }>
  <div className="sm-input-shim" tabindex="0" onClick={(e)=>onTimeClick(10)}>


    <input id="saturday_start_time" name="saturday_start_time" type="text" value={defaultSelectedHours[10]} className="snappy sm-input sm-item-value-11:00 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    {
    defaultHours.map((item)=><li className="sm-item" id={item} data-value={item} data-off="true">
      <a className="sm-text sm-item-value-00:15 " href="javascript:void(0)" title={item} onClick={(e)=>onTimeSelectionClick(10,item)}>
        {item}
      </a>
    </li>)
  }


    </ul>
  </div>
</div>
</div></td>
        <td className="bh-to"><label id="saturday-to">to</label></td>
        <td className="bh-time" id="saturday-end"><div className="select-menu-view"><div className={currentClickedOpenClosePopupIndex  === 11 ? "select-menu snappy" : "select-menu snappy  closed" }>
  <div className="sm-input-shim" tabindex="0" onClick={(e)=>onTimeClick(11)}>


    <input id="saturday_end_time" name="saturday_end_time" type="text" value=    {defaultSelectedHours[11]} className="snappy sm-input sm-item-value-20:00 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">
    {
      defaultHours.map((item)=><li className="sm-item"id={item} data-value={item} >
        <a className="sm-text sm-item-value-00:15 " href="javascript:void(0)" title={item} onClick={(e)=>onTimeSelectionClick(11,item)}>
       {item}
        </a>
      </li>)
    }

    </ul>
  </div>
</div>
</div></td>
      </tr>
      <tr>
        <td className="bh-day">Sun</td>
        <td className="bh-time" id="sunday-start"><div className="select-menu-view"><div className={currentClickedOpenClosePopupIndex  === 12 ? "select-menu snappy" : "select-menu snappy  closed" }>
  <div className="sm-input-shim" tabindex="0" onClick={(e)=>onTimeClick(12)}>


    <input id="sunday_start_time" name="sunday_start_time" type="text" value={defaultSelectedHours[12]} className="snappy sm-input sm-item-value-11:00 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    {
    defaultHours.map((item)=><li className="sm-item" id={item} data-value={item} data-off="true">
      <a className="sm-text sm-item-value-00:15 " href="javascript:void(0)" title={item} onClick={(e)=>onTimeSelectionClick(12,item)}>
        {item}
      </a>
    </li>)
  }


    </ul>
  </div>
</div>
</div></td>
        <td className="bh-to"><label id="sunday-to">to</label></td>
        <td className="bh-time" id="sunday-end"><div className="select-menu-view"><div className={currentClickedOpenClosePopupIndex  === 13 ? "select-menu snappy" : "select-menu snappy  closed" }>
  <div className="sm-input-shim" tabindex="0" onClick={(e)=>onTimeClick(13)}>


    <input id="sunday_end_time" name="sunday_end_time" type="text" value={defaultSelectedHours[13]} className="snappy sm-input sm-item-value-20:00 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    {
    defaultHours.map((item)=><li className="sm-item"id={item} data-value={item} >
      <a className="sm-text sm-item-value-00:15 " href="javascript:void(0)" title={item}  onClick={(e)=>onTimeSelectionClick(13,item)}>
     {item}
      </a>
    </li>)
  }

    </ul>
  </div>
</div>
</div></td>
      </tr>
    </tbody></table>

    <div id="call-handling-view"><div><div className="form-sec-divider"></div>
<div className="form-block">
  <div>
    <div className="header-4 form-block-desc">
      Set rules for open and closed hours
    </div>

    <div className="sec-tabs">
      <div id="business-hours-tab" onClick={(e)=>onRuleHourTypeChange("OPEN_HOURS")} className={ruleHrType === "OPEN_HOURS" ?  "sec-tab-selected": ""}>Open hours routing<div className="iblock" id="tab-business-hours"></div></div>
      <div id="after-hours-tab" onClick={(e)=>onRuleHourTypeChange("CLOSED_HOURS")} className={ruleHrType === "CLOSED_HOURS" ?  "sec-tab-selected": ""}>Closed hours routing<div className="iblock" id="tab-after-hours"></div></div>
    </div>

    <div className="form-block" id="div_b4e5_4">
      <div className="ccntr-call-handling-subview-holder">
        <div className="header-8">
          Routing Options
        </div>
        <div className="body-copy-22 ccntr-handling-subheader">
          Ensure calls are routed to the right team every time. Select a routing option below to fit your business' needs. Don't forget, you can come back and readjust anytime.
        </div>

          <div id="routing-options-view-business-hrs" ><div><div className="body-copy-2">Send calls to:</div>
<div id="div_b4e5_5">

  <div id="first_action-operators" onClick={(e)=>onSendCallTypeChange(ruleHrType,1)} className={ ruleHrType === "OPEN_HOURS" ?  sendCallTypeForOpenRouting === 1  ? "simple-trans mblock center first_action call-handled selected" : "simple-trans mblock center first_action call-handled"  : sendCallTypeForCloseRouting === 1  ? "simple-trans mblock center first_action call-handled selected" : "simple-trans mblock center first_action call-handled" }>
    <table><tbody><tr><td>
      <div><div className="web-icon-xl web-icon-xl-operator"></div></div>
      <div id="action-operators"><div className={ ruleHrType === "OPEN_HOURS" ?  sendCallTypeForOpenRouting === 1  ? "radio checked" : "radio "  : sendCallTypeForCloseRouting === 1  ? "radio checked" : "radio" } ><div className="snappy"></div>
<input id="operators-inp" name="first_action" type="radio"  value="operators" checked="true"/></div></div>
      <div className="center"><label for="operators-inp" className={ ruleHrType === "OPEN_HOURS" ?  sendCallTypeForOpenRouting === 1  ? "radio-label selected" : "radio-label "  : sendCallTypeForCloseRouting === 1  ? "radio-label selected" : "radio-label" }>Operators</label></div>
    </td></tr></tbody></table>
  </div>

  <div id="first_action-menu" onClick={(e)=>onSendCallTypeChange(ruleHrType,2)} className={ ruleHrType === "OPEN_HOURS" ?   sendCallTypeForOpenRouting === 2  ? "simple-trans mblock center first_action call-handled selected" : "simple-trans mblock center first_action call-handled"  : sendCallTypeForCloseRouting === 2  ? "simple-trans mblock center first_action call-handled selected" : "simple-trans mblock center first_action call-handled"  }>
    <table><tbody><tr><td>
      <div><div className="web-icon-xl web-icon-xl-menu"></div></div>
      <div id="action-menu"><div  className={ ruleHrType === "OPEN_HOURS" ?  sendCallTypeForOpenRouting ===
      2  ? "radio checked" : "radio "  : sendCallTypeForCloseRouting === 2  ? "radio checked" : "radio" } ><div className="snappy"></div>
<input id="menu-inp" name="first_action" type="radio"  value="menu"/></div></div>
      <div className="center"><label for="menu-inp" className={ ruleHrType === "OPEN_HOURS" ?  sendCallTypeForOpenRouting === 2  ? "radio-label selected" : "radio-label "  : sendCallTypeForCloseRouting === 2  ? "radio-label selected" : "radio-label" } id="label_b4e5_0">

          Other routing options

      </label></div>
    </td></tr></tbody></table>
  </div>
</div>


{
sendCallTypeForOpenRouting === 1 ?

<div id="routing-options-operators">
  <div className="body-copy-2">

      Choose operator routing type:

  </div>

  <div id="operator_routing-longestidle" className="simple-trans operator_routing selected">
    <table className="operator-routing">
      <tbody><tr>
        <td>
          <div id="operator_routing-chk-longestidle" onClick={(e)=>onOperatorOptionChange(1)} className="mblock"><div className={operatorOptionSelected === 1 ? "radio checked" : "radio"}><div className="snappy"></div>
<input id="operator_routing-chk-inp-longestidle" name="operator_routing_type" type="radio"  value="longestidle" checked="true"/></div></div>
        </td>
        <td>
          <label for="operator_routing-chk-inp-longestidle" className={operatorOptionSelected === 1 ? "radio-label selected" : "radio-label"}>
            Longest idle
          </label>
        </td>
      </tr>

      <tr>
        <td>
        </td>
        <td>
          <div id="operator_routing-desc-longestidle" className="operator-routing-desc">
            <label for="operator_routing-chk-inp-longestidle" className="radio-label selected">
              Agents are rung individually based on whomever has been idle the longest.
            </label>
          </div>
        </td>
      </tr>


    </tbody></table>
  </div>

  <div id="operator_routing-fixedorder" onClick={(e)=>onOperatorOptionChange(2)} className="simple-trans operator_routing">
    <table className="operator-routing">
      <tbody><tr>
        <td>
          <div id="operator_routing-chk-fixedorder" className="mblock"><div className={operatorOptionSelected === 2 ? "radio checked" : "radio "}><div className="snappy"></div>
<input id="operator_routing-chk-inp-fixedorder" name="operator_routing_type" type="radio"  value="fixedorder"/></div></div>
        </td>
        <td>
          <label for="operator_routing-chk-inp-fixedorder" className={operatorOptionSelected === 2 ? "radio-label selected" : "radio-label"}>
            Fixed order
          </label>
        </td>
      </tr>

     <tr className={  operatorOptionSelected === 2 ? "" : "hide"}>
              <td>
              </td>
              <td>
                <div id="operator_routing-desc-fixedorder" className="operator-routing-desc">
                  <label for="operator_routing-chk-inp-fixedorder" className="radio-label selected">
                    Agents are rung individually based on the same fixed order.
                  </label>
                </div>
              </td>
            </tr>


            <tr className={  operatorOptionSelected === 2 ? "" : "hide"}>
              <td>
              </td>
              <td>
                <div className="routing-options-call-routing-dialog" id="operator_routing-dialog-fixedorder">
                  <div className="wlink iblock operator-routing-desc" onClick={(e)=>onShowViewPopupForFixedAndRorundRobin()}>View and edit order</div>
                </div>
              </td>
            </tr>

    </tbody></table>
  </div>

  <div id="operator_routing-roundrobin" onClick={(e)=>onOperatorOptionChange(3)} className="simple-trans operator_routing">
    <table className="operator-routing">
      <tbody><tr>
        <td>
          <div id="operator_routing-chk-roundrobin" className="mblock"><div className={operatorOptionSelected === 3 ? "radio checked" : "radio "}><div className="snappy"></div>
<input id="operator_routing-chk-inp-roundrobin" name="operator_routing_type" type="radio"  value="roundrobin"/></div></div>
        </td>
        <td>
          <label for="operator_routing-chk-inp-roundrobin" className={operatorOptionSelected === 3 ? "radio-label selected" : "radio-label"}>
            Round robin
          </label>
        </td>
      </tr>

    </tbody></table>
  </div>

  <div id="operator_routing-simultaneous" onClick={(e)=>onOperatorOptionChange(4)} className="simple-trans operator_routing">
    <table className="operator-routing">
      <tbody><tr>
        <td>
          <div id="operator_routing-chk-simultaneous" className="mblock"><div className={operatorOptionSelected === 4 ?"radio checked" : "radio "}><div className="snappy"></div>
<input id="operator_routing-chk-inp-simultaneous" name="operator_routing_type" type="radio"  value="simultaneous"/></div></div>
        </td>
        <td>
          <label for="operator_routing-chk-inp-simultaneous" className={operatorOptionSelected === 4 ? "radio-label selected" : "radio-label"}>
            Simultaneous
          </label>
        </td>
      </tr>

    </tbody></table>
  </div>

</div>  :

<div id="routing-options-menu-business-hrs"><div><div>
  <div id="hold-agent-desc" className="body-copy-2">
    Calls will be sent:
  </div>
  <div id="no_operators_action-voicemail" onClick={(e)=>onOtherOptionSelected(1)} className="simple-trans no_operators_action">
    <table><tbody><tr><td>
    <div id="no-operator-voicemail" className="mblock"><div className={otherOptionSelected === 1 ?  "radio checked" : "radio"}><div className="snappy"></div>
<input id="no-op-voicemail-inp" name="no_operators_action" type="radio"  value="voicemail"/></div></div>
      <label for="no-op-voicemail-inp" className="radio-label">
        Directly to voicemail
      <span className="body-copy-2 form-block-desc">
        (

          Operators will receive notifications when voicemails are left

        )
      </span>
      </label>
    </td></tr></tbody></table>
  </div>
  <div id="no_operators_action-message" onClick={(e)=>onOtherOptionSelected(2)}
 className="simple-trans no_operators_action">
    <table><tbody><tr><td>
    <div id="no-operator-message" className="mblock"><div className={otherOptionSelected === 2 ?  "radio checked" : "radio"}><div className="snappy"></div>
<input id="no-op-message-inp" name="no_operators_action" type="radio"  value="message"/></div></div>
    <label for="no-op-message-inp" className="radio-label">To a message (no voicemail)</label>
    </td></tr></tbody></table>
    <div id="settings-message" className="ch-no-operators-action-setting">
      <div id="message-greetings-view"><div><audio className="audio-greeting" preload="none" src="https://dialpad.com/blob/ivr/4694445656506368/target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_VMUNAVAILABLE"></audio>
<table className="form" id="table_7938_0">
  <tbody><tr>
    <td colspan="2" id="td_7938_0">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="ALLISONSMITH_hotel.mp3" className="snappy sm-input sm-item-value-4694445656506368 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-4694445656506368" data-value="4694445656506368">

          <a className="sm-text sm-item-value-4694445656506368 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-5076820957724672" data-value="5076820957724672">

          <a className="sm-text sm-item-value-5076820957724672 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_7938_1">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_7938_2" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_7938_3" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_buttons">

    <td id="td_7938_4">
      <div className="record-a-greeting mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>


            <div className="wlink iblock">Record a greeting</div>


      </div>
    </td>

    <td id="td_7938_5">
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div className="upload-greeting mblock right icon-text">
        <div className="web-icon web-icon-xs web-icon-xs-upload mblock"></div>
        <div className="wlink iblock">Upload (.mp3)</div>
      </div>
    </td>

    <td></td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_7938_6" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_7938_0"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
    </div>
  </div>
  <div id="no_operators_action-department" onClick={(e)=>onOtherOptionSelected(3)}
 className="simple-trans no_operators_action">
    <table><tbody><tr><td>
    <div id="no-operator-department" className="mblock"><div className={otherOptionSelected === 3 ?  "radio checked" : "radio"}><div className="snappy"></div>
<input id="no-op-department-inp" name="no_operators_action" type="radio"  value="department"/></div></div>
    <label for="no-op-department-inp" className="radio-label">To another department</label>
    </td></tr></tbody></table>
    <div id="settings-department" className="ch-no-operators-action-setting">
      <div id="department-menu" className="ch-no-operators-menu"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0" title="-select-">


    <input id="send-to-department" name="send-to-department" type="text" value="-select-" className="snappy sm-input sm-item-value- unselected " title="-select-" tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-send-to-department-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA " href="javascript:void(0)" title="Easytel L1 Queue">

            Easytel L1 Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-send-to-department-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA " href="javascript:void(0)" title="Easytel L2 Queue">

            Easytel L2 Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-send-to-department-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmPfYotQKDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmPfYotQKDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmPfYotQKDA " href="javascript:void(0)" title="Osmow's Harmony Queue">

            Osmow's Harmony Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-send-to-department-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNetiJ0KDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNetiJ0KDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNetiJ0KDA " href="javascript:void(0)" title="Osmow's Keele Queue">

            Osmow's Keele Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-send-to-department-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmLf0pO8LDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmLf0pO8LDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmLf0pO8LDA " href="javascript:void(0)" title="Osmow's Pond Queue">

            Osmow's Pond Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-send-to-department-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNfFmbcJDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNfFmbcJDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNfFmbcJDA " href="javascript:void(0)" title="Osmow's Steeles Queue">

            Osmow's Steeles Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-send-to-department-agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM" data-value="agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM " href="javascript:void(0)" title="Support">

            Support
          </a>
        </li>

        <li className="sm-item sm-item-disabled" id="sm-item-send-to-department-add_department" data-value="add_department" data-no-select="true">

          <a className="sm-text sm-item-value-add_department " href="javascript:void(0)" title="+ Create a new department">

            + Create a new department
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </div>
  </div>
  <div id="no_operators_action-bridge_target" onClick={(e)=>onOtherOptionSelected(4)}
 className="simple-trans no_operators_action">
      <table><tbody><tr><td>
      <div id="no-operator-bridge_target" className="mblock"><div className={otherOptionSelected === 4 ?  "radio checked" : "radio"}><div className="snappy"></div>
<input id="no-op-bridge_target-inp" name="no_operators_action" type="radio"  value="bridge_target"/></div></div>

          <label for="no-op-bridge_target-inp" className="radio-label">To a team member / room phone</label>

      </td></tr></tbody></table>
      <div id="settings-bridge_target" className="ch-no-operators-action-setting">
        <div id="bridge_target-menu" className="ch-no-operators-menu"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
  </ul>
</div>
</div></div>
    </div>
  </div>
  <div id="no_operators_action-menu" onClick={(e)=>onOtherOptionSelected(5)}
 className="simple-trans no_operators_action selected">
    <table><tbody><tr><td>
    <div id="no-operator-menu" className="mblock"><div className={otherOptionSelected === 5 ?  "radio checked" : "radio"}><div className="snappy"></div>
<input id="no-op-menu-inp" name="no_operators_action" type="radio"  value="menu" checked="true"/></div></div>
    <label for="no-op-menu-inp" className="radio-label selected">To an automated response menu</label>
    </td></tr></tbody></table>
    <div id="settings-menu" className="ch-no-operators-action-setting ch-show">
      <div id="automated-menu"><div><div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-1"></div>
  <div className="iblock" id="dtmf_select_1"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_1" name="dtmf_1" type="text" value="Recorded message" className="snappy sm-input sm-item-value-message " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_1-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_1-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_1-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_1-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_1-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_1-operator" data-value="operator">

          <a className="sm-text sm-item-value-operator " href="javascript:void(0)" title="Operator">

            Operator
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_1-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target hide" id="dtmf_target_1"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_1" name="dtmf_1" type="text" value="-select-" className="snappy sm-input sm-item-value- unselected " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_1"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target" id="dtmf_message_target_1"><div><audio className="audio-greeting" preload="none" src="https://dialpad.com/blob/ivr/6244894054416384/target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION"></audio>
<table className="form" id="table_7938_1">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="ALLISONSMITH_hotel.mp3" className="snappy sm-input sm-item-value-6244894054416384 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_7938_7">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_1" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_1" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_7938_8" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_7938_9" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_7938_10" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_7938_1"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target hide" id="dtmf_group_target_1"><div><a className="wlink" href="/groups/" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-2"></div>
  <div className="iblock" id="dtmf_select_2"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_2" name="dtmf_2" type="text" value="Forward to a department" className="snappy sm-input sm-item-value-department " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_2-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-operator" data-value="operator">

          <a className="sm-text sm-item-value-operator " href="javascript:void(0)" title="Operator">

            Operator
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target" id="dtmf_target_2"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_2" name="dtmf_2" type="text" value="Easytel L2 Queue" className="snappy sm-input sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_2-agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww" data-value="agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww " href="javascript:void(0)" title="Office Main Line">

            Office Main Line
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA " href="javascript:void(0)" title="Easytel L1 Queue">

            Easytel L1 Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA " href="javascript:void(0)" title="Easytel L2 Queue">

            Easytel L2 Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmPfYotQKDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmPfYotQKDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmPfYotQKDA " href="javascript:void(0)" title="Osmow's Harmony Queue">

            Osmow's Harmony Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNetiJ0KDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNetiJ0KDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNetiJ0KDA " href="javascript:void(0)" title="Osmow's Keele Queue">

            Osmow's Keele Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmLf0pO8LDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmLf0pO8LDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmLf0pO8LDA " href="javascript:void(0)" title="Osmow's Pond Queue">

            Osmow's Pond Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNfFmbcJDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNfFmbcJDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNfFmbcJDA " href="javascript:void(0)" title="Osmow's Steeles Queue">

            Osmow's Steeles Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM" data-value="agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM " href="javascript:void(0)" title="Support">

            Support
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-add_department" data-value="add_department">

          <a className="sm-text sm-item-value-add_department " href="javascript:void(0)" title="+ Create a new department">

            + Create a new department
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_2"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_2"><div><audio className="audio-greeting" preload="none" src="https://dialpad.com/blob/ivr/6244894054416384/target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION"></audio>
<table className="form" id="table_7938_2">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="ALLISONSMITH_hotel.mp3" className="snappy sm-input sm-item-value-6244894054416384 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_7938_11">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_2" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_2" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_7938_12" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_7938_13" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_7938_14" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_7938_2"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target" id="dtmf_group_target_2"><div><a className="wlink" href="/groups/agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-3"></div>
  <div className="iblock" id="dtmf_select_3"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_3" name="dtmf_3" type="text" value="Forward to a department" className="snappy sm-input sm-item-value-department " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_3-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-operator" data-value="operator">

          <a className="sm-text sm-item-value-operator " href="javascript:void(0)" title="Operator">

            Operator
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target" id="dtmf_target_3"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_3" name="dtmf_3" type="text" value="Easytel L2 Queue" className="snappy sm-input sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_3-agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww" data-value="agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww " href="javascript:void(0)" title="Office Main Line">

            Office Main Line
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA " href="javascript:void(0)" title="Easytel L1 Queue">

            Easytel L1 Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA " href="javascript:void(0)" title="Easytel L2 Queue">

            Easytel L2 Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmPfYotQKDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmPfYotQKDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmPfYotQKDA " href="javascript:void(0)" title="Osmow's Harmony Queue">

            Osmow's Harmony Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNetiJ0KDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNetiJ0KDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNetiJ0KDA " href="javascript:void(0)" title="Osmow's Keele Queue">

            Osmow's Keele Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmLf0pO8LDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmLf0pO8LDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmLf0pO8LDA " href="javascript:void(0)" title="Osmow's Pond Queue">

            Osmow's Pond Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNfFmbcJDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNfFmbcJDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNfFmbcJDA " href="javascript:void(0)" title="Osmow's Steeles Queue">

            Osmow's Steeles Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM" data-value="agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM " href="javascript:void(0)" title="Support">

            Support
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-add_department" data-value="add_department">

          <a className="sm-text sm-item-value-add_department " href="javascript:void(0)" title="+ Create a new department">

            + Create a new department
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_3"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_3"><div><audio className="audio-greeting" preload="none" src="https://dialpad.com/blob/ivr/6244894054416384/target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION"></audio>
<table className="form" id="table_7938_3">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="ALLISONSMITH_hotel.mp3" className="snappy sm-input sm-item-value-6244894054416384 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_7938_15">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_3" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_3" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_7938_16" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_7938_17" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_7938_18" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_7938_3"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target" id="dtmf_group_target_3"><div><a className="wlink" href="/groups/agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-4"></div>
  <div className="iblock" id="dtmf_select_4"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_4" name="dtmf_4" type="text" value="Disabled" className="snappy sm-input sm-item-value-disabled off " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_4-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_4-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_4-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_4-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_4-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_4-operator" data-value="operator">

          <a className="sm-text sm-item-value-operator " href="javascript:void(0)" title="Operator">

            Operator
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_4-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target hide" id="dtmf_target_4"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_4" name="dtmf_4" type="text" value="-select-" className="snappy sm-input sm-item-value- unselected " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_4"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
  </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_4"><div><audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available.mp3"></audio>
<table className="form" id="table_7938_4">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="Default message" className="snappy sm-input sm-item-value-default " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_7938_19">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_4" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_4" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_7938_20" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_7938_21" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_7938_22" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_7938_4"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target hide" id="dtmf_group_target_4"><div><a className="wlink" href="/groups/" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-5"></div>
  <div className="iblock" id="dtmf_select_5"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_5" name="dtmf_5" type="text" value="Disabled" className="snappy sm-input sm-item-value-disabled off " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_5-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_5-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_5-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_5-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_5-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_5-operator" data-value="operator">

          <a className="sm-text sm-item-value-operator " href="javascript:void(0)" title="Operator">

            Operator
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_5-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target hide" id="dtmf_target_5"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_5" name="dtmf_5" type="text" value="-select-" className="snappy sm-input sm-item-value- unselected " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_5"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_5"><div><audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available.mp3"></audio>
<table className="form" id="table_7938_5">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="Default message" className="snappy sm-input sm-item-value-default " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_7938_23">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_5" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_5" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_7938_24" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_7938_25" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_7938_26" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_7938_5"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target hide" id="dtmf_group_target_5"><div><a className="wlink" href="/groups/" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-6"></div>
  <div className="iblock" id="dtmf_select_6"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_6" name="dtmf_6" type="text" value="Disabled" className="snappy sm-input sm-item-value-disabled off " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_6-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_6-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_6-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_6-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_6-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_6-operator" data-value="operator">

          <a className="sm-text sm-item-value-operator " href="javascript:void(0)" title="Operator">

            Operator
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_6-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target hide" id="dtmf_target_6"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_6" name="dtmf_6" type="text" value="-select-" className="snappy sm-input sm-item-value- unselected " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_6"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_6"><div><audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available.mp3"></audio>
<table className="form" id="table_7938_6">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="Default message" className="snappy sm-input sm-item-value-default " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_7938_27">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_6" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_6" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_7938_28" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_7938_29" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_7938_30" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_7938_6"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target hide" id="dtmf_group_target_6"><div><a className="wlink" href="/groups/" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-7"></div>
  <div className="iblock" id="dtmf_select_7"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_7" name="dtmf_7" type="text" value="Disabled" className="snappy sm-input sm-item-value-disabled off " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_7-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_7-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_7-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_7-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_7-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_7-operator" data-value="operator">

          <a className="sm-text sm-item-value-operator " href="javascript:void(0)" title="Operator">

            Operator
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_7-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target hide" id="dtmf_target_7"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_7" name="dtmf_7" type="text" value="-select-" className="snappy sm-input sm-item-value- unselected " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_7"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_7"><div><audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available.mp3"></audio>
<table className="form" id="table_7938_7">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="Default message" className="snappy sm-input sm-item-value-default " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_7938_31">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_7" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_7" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_7938_32" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_7938_33" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_7938_34" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_7938_7"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target hide" id="dtmf_group_target_7"><div><a className="wlink" href="/groups/" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-8"></div>
  <div className="iblock" id="dtmf_select_8"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_8" name="dtmf_8" type="text" value="Disabled" className="snappy sm-input sm-item-value-disabled off " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_8-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_8-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_8-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_8-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_8-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_8-operator" data-value="operator">

          <a className="sm-text sm-item-value-operator " href="javascript:void(0)" title="Operator">

            Operator
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_8-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target hide" id="dtmf_target_8"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_8" name="dtmf_8" type="text" value="-select-" className="snappy sm-input sm-item-value- unselected " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_8"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_8"><div><audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available.mp3"></audio>
<table className="form" id="table_7938_8">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="Default message" className="snappy sm-input sm-item-value-default " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_7938_35">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_8" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_8" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_7938_36" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_7938_37" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_7938_38" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_7938_8"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target hide" id="dtmf_group_target_8"><div><a className="wlink" href="/groups/" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-9"></div>
  <div className="iblock" id="dtmf_select_9"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_9" name="dtmf_9" type="text" value="Disabled" className="snappy sm-input sm-item-value-disabled off " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_9-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_9-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_9-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_9-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_9-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_9-operator" data-value="operator">

          <a className="sm-text sm-item-value-operator " href="javascript:void(0)" title="Operator">

            Operator
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_9-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target hide" id="dtmf_target_9"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_9" name="dtmf_9" type="text" value="-select-" className="snappy sm-input sm-item-value- unselected " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_9"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_9"><div><audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available.mp3"></audio>
<table className="form" id="table_7938_9">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="Default message" className="snappy sm-input sm-item-value-default " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_7938_39">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_9" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_9" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_7938_40" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_7938_41" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_7938_42" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_7938_9"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target hide" id="dtmf_group_target_9"><div><a className="wlink" href="/groups/" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-0"></div>
  <div className="iblock" id="dtmf_select_0"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_0" name="dtmf_0" type="text" value="Forward to a department" className="snappy sm-input sm-item-value-department " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_0-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-operator" data-value="operator">

          <a className="sm-text sm-item-value-operator " href="javascript:void(0)" title="Operator">

            Operator
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target" id="dtmf_target_0"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_0" name="dtmf_0" type="text" value="Easytel L1 Queue" className="snappy sm-input sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_0-agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww" data-value="agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww " href="javascript:void(0)" title="Office Main Line">

            Office Main Line
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA " href="javascript:void(0)" title="Easytel L1 Queue">

            Easytel L1 Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA " href="javascript:void(0)" title="Easytel L2 Queue">

            Easytel L2 Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmPfYotQKDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmPfYotQKDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmPfYotQKDA " href="javascript:void(0)" title="Osmow's Harmony Queue">

            Osmow's Harmony Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNetiJ0KDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNetiJ0KDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNetiJ0KDA " href="javascript:void(0)" title="Osmow's Keele Queue">

            Osmow's Keele Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmLf0pO8LDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmLf0pO8LDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmLf0pO8LDA " href="javascript:void(0)" title="Osmow's Pond Queue">

            Osmow's Pond Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNfFmbcJDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNfFmbcJDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmNfFmbcJDA " href="javascript:void(0)" title="Osmow's Steeles Queue">

            Osmow's Steeles Queue
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM" data-value="agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM " href="javascript:void(0)" title="Support">

            Support
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-add_department" data-value="add_department">

          <a className="sm-text sm-item-value-add_department " href="javascript:void(0)" title="+ Create a new department">

            + Create a new department
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_0"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_0"><div><audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available.mp3"></audio>
<table className="form" id="table_7938_10">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="Default message" className="snappy sm-input sm-item-value-default " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_7938_43">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_0" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_0" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_7938_44" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_7938_45" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_7938_46" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_7938_10"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target" id="dtmf_group_target_0"><div><a className="wlink" href="/groups/agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA" target="_blank">View department</a>
</div></div>
</div>
<div className="form-sec-divider"></div>

<div className="body-copy-2 form-block-desc">
  Callers will hear the following greeting when they reach the automated response menu:
</div>
<div id="greeting-view"><div><audio className="audio-greeting" preload="none" src="https://dialpad.com/blob/ivr/6647086741585920/target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENU"></audio>
<table className="form" id="table_7938_11">
  <tbody><tr>
    <td colspan="2" id="td_7938_47">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="New Greeting" className="snappy sm-input sm-item-value-6647086741585920 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default System Greeting">

            Default System Greeting
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6647086741585920" data-value="6647086741585920">

          <a className="sm-text sm-item-value-6647086741585920 " href="javascript:void(0)" title="New Greeting">

            New Greeting
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_7938_48">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_7938_49" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_7938_50" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_buttons">

    <td id="td_7938_51">
      <div className="record-a-greeting mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>


            <div className="wlink iblock">Record a greeting</div>


      </div>
    </td>

    <td id="td_7938_52">
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div className="upload-greeting mblock right icon-text">
        <div className="web-icon web-icon-xs web-icon-xs-upload mblock"></div>
        <div className="wlink iblock">Upload (.mp3)</div>
      </div>
    </td>

    <td></td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_7938_53" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_7938_11"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div></div></div>
    </div>
  </div>
</div></div></div>


}





</div></div>

      </div>
      <div className="ccntr-call-handling-subview-holder">
        <div className="header-8">

            Open Hours Welcome Greeting

        </div>
        <div className="body-copy-22 ccntr-handling-subheader">

            A welcome greeting is the first greeting that callers hear when they reach the department.

        </div>

          <div id="department-intro-recording-view"><div><audio className="audio-greeting" preload="none" src="https://dialpad.com/blob/ivr/5150181396185088/target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_DEPARTMENTINTRO"></audio>
<table className="form" id="table_b4e5_0">
  <tbody><tr>
    <td colspan="2" id="td_b4e5_0">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="New Greeting" className="snappy sm-input sm-item-value-5150181396185088 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="No Greeting">

            No Greeting
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-5574095698001920" data-value="5574095698001920">

          <a className="sm-text sm-item-value-5574095698001920 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-4775234509340672" data-value="4775234509340672">

          <a className="sm-text sm-item-value-4775234509340672 " href="javascript:void(0)" title="New Greeting">

            New Greeting
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-5150181396185088" data-value="5150181396185088">

          <a className="sm-text sm-item-value-5150181396185088 " href="javascript:void(0)" title="New Greeting">

            New Greeting
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_b4e5_1">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_b4e5_2" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_b4e5_3" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_buttons">

    <td id="td_b4e5_4">
      <div className="record-a-greeting mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>


            <div className="wlink iblock">Record a greeting</div>


      </div>
    </td>

    <td id="td_b4e5_5">
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div className="upload-greeting mblock right icon-text">
        <div className="web-icon web-icon-xs web-icon-xs-upload mblock"></div>
        <div className="wlink iblock">Upload (.mp3)</div>
      </div>
    </td>

    <td></td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_b4e5_6" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_b4e5_6"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>

      </div>

        <div className="ccntr-call-handling-subview-holder">
          <div className="header-8">
            Ring Duration
          </div>
          <div className="ccntr-common-hrs-warning">
            Changes made here will be reflected in both Open and Closed Hours
          </div>
          <div className="body-copy-22 ccntr-handling-subheader">

            Choose how long department phones and devices will ring before Dialpad assumes operators are not available.

          (default 30s)
          </div>
          <div id="ring-duration-slider-view">
            <SimpleSlider value={fetchBusinessHoursPopup.businessHourSliderValue} onSliderChange={handleSliderChange}/>
          </div>

        </div>



        <div className="ccntr-call-handling-subview-holder">
          <div className="header-8">
            Hold Queue

              <a href="https://help.dialpad.com/hc/en-us/articles/360015149332" target="_blank" className="wlink">
                <div className="web-icon web-icon-xs web-icon-xs-info mblock" id="div_b4e5_9"></div>
              </a>

          </div>

          <div className="ccntr-common-hrs-warning">
            Changes made here will be reflected in both Open and Closed Hours
          </div>
          <div className="body-copy-22 ccntr-handling-subheader">

              If all operators are busy on other calls, send callers to a hold queue.

          </div>
          <div id="hold-queue-settings-view"><div><div id="group-hold-queue-setting" className="mblock"><div className={fetchBusinessHoursPopup.hold_queue_status === "1" ? "radio square mblock checked"  : "radio square mblock  unchecked" }>
<div className="snappy"></div>
<input id="group-hold-queue-setting-input" name="enable_hold_queue" type="checkbox"  value=""/>
</div></div>
<div className="mblock body-copy-32">
  Enable the hold queue
</div>

<div id="div_b4e5_10">
  <div className="body-copy-32 ivrgrp-hold-queue-section-name">
    Hold queue size
  </div>
  <div className="body-copy-22">
    Specify your queue size and wait time.
  </div>
  <form id="max-hold-form" className="ivrgrp-hold-queue-section-details">
    <div className="mblock body-copy-2">Maximum queue size</div>
    <div>
      <input name="max-hold-count" id="max-hold-count" className="ccntr-input-field" type="number" min="0" value={fetchBusinessHoursPopup.hold_queue_size}/>
      <div className="mblock body-copy-32" id="div_b4e5_11">People</div>
    </div>
    <div className="mblock body-copy-2">Maximum queue wait time</div>
    <div className="max-hold-wait-time">
      <div>
        <input name="max-hold-minutes" id="max-hold-minutes" className="ccntr-input-field" type="number" min="0" max="300" step="1" value={fetchBusinessHoursPopup.queue_wait_time_mins}/>
        <div className="mblock body-copy-32" id="div_b4e5_12">Minutes</div>
      </div>
      <div className="max-hold-seconds-wrapper">
        <div id="max-hold-seconds"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="max-hold-seconds" name="max-hold-seconds" type="text" value={fetchBusinessHoursPopup.queue_wait_time_seconds} className="snappy sm-input sm-item-value-0 ccntr-input-field" tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-max-hold-seconds-0" data-value="0">

          <a className="sm-text sm-item-value-0 "  title="0">

            0
          </a>
        </li>



    </ul>
  </div>
</div>
</div></div>
        <div className="mblock body-copy-32" id="div_b4e5_13">Seconds</div>
      </div>
    </div>

  </form>
  <div className="body-copy-32 ivrgrp-hold-queue-section-name">
    Hold greeting
  </div>
  <div className="body-copy-22">
    Select the greeting callers hear when they are placed on hold. This greeting plays once before the hold music begins.
  </div>
  <div id="hold-intro-recording-view" className="ivrgrp-hold-queue-section-details"><div><audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/default_greeting_main.mp3"></audio>
<table className="form" id="table_b4e5_1">
  <tbody><tr>
    <td colspan="2" id="td_b4e5_7">
      <div className="greetings-select"><div className="select-menu-view"><div className={fetchBusinessHoursPopup.isHoldIntroOpen ? "select-menu snappy " : "select-menu snappy  closed "}>
  <div className="sm-input-shim" tabindex="0" onClick={onClickHoldIntro}>


    <input id="customivr" name="customivr" type="text" value={fetchBusinessHoursPopup.defaultHoldIntro} className="snappy sm-input sm-item-value-default " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

{fetchBusinessHoursPopup.hold_queue_sounds.map(
  (item)=>
  <li className="sm-item" id="sm-item-customivr-default" data-value="default">
    <a className="sm-text sm-item-value-default " href="javascript:void(0)" title={item.sound_name}>
    {item.sound_name}
    </a>
  </li>
)

}



    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_b4e5_8">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_b4e5_9" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_b4e5_10" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_buttons">

    <td id="td_b4e5_11">
      <div className="record-a-greeting mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>


            <div className="wlink iblock">Record a greeting</div>


      </div>
    </td>

    <td id="td_b4e5_12">
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div className="upload-greeting mblock right icon-text">
        <div className="web-icon web-icon-xs web-icon-xs-upload mblock"></div>
        <div className="wlink iblock">Upload (.mp3)</div>
      </div>
    </td>

    <td></td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_b4e5_13" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_b4e5_14"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="body-copy-32 ivrgrp-hold-queue-section-name">
    Hold music
  </div>
  <div className="body-copy-22">
    Select the music callers hear while on hold.
  </div>
  <div id="hold-music-view" className="ivrgrp-hold-queue-section-details"><div><audio className="audio-greeting" preload="none" src="https://dialpad.com/blob/ivr/4587129701531648/target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_HOLDMUSIC"></audio>
<table className="form" id="table_b4e5_2">
  <tbody><tr>
    <td colspan="2" id="td_b4e5_14">
      <div className="greetings-select"><div className="select-menu-view"><div className={fetchBusinessHoursPopup.isHoldMusicOpen ? "select-menu snappy   " : "select-menu snappy  closed "}>
  <div onClick={onClickHoldMusic} className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value={fetchBusinessHoursPopup.defaultHoldMusic} className="snappy sm-input sm-item-value-4587129701531648 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">



        {fetchBusinessHoursPopup.hold_music_sounds.map(
          (item)=>
          <li className="sm-item" id="sm-item-customivr-default" data-value="default">
            <a className="sm-text sm-item-value-default "   title={item.sound_name}>
            {item.sound_name}
            </a>
          </li>
        )

        }

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_b4e5_15">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_b4e5_16" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_b4e5_17" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_buttons">

    <td id="td_b4e5_18">
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div className="upload-greeting mblock right icon-text">
        <div className="web-icon web-icon-xs web-icon-xs-upload mblock"></div>
        <div className="wlink iblock">Upload (.mp3)</div>
      </div>
    </td>

    <td></td>

    <td></td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_b4e5_19" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_b4e5_15"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>

</div></div></div>

        </div>



        <div className="ccntr-call-handling-subview-holder">
          <div className="header-8">
            Fallback Options
          </div>

          <div className="body-copy-22 ccntr-handling-subheader">

            Choose what happens to the calls when no Operators are available during business hours.

          </div>
          <div id="fallback-options-view-business-hrs" ><div><div>
  <div id="hold-agent-desc" className="body-copy-2">
    Calls will be sent:
  </div>
  <div id="no_operators_action-voicemail" className="simple-trans no_operators_action">
    <table><tbody><tr><td>
    <div id="no-operator-voicemail" className="mblock"><div className="radio"><div className="snappy"></div>
<input id="no-op-voicemail-inp" name="no_operators_action" type="radio"  value="voicemail"/></div></div>
      <label for="no-op-voicemail-inp" className="radio-label">
        Directly to voicemail
      <span className="body-copy-2 form-block-desc">
        (

          Operators will receive notifications when voicemails are left

        )
      </span>
      </label>
    </td></tr></tbody></table>
  </div>
  <div id="no_operators_action-message" className="simple-trans no_operators_action">
    <table><tbody><tr><td>
    <div id="no-operator-message" className="mblock"><div className="radio"><div className="snappy"></div>
<input id="no-op-message-inp" name="no_operators_action" type="radio"  value="message"/></div></div>
    <label for="no-op-message-inp" className="radio-label">To a message (no voicemail)</label>
    </td></tr></tbody></table>
    <div id="settings-message" className="ch-no-operators-action-setting">
      <div id="message-greetings-view"><div><audio className="audio-greeting" preload="none" src="https://dialpad.com/blob/ivr/4694445656506368/target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_VMUNAVAILABLE"></audio>
<table className="form" id="table_b4e5_3">
  <tbody><tr>
    <td colspan="2" id="td_b4e5_20">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="ALLISONSMITH_hotel.mp3" className="snappy sm-input sm-item-value-4694445656506368 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-4694445656506368" data-value="4694445656506368">

          <a className="sm-text sm-item-value-4694445656506368 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-5076820957724672" data-value="5076820957724672">

          <a className="sm-text sm-item-value-5076820957724672 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_b4e5_21">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_b4e5_22" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_b4e5_23" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_buttons">

    <td id="td_b4e5_24">
      <div className="record-a-greeting mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>


            <div className="wlink iblock">Record a greeting</div>


      </div>
    </td>

    <td id="td_b4e5_25">
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div className="upload-greeting mblock right icon-text">
        <div className="web-icon web-icon-xs web-icon-xs-upload mblock"></div>
        <div className="wlink iblock">Upload (.mp3)</div>
      </div>
    </td>

    <td></td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_b4e5_26" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_b4e5_16"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
    </div>
  </div>
  <div id="no_operators_action-department" className="simple-trans no_operators_action">
    <table><tbody><tr><td>
    <div id="no-operator-department" className="mblock"><div className="radio"><div className="snappy"></div>
<input id="no-op-department-inp" name="no_operators_action" type="radio"  value="department"/></div></div>
    <label for="no-op-department-inp" className="radio-label">To another department</label>
    </td></tr></tbody></table>
    <div id="settings-department" className="ch-no-operators-action-setting">
      <div id="department-menu" className="ch-no-operators-menu"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0" title="-select-">


    <input id="send-to-department" name="send-to-department" type="text" value="-select-" className="snappy sm-input sm-item-value- unselected " title="-select-" tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-send-to-department-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA " href="javascript:void(0)" title="L1 Department">

            L1 Department
          </a>
        </li>

        <li className="sm-item" id="sm-item-send-to-department-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA " href="javascript:void(0)" title="L2 Department">

            L2 Department
          </a>
        </li>

        <li className="sm-item" id="sm-item-send-to-department-agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM" data-value="agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM " href="javascript:void(0)" title="Support">

            Support
          </a>
        </li>

        <li className="sm-item sm-item-disabled" id="sm-item-send-to-department-add_department" data-value="add_department" data-no-select="true">

          <a className="sm-text sm-item-value-add_department " href="javascript:void(0)" title="+ Create a new department">

            + Create a new department
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </div>
  </div>
  <div id="no_operators_action-bridge_target" className="simple-trans no_operators_action">
      <table><tbody><tr><td>
      <div id="no-operator-bridge_target" className="mblock"><div className="radio"><div className="snappy"></div>
<input id="no-op-bridge_target-inp" name="no_operators_action" type="radio"  value="bridge_target"/></div></div>

          <label for="no-op-bridge_target-inp" className="radio-label">To a team member / room phone</label>

      </td></tr></tbody></table>
      <div id="settings-bridge_target" className="ch-no-operators-action-setting">
        <div id="bridge_target-menu" className="ch-no-operators-menu"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
</ul>
</div>
</div></div>
    </div>
  </div>
  <div id="no_operators_action-menu" className="simple-trans no_operators_action selected">
    <table><tbody><tr><td>
    <div id="no-operator-menu" className="mblock"><div className="radio checked"><div className="snappy"></div>
<input id="no-op-menu-inp" name="no_operators_action" type="radio"  value="menu"/></div></div>
    <label for="no-op-menu-inp" className="radio-label selected">To an automated response menu</label>
    </td></tr></tbody></table>
    <div id="settings-menu" className="ch-no-operators-action-setting ch-show">
      <div id="automated-menu"><div><div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-1"></div>
  <div className="iblock" id="dtmf_select_1"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_1" name="dtmf_1" type="text" value="Recorded message" className="snappy sm-input sm-item-value-message " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_1-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_1-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_1-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_1-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_1-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_1-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target hide" id="dtmf_target_1"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_1" name="dtmf_1" type="text" value="-select-" className="snappy sm-input sm-item-value- unselected " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_1"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
 </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target" id="dtmf_message_target_1"><div><audio className="audio-greeting" preload="none" src="https://dialpad.com/blob/ivr/6244894054416384/target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION"></audio>
<table className="form" id="table_b4e5_4">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="ALLISONSMITH_hotel.mp3" className="snappy sm-input sm-item-value-6244894054416384 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_b4e5_27">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_1" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_1" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_b4e5_28" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_b4e5_29" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_b4e5_30" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_b4e5_17"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target hide" id="dtmf_group_target_1"><div><a className="wlink" href="/groups/" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-2"></div>
  <div className="iblock" id="dtmf_select_2"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_2" name="dtmf_2" type="text" value="Forward to a department" className="snappy sm-input sm-item-value-department " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_2-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target" id="dtmf_target_2"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_2" name="dtmf_2" type="text" value="L2 Department" className="snappy sm-input sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_2-agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww" data-value="agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww " href="javascript:void(0)" title="Office Main Line">

            Office Main Line
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA " href="javascript:void(0)" title="L1 Department">

            L1 Department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA " href="javascript:void(0)" title="L2 Department">

            L2 Department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM" data-value="agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM " href="javascript:void(0)" title="Support">

            Support
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_2-add_department" data-value="add_department">

          <a className="sm-text sm-item-value-add_department " href="javascript:void(0)" title="+ Create a new department">

            + Create a new department
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_2"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_2"><div><audio className="audio-greeting" preload="none" src="https://dialpad.com/blob/ivr/6244894054416384/target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION"></audio>
<table className="form" id="table_b4e5_5">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="ALLISONSMITH_hotel.mp3" className="snappy sm-input sm-item-value-6244894054416384 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_b4e5_31">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_2" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_2" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_b4e5_32" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_b4e5_33" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_b4e5_34" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_b4e5_18"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target" id="dtmf_group_target_2"><div><a className="wlink" href="/groups/agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-3"></div>
  <div className="iblock" id="dtmf_select_3"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_3" name="dtmf_3" type="text" value="Forward to a department" className="snappy sm-input sm-item-value-department " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_3-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target" id="dtmf_target_3"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_3" name="dtmf_3" type="text" value="L2 Department" className="snappy sm-input sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_3-agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww" data-value="agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww " href="javascript:void(0)" title="Office Main Line">

            Office Main Line
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA " href="javascript:void(0)" title="L1 Department">

            L1 Department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA " href="javascript:void(0)" title="L2 Department">

            L2 Department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM" data-value="agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM " href="javascript:void(0)" title="Support">

            Support
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_3-add_department" data-value="add_department">

          <a className="sm-text sm-item-value-add_department " href="javascript:void(0)" title="+ Create a new department">

            + Create a new department
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_3"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_3"><div><audio className="audio-greeting" preload="none" src="https://dialpad.com/blob/ivr/6244894054416384/target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION"></audio>
<table className="form" id="table_b4e5_6">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="ALLISONSMITH_hotel.mp3" className="snappy sm-input sm-item-value-6244894054416384 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_b4e5_35">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_3" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_3" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_b4e5_36" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_b4e5_37" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_b4e5_38" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_b4e5_19"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target" id="dtmf_group_target_3"><div><a className="wlink" href="/groups/agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-4"></div>
  <div className="iblock" id="dtmf_select_4"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_4" name="dtmf_4" type="text" value="Disabled" className="snappy sm-input sm-item-value-disabled off " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_4-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_4-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_4-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_4-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_4-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_4-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target hide" id="dtmf_target_4"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_4" name="dtmf_4" type="text" value="-select-" className="snappy sm-input sm-item-value- unselected " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_4"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_4"><div><audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available.mp3"></audio>
<table className="form" id="table_b4e5_7">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="Default message" className="snappy sm-input sm-item-value-default " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_b4e5_39">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_4" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_4" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_b4e5_40" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_b4e5_41" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_b4e5_42" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_b4e5_20"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target hide" id="dtmf_group_target_4"><div><a className="wlink" href="/groups/" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-5"></div>
  <div className="iblock" id="dtmf_select_5"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_5" name="dtmf_5" type="text" value="Disabled" className="snappy sm-input sm-item-value-disabled off " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_5-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_5-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_5-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_5-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_5-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_5-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target hide" id="dtmf_target_5"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_5" name="dtmf_5" type="text" value="-select-" className="snappy sm-input sm-item-value- unselected " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_5"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_5"><div><audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available.mp3"></audio>
<table className="form" id="table_b4e5_8">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="Default message" className="snappy sm-input sm-item-value-default " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_b4e5_43">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_5" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_5" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_b4e5_44" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_b4e5_45" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_b4e5_46" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_b4e5_21"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target hide" id="dtmf_group_target_5"><div><a className="wlink" href="/groups/" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-6"></div>
  <div className="iblock" id="dtmf_select_6"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_6" name="dtmf_6" type="text" value="Disabled" className="snappy sm-input sm-item-value-disabled off " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_6-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_6-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_6-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_6-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_6-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_6-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target hide" id="dtmf_target_6"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_6" name="dtmf_6" type="text" value="-select-" className="snappy sm-input sm-item-value- unselected " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_6"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_6"><div><audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available.mp3"></audio>
<table className="form" id="table_b4e5_9">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="Default message" className="snappy sm-input sm-item-value-default " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_b4e5_47">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_6" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_6" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_b4e5_48" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_b4e5_49" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_b4e5_50" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_b4e5_22"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target hide" id="dtmf_group_target_6"><div><a className="wlink" href="/groups/" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-7"></div>
  <div className="iblock" id="dtmf_select_7"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_7" name="dtmf_7" type="text" value="Disabled" className="snappy sm-input sm-item-value-disabled off " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_7-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_7-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_7-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_7-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_7-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_7-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target hide" id="dtmf_target_7"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_7" name="dtmf_7" type="text" value="-select-" className="snappy sm-input sm-item-value- unselected " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_7"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_7"><div><audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available.mp3"></audio>
<table className="form" id="table_b4e5_10">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="Default message" className="snappy sm-input sm-item-value-default " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_b4e5_51">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_7" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_7" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_b4e5_52" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_b4e5_53" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_b4e5_54" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_b4e5_23"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target hide" id="dtmf_group_target_7"><div><a className="wlink" href="/groups/" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-8"></div>
  <div className="iblock" id="dtmf_select_8"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_8" name="dtmf_8" type="text" value="Disabled" className="snappy sm-input sm-item-value-disabled off " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_8-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_8-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_8-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_8-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_8-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_8-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target hide" id="dtmf_target_8"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_8" name="dtmf_8" type="text" value="-select-" className="snappy sm-input sm-item-value- unselected " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_8"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_8"><div><audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available.mp3"></audio>
<table className="form" id="table_b4e5_11">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="Default message" className="snappy sm-input sm-item-value-default " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_b4e5_55">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_8" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_8" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_b4e5_56" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_b4e5_57" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_b4e5_58" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_b4e5_24"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target hide" id="dtmf_group_target_8"><div><a className="wlink" href="/groups/" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-9"></div>
  <div className="iblock" id="dtmf_select_9"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_9" name="dtmf_9" type="text" value="Disabled" className="snappy sm-input sm-item-value-disabled off " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_9-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_9-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_9-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_9-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_9-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_9-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target hide" id="dtmf_target_9"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_9" name="dtmf_9" type="text" value="-select-" className="snappy sm-input sm-item-value- unselected " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_9"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_9"><div><audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available.mp3"></audio>
<table className="form" id="table_b4e5_12">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="Default message" className="snappy sm-input sm-item-value-default " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_b4e5_59">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_9" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_9" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_b4e5_60" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_b4e5_61" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_b4e5_62" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_b4e5_25"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target hide" id="dtmf_group_target_9"><div><a className="wlink" href="/groups/" target="_blank">View department</a>
</div></div>
</div>
<div className="dtmf-sec">
  <div className="mblock dtmf web-icon-s web-icon-s-0"></div>
  <div className="iblock" id="dtmf_select_0"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_0" name="dtmf_0" type="text" value="Forward to a department" className="snappy sm-input sm-item-value-department " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_0-directory" data-value="directory">

          <a className="sm-text sm-item-value-directory " href="javascript:void(0)" title="Dial by name directory">

            Dial by name directory
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-department" data-value="department">

          <a className="sm-text sm-item-value-department " href="javascript:void(0)" title="Forward to a department">

            Forward to a department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-person" data-value="person">

          <a className="sm-text sm-item-value-person " href="javascript:void(0)" title="Forward to a person">

            Forward to a person
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-voicemail" data-value="voicemail">

          <a className="sm-text sm-item-value-voicemail " href="javascript:void(0)" title="Leave a voicemail">

            Leave a voicemail
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-message" data-value="message">

          <a className="sm-text sm-item-value-message " href="javascript:void(0)" title="Recorded message">

            Recorded message
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-disabled" data-value="disabled" data-off="true">

          <a className="sm-text sm-item-value-disabled " href="javascript:void(0)" title="Disabled">

            Disabled
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-target" id="dtmf_target_0"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="dtmf_0" name="dtmf_0" type="text" value="L1 Department" className="snappy sm-input sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-dtmf_0-agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww" data-value="agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww " href="javascript:void(0)" title="Office Main Line">

            Office Main Line
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA " href="javascript:void(0)" title="L1 Department">

            L1 Department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA" data-value="agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPAl6sKDA " href="javascript:void(0)" title="L2 Department">

            L2 Department
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM" data-value="agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM">

          <a className="sm-text sm-item-value-agxzfnViZXItdm9pY2VyFwsSCkNhbGxDZW50ZXIYgIDo85-F0AkM " href="javascript:void(0)" title="Support">

            Support
          </a>
        </li>

        <li className="sm-item" id="sm-item-dtmf_0-add_department" data-value="add_department">

          <a className="sm-text sm-item-value-add_department " href="javascript:void(0)" title="+ Create a new department">

            + Create a new department
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
  <div className="iblock dtmf-person-target hide" id="dtmf_person_target_0"><div className="user-suggest"><div className="mblock auto-suggest">
  <input type="text" placeholder="Find a team member" autocomplete="off" className="user-suggest-input"/>
  <div className="spinner hide"></div>
  <ul className="user-suggest-list hide">
   </ul>
</div>
</div></div>
  <div className="iblock dtmf-message-target hide" id="dtmf_message_target_0"><div><audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available.mp3"></audio>
<table className="form" id="table_b4e5_13">
  <tbody><tr>
    <td colspan="2">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="Default message" className="snappy sm-input sm-item-value-default " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default message">

            Default message
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6244894054416384" data-value="6244894054416384">

          <a className="sm-text sm-item-value-6244894054416384 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6413661472423936" data-value="6413661472423936">

          <a className="sm-text sm-item-value-6413661472423936 " href="javascript:void(0)" title="ALLISONSMITH_hotel.mp3">

            ALLISONSMITH_hotel.mp3
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_b4e5_63">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

      <div id="compact_record_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_0" className="compact_record record-a-greeting web-icon web-icon-s web-icon-s-plus align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Record</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div id="compact_upload_target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENUOPTION_0" className="compact upload-greeting web-icon web-icon-xs web-icon-xs-upload align-web-icon-s-with-select item" ><div className="tooltip simple-trans fade-out tooltip-button"><div className="tooltip-container hide"><div className="tooltip-content">Upload (.mp3)</div><div className="tooltip-callout tooltip-callout-center"></div></div></div></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_b4e5_64" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_b4e5_65" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_b4e5_66" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_b4e5_26"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>
  <div className="iblock dtmf-group-target" id="dtmf_group_target_0"><div><a className="wlink" href="/groups/agxzfnViZXItdm9pY2VyGAsSC09mZmljZUdyb3VwGICAmMPP-vYLDA" target="_blank">View department</a>
</div></div>
</div>
<div className="form-sec-divider"></div>

<div className="body-copy-2 form-block-desc">
  Callers will hear the following greeting when they reach the automated response menu:
</div>
<div id="greeting-view"><div><audio className="audio-greeting" preload="none" src="https://dialpad.com/blob/ivr/6647086741585920/target_agxzfnViZXItdm9pY2VyEwsSBk9mZmljZRiAgKjd55KYCww_MENU"></audio>
<table className="form" id="table_b4e5_14">
  <tbody><tr>
    <td colspan="2" id="td_b4e5_67">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="New Greeting" className="snappy sm-input sm-item-value-6647086741585920 " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default System Greeting">

            Default System Greeting
          </a>
        </li>

        <li className="sm-item" id="sm-item-customivr-6647086741585920" data-value="6647086741585920">

          <a className="sm-text sm-item-value-6647086741585920 " href="javascript:void(0)" title="New Greeting">

            New Greeting
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_b4e5_68">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className=" web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_b4e5_69" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_b4e5_70" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_buttons">

    <td id="td_b4e5_71">
      <div className="record-a-greeting mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>


            <div className="wlink iblock">Record a greeting</div>


      </div>
    </td>

    <td id="td_b4e5_72">
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div className="upload-greeting mblock right icon-text">
        <div className="web-icon web-icon-xs web-icon-xs-upload mblock"></div>
        <div className="wlink iblock">Upload (.mp3)</div>
      </div>
    </td>

    <td></td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_b4e5_73" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_b4e5_27"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div></div></div>
    </div>
  </div>
</div></div></div>

        </div>

      <div className="ccntr-call-handling-subview-holder">
        <div className="header-8">
          Voicemail Greeting
        </div>
        <div className="body-copy-22 ccntr-handling-subheader">
          When a caller is redirected to voicemail, they will hear a voicemail greeting before they leave their voicemail.
        </div>

          <div id="hold-agent-desc" className="body-copy-2">
            Open Hours voicemail greeting:
          </div>
          <div id="voicemail-greeting-view-business-hrs" className="ch-voicemail-view"><div><audio className="audio-greeting" preload="none" src="https://uber-cdn.appspot.com/static/ivr/ubervoice/no_one_is_available_greeting.mp3"></audio>
<table className="form" id="table_b4e5_15">
  <tbody><tr>
    <td colspan="2" id="td_b4e5_74">
      <div className="greetings-select"><div className="select-menu-view"><div className="select-menu snappy  closed ">
  <div className="sm-input-shim" tabindex="0">


    <input id="customivr" name="customivr" type="text" value="Default Greeting" className="snappy sm-input sm-item-value-default " tabindex="-1"/>
  </div>
  <div className="sm-menu"><div></div>
    <ul className="sm-list">

        <li className="sm-item" id="sm-item-customivr-default" data-value="default">

          <a className="sm-text sm-item-value-default " href="javascript:void(0)" title="Default Greeting">

            Default Greeting
          </a>
        </li>

    </ul>
  </div>
</div>
</div></div>
    </td>
    <td className="greetings-icons" id="td_b4e5_75">
      <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
      <div className="hide web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>

    </td>
  </tr>

  <tr className="upload_error hide">
    <td id="td_b4e5_76" colspan="2">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>
  <tr className="delete_error hide">
    <td id="td_b4e5_77" colspan="3">
      <div className="mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
        <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
      </div>
    </td>
    <td>
    </td>
  </tr>

  <tr className="upload_buttons">

    <td id="td_b4e5_78">
      <div className="record-a-greeting mblock icon-text">
        <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>


            <div className="wlink iblock">Record a greeting</div>


      </div>
    </td>

    <td id="td_b4e5_79">
      <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
      <div className="upload-greeting mblock right icon-text">
        <div className="web-icon web-icon-xs web-icon-xs-upload mblock"></div>
        <div className="wlink iblock">Upload (.mp3)</div>
      </div>
    </td>

    <td></td>
  </tr>

  <tr className="upload_status hide">
    <td id="td_b4e5_80" colspan="2">
      <div className="uploading">
        <div className="mblock">
          <div className="mblock spinner"></div>
          <div className="body-copy-2 inline"> Uploading...</div>
        </div>
      </div>
      <div className="upload_complete">
        <div className="mblock">
          <div className="web-icon-s web-icon-s-check mblock" id="div_b4e5_28"></div>
          <div className="body-copy-2 mblock">Success! <span className="wlink upload-greeting">Upload another?</span></div>
        </div>
      </div>
    </td>
  </tr>






</tbody></table></div></div>

      </div>
    </div>

  </div>
</div></div></div>

  </div>

</div></div></div>


</div>
  : undefined
}


<div className="hdrb-loading hide">
  <div className="dialog-loading-img"></div>
</div>
</div></div>



  </td>
);
};

export default BusinessHoursRightPopup;
