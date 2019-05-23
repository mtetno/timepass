import React from 'react';
import './PhonesMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader';


const PhonesMarkup = () => {
  return (<div id="phones-view" className="scroll-y rel">
    <form className="form form-main">

        <table id="room-phones-desc" className="graphic-desc">

            <tbody>
                <tr>
                    <th>
                        <div className="web-icon-xl web-icon-xl-deskphone"></div>
                    </th>
                    <td className="body-copy-2">
                        <div>
                            <span className="body-copy-1">Room Phones</span> are perfect for shared company spaces such as conference rooms, reception areas, or phone booths. They are not associated with a user account. <a href="https://help.dialpad.com/hc/en-us/articles/208868186" className="wlink" target="_blank">Learn more</a>
                        </div>
                    </td>
                </tr>

                <tr>
                    <th>
                        <div className="web-icon-xl web-icon-xl-people"></div>
                    </th>
                    <td className="body-copy-2">
                        <div>
                            <span className="body-copy-1">User Phones</span> are desktop phones assigned to one of your team members. When their Dialpad number is called, that user phone will ring. Team members can also configure their phones from the “Connected Devices” section of their phone settings. <a href="https://help.dialpad.com/hc/en-us/articles/208867946" className="wlink" target="_blank">Learn more</a>
                        </div>
                    </td>
                </tr>

                <tr>
                    <th></th>
                    <td><a href="/orders" className="wlink" target="_blank">Buy phones or learn more about compatible devices</a></td>
                </tr>

            </tbody>
        </table>

        <div className="sec-tabs">
            <div id="user-phones-tab" className="sec-tab-selected">User Phones</div>

            <div id="room-phones-tab">Room Phones</div>

        </div>
        <div id="user-phones-view">
            <div>
                <div id="phones-frame">
                    <div id="phones-header" className="body-copy-1 rel">
                        <div className="iblock" id="phones-count-view">
                            <div>
                                <div id="div_8e86_0">0 Phones</div>
                            </div>
                        </div>
                        <div className="iblock">
                            <div className="web-search">
                                <div className="web-icon-xs web-icon-xs-search"></div>
                                <input type="text" placeholder="" autoComplete="off" id="input_8e86_0" className="web-search team-search-input"/>
                                <div id="user-spinner" className="spinner hide"></div>
                            </div>
                        </div>
                        <div className="right-actions">

                            <div data-toggle="modal" data-target="#exampleModal1" id="add-phone" className="primary-button pancake-btn iblock">

                                Add a user phone

                            </div>

                        </div>
                    </div>
                    <div id="phones-browse-view">
                        <div className="list-container">
                            <table className="user-table">
                                <thead>
                                    <tr>
                                        <th className="user-table-name">Name</th>
                                        <th>Phone number</th>
                                        <th>Phone name</th>
                                        <th>MAC address</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="phones-list">

                                </tbody>
                            </table>
                            <div className="table-loading"></div>
                            <div id="phones-browse-empty"></div>
                        </div>
                    </div>
                    <div id="phones-suggest-view">
                        <div>
                            <table className="user-table">
                                <thead>
                                    <tr>
                                        <th className="user-table-name">Name</th>
                                        <th>Phone number</th>
                                        <th>Phone name</th>
                                        <th>Obi Number</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="users-suggest-list">

                                </tbody>
                            </table>
                            <div id="user-phones-suggest-empty">
                                <div>
                                    <div className="form form-main center empty-view">
                                        <div>
                                            <div className="center web-icon-xxxl web-icon-xxxl-obi1032"></div>
                                        </div>
                                        <div className="header-2" id="div_8e86_1">User Phones</div>
                                        <div className="body-copy-2" id="div_8e86_2">

                                            User Phones can be configured for individual team members. Note that you must already
                                            <br/> have purchased and received a desk phone from Dialpad before starting the process.
                                            <br/> Your team members can also configure phones themselves from the “connected devices"
                                            <br/> section of their phone settings.

                                            <a href="https://dialpad.zendesk.com/hc/en-us/articles/208867946" className="wlink">Learn more</a>
                                        </div>

                                        <div id="div_8e86_3">
                                            <div id="add-user-phone" className="mblock primary-button">Add a User Phone</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="phones-empty-view" className="hide">
                    <div>
                        <div className="form form-main center empty-view">
                            <div>
                                <div className="center web-icon-xxxl web-icon-xxxl-obi1032"></div>
                            </div>
                            <div className="header-2" id="div_8e86_4">User Phones</div>
                            <div className="body-copy-2" id="div_8e86_5">

                                User Phones can be configured for individual team members. Note that you must already
                                <br/> have purchased and received a desk phone from Dialpad before starting the process.
                                <br/> Your team members can also configure phones themselves from the “connected devices"
                                <br/> section of their phone settings.

                                <a href="https://dialpad.zendesk.com/hc/en-us/articles/208867946" className="wlink">Learn more</a>
                            </div>

                            <div id="div_8e86_6">
                                <div id="add-user-phone" className="mblock primary-button">Add a User Phone</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="room-phones-view" className="hide"></div>

    </form>
</div>);
};

export default PhonesMarkup;
