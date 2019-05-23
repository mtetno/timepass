import React from 'react';
import './ExecutiveAssistance.scss';
const logo = require("../../../../styles/img/executive-assitance.png");

class ExecutiveAssistance extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      executiveAssistance: false
    };
  }

  _toggleDiv() {
    this.setState({
      executiveAssistance: !this.state.executiveAssistance
    });
  }

  render() {
    return (<div className="assistant-forwarding-view-holder">
      <div>
        <div className="web-admin-section closed">
          <div className="web-admin-section-header" onClick={(e) => this._toggleDiv()}>
            <div className="web-admin-section-icon icon-holder mblock">
              <img src={logo} className="logo-size"/>
            </div>
            <div className="header-2 web-admin-section-title mblock">

              Executive-Assistant

            </div>
            <div className="web-admin-section-expander snappy icon-holder mblock"></div>
          </div>

          {
            this.state.executiveAssistance
              ? <div className="web-admin-section-child-view-holder">
                  <div className="web-admin-section-child-view " id="execAssistant">

                    <div>
                      <div className="form form-block">
                        <div className="body-copy-2 form-block-desc">
                          Assistants take incoming calls for others. When enabled, any incoming calls to the designated 'executive' will also ring the 'assistant'.
                          <a href="https://help.dialpad.com/hc/en-us/articles/210472363" className="wlink">Learn more</a>.
                        </div>

                        <div className="assistant-forwarding-list">
                          <div>
                            <div className="assistant-forwarding-header">

                              Your assistants

                            </div>

                            <table className="assistant-forwarding-request-list"></table>

                            <div className="add-yourself-as-assistant-inputs">
                              <div>
                                <div className="add-yourself-as-assistant-input-holder">
                                  <div className="add-yourself-as-assistant-input">
                                    <div className="user-suggest">
                                      <div className="mblock auto-suggest">
                                        <input type="text" placeholder="Select someone from your team" autocomplete="off" className="user-suggest-input"/>
                                        <div className="spinner hide"></div>
                                        <ul className="user-suggest-list hide"></ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="rfloat assistant-forwarding-button-wrapper">
                                    <span className="assistant-forwarding-send-request wlink hide">Send Request</span>
                                    <span className="assistant-forwarding-remove-request wlink">
                                      <span className="body-copy-2">Cancel</span>
                                    </span>
                                  </div>
                                  <div className="hide add-yourself-as-assistant-error error-msg"></div>
                                </div>
                              </div>
                              <div>
                                <div className="add-yourself-as-assistant-input-holder">
                                  <div className="add-yourself-as-assistant-input">
                                    <div className="user-suggest">
                                      <div className="mblock auto-suggest">
                                        <input type="text" placeholder="Select someone from your team" autocomplete="off" className="user-suggest-input"/>
                                        <div className="spinner hide"></div>
                                        <ul className="user-suggest-list hide"></ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="rfloat assistant-forwarding-button-wrapper">
                                    <span className="assistant-forwarding-send-request wlink hide">Send Request</span>
                                    <span className="assistant-forwarding-remove-request wlink">
                                      <span className="body-copy-2">Cancel</span>
                                    </span>
                                  </div>
                                  <div className="hide add-yourself-as-assistant-error error-msg"></div>
                                </div>
                              </div>
                            </div>

                            <div className="add-yourself-as-assistant mblock icon-text">
                              <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>
                              <div className="wlink iblock">

                                Add an assistant

                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="executive-receiving-list">
                          <div>
                            <div className="assistant-forwarding-header">

                              Your executives (people that you assist)

                            </div>

                            <table className="assistant-forwarding-request-list"></table>

                            <div className="add-yourself-as-assistant-inputs">
                              <div>
                                <div className="add-yourself-as-assistant-input-holder">
                                  <div className="add-yourself-as-assistant-input">
                                    <div className="user-suggest">
                                      <div className="mblock auto-suggest">
                                        <input type="text" placeholder="Select someone from your team" autocomplete="off" className="user-suggest-input"/>
                                        <div className="spinner hide"></div>
                                        <ul className="user-suggest-list hide"></ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="rfloat assistant-forwarding-button-wrapper">
                                    <span className="assistant-forwarding-send-request wlink hide">Send Request</span>
                                    <span className="assistant-forwarding-remove-request wlink">
                                      <span className="body-copy-2">Cancel</span>
                                    </span>
                                  </div>
                                  <div className="hide add-yourself-as-assistant-error error-msg"></div>
                                </div>
                              </div>
                            </div>

                            <div className="add-yourself-as-assistant mblock icon-text">
                              <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>
                              <div className="wlink iblock">

                                Add an executive

                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              : <div></div>
          }

          <div className="web-admin-section-bottom"></div>
        </div>
      </div>
    </div>);
  }

}

export default ExecutiveAssistance;
