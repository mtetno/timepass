import React from 'react';
import './VoiceAI.scss';
const voiceAiLogo = require("../../../../styles/img/voice-ai.png");

class VoiceAI extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      voiceAiSettingToggle: false
    };
  }

  toggleDiv() {
    this.setState({
      voiceAiSettingToggle: !this.state.voiceAiSettingToggle
    });
  }

  render() {
    return (<div className="voiceai-user-settings">
      <div>
        <div className="web-admin-section closed">
          <div className="web-admin-section-header" onClick={(e) => this.toggleDiv()}>
            <div className="web-admin-section-icon icon-holder mblock">
              <img src={voiceAiLogo} className="logo-size"/>
            </div>
            <div className="header-2 web-admin-section-title mblock">

              VoiceAI Settings

            </div>
            <div className="web-admin-section-expander snappy icon-holder mblock"></div>
          </div>

          {
            this.state.voiceAiSettingToggle
              ? <div className="web-admin-section-child-view-holder">
                  <div className="web-admin-section-child-view" id="voiceAiSettings">

                    <div>
                      <div id="voice-ai-toggle" className="form-block-third company-voiceai-settings">
                        <div>
                          <div>
                            <div className="mblock vai-toggle">
                              <div className="vai-toggle-circle"></div>
                            </div>
                            <div className="mblock" id="div_d626_0">
                              <div className="mblock vai-header">
                                VoiceAI
                              </div>
                              <div className="mblock vai-tag" id="div_d626_1">
                                New!
                              </div>
                            </div>
                          </div>
                          <div className="vai-description">

                            Get a robust call summary and transcription.

                          </div>
                        </div>
                      </div>

                      <div id="custom-phrase" className="border-box">
                        <div>
                          <div className="custom-phrase">
                            <div className="custom-phrase-title header-1">Company Dictionary</div>
                            <div className="custom-phrase-subtitle">
                              <span className="body-copy-2">

                                Teach VoiceAI to recognize new words. For example: brand names, acronyms, or jargon that’s specific to your organization. Please note that it may take 7-10 business days for the update to appear. More information can be found on the

                              </span>
                              <span>
                                <a className="wlink" href="https://help.dialpad.com/hc/en-us/articles/360022554371" target="_blank">Dialpad helpedesk</a>
                              </span>
                              <span className="body-copy-2">
                                .
                              </span>
                            </div>
                            <div className="custom-phrase-table-wrapper">
                              <table className="user-table custom-phrase-table">
                                <thead>
                                  <tr>
                                    <th>KEYWORDS</th>
                                    <th>CATEGORY</th>
                                    <th>
                                      <span>
                                        PRONUNCIATION</span>
                                      <span id="span_d626_0">
                                        HINT
                                        <div className="web-icon web-icon-xs web-icon-xs-info mblock pronunciation-help">
                                          <div className="tooltip simple-trans fade-out">
                                            <div className="tooltip-container hide">
                                              <div className="tooltip-content">Show VoiceAI how to pronounce this.<br/>For example, “UberConference” would<br/>be “OoberConference”, and “2 x 4”<br/>would be “two by four”.</div>
                                              <div className="tooltip-callout tooltip-callout-center"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </span>
                                    </th>
                                    <th className="custom-phrase-right-column"></th>
                                  </tr>
                                </thead>
                              </table>
                              <div id="custom-phrase-list-container" className="snappy">
                                <div className="list-container">
                                  <div id="custom-phrase-list">
                                    <table className="user-table custom-phrase-table">
                                      <tbody id="custom-phrase-list-rows"></tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>

                              <div className="add-custom-phrase-inputs custom-phrase-add-scroll">
                                <div>
                                  <form className="form">
                                    <table id="custom-phrase-input-form-el" className="user-table custom-phrase-table  custom-phrase-add-row">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <div className="custom-phrase-form-input">
                                              <div className="validated-input ">
                                                <input className="rtr-rightbar-form-input" type="text" name="phrase" value="test" placeholder="Add keyword"/>

                                              </div>
                                            </div>
                                          </td>

                                          <td>
                                            <div className="validated-input ">
                                              <div id="custom-phrase-input-form-category">
                                                <div className="select-menu-view">
                                                  <div className="select-menu snappy closed">
                                                    <div className="sm-input-shim" tabindex="0">

                                                      <input type="text" value="Company Name" className="snappy sm-input sm-item-value-company rtr-rightbar-form-dropdown" placeholder="Choose" tabindex="-1"/>
                                                    </div>
                                                    <div className="sm-menu">
                                                      <div></div>
                                                      <ul className="sm-list">

                                                        <li className="sm-item" id="sm-item--company" data-value="company">

                                                          <a className="sm-text sm-item-value-company " href="javascript:void(0)" title="Company Name">

                                                            Company Name
                                                          </a>
                                                        </li>

                                                        <li className="sm-item" id="sm-item--product" data-value="product">

                                                          <a className="sm-text sm-item-value-product " href="javascript:void(0)" title="Product/Feature Name">

                                                            Product/Feature Name
                                                          </a>
                                                        </li>

                                                        <li className="sm-item" id="sm-item--competitor" data-value="competitor">

                                                          <a className="sm-text sm-item-value-competitor " href="javascript:void(0)" title="Competitor Name">

                                                            Competitor Name
                                                          </a>
                                                        </li>

                                                        <li className="sm-item" id="sm-item--partner" data-value="partner">

                                                          <a className="sm-text sm-item-value-partner " href="javascript:void(0)" title="Partner Name">

                                                            Partner Name
                                                          </a>
                                                        </li>

                                                        <li className="sm-item" id="sm-item--terminology" data-value="terminology">

                                                          <a className="sm-text sm-item-value-terminology " href="javascript:void(0)" title="Industry Terminology">

                                                            Industry Terminology
                                                          </a>
                                                        </li>

                                                        <li className="sm-item" id="sm-item--acronyms" data-value="acronyms">

                                                          <a className="sm-text sm-item-value-acronyms " href="javascript:void(0)" title="Acronyms">

                                                            Acronyms
                                                          </a>
                                                        </li>

                                                        <li className="sm-item" id="sm-item--common_word" data-value="common_word">

                                                          <a className="sm-text sm-item-value-common_word " href="javascript:void(0)" title="Common Word/Phrase">

                                                            Common Word/Phrase
                                                          </a>
                                                        </li>

                                                        <li className="sm-item" id="sm-item--other" data-value="other">

                                                          <a className="sm-text sm-item-value-other " href="javascript:void(0)" title="Other Jargon">

                                                            Other Jargon
                                                          </a>
                                                        </li>

                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>

                                            </div>
                                          </td>

                                          <td>
                                            <div className="custom-phrase-form-input">
                                              <div className="validated-input ">
                                                <input className="rtr-rightbar-form-input" type="text" name="pronunciation" placeholder="Add hint" value=""/>

                                              </div>
                                            </div>
                                          </td>

                                          <td className="custom-phrase-right-column">
                                            <button id="custom-phrase-input-form-submit" className="custom-phrase-submit-button custom-phrase-right-align" type="submit">
                                              ADD KEYWORD
                                            </button>
                                            <button id="custom-phrase-input-form-cancel" className="custom-phrase-cancel-button custom-phrase-right-align wlink">
                                              Cancel
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </form>
                                </div>
                              </div>
                              <div className="form-list-add custom-phrase-add-keyword">
                                <div className="custom-phrase-disabled">
                                  <div className="add-custom-phrase mblock icon-text">
                                    <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>
                                    <p className="wlink iblock">Add a keyword</p>
                                  </div>
                                </div>
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

export default VoiceAI;
