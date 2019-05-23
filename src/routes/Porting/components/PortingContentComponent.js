import React from 'react';
import './PortingMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader';

const PortingContentComponent = () => {
  return (<div>
    <div id="porting-overview">
        <div id="porting-overview-heading">
            <div className="rfloat" id="div_edc1_0">
                <div id="batch-new-numbers-button" className="master-button">

                    + New Port Request

                </div>
            </div>
            <div className="header-2">Number Porting</div>
        </div>

        <div className="porting-section-splitter"></div>

        <p id="porting-overview-summary" className="header-1">
            Number porting allows you to port numbers from an existing carrier to Dialpad.
        </p>
        <p className="porting-subtext red-copy-1">

            Please note, port requests for customers based outside of the US or in Hawaii must <a href="/contact-support" className="wlink" target="_blank" id="a_edc1_0">contact support</a> for all porting requests. This also applies when porting toll-free numbers.

        </p>
    </div>

    <div id="porting-batch-input-view">
        <div>
            <div id="batch-numbers-wrapper" className="">

                <div className="header-2">New Port Request</div>

                <div className="porting-section-splitter"></div>

                <div className="form">
                    <div className="porting-form-header">
                        <p className="header-1">
                            Enter up to 100 phone numbers you'd like to port, separated by commas or new lines.
                            <br/> If you need to port more than 100 numbers, please <a href="/contact-support" className="wlink" target="_blank" id="a_edc1_1">contact support</a>.
                        </p>
                        <p id="porting-batch-example" className="body-copy-22">For example: 1 (555) 555-9876,+1 555-555-1234,15554567891</p>
                    </div>
                    <textarea id="porting-batch-input-textarea" placeholder="Enter numbers here"></textarea>
                </div>

                <div id="div_edc1_1">
                    <div id="batch-numbers-button" className="iblock master-button">Batch Numbers</div>
                    <div id="div_edc1_2" className="iblock">

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="form form-main">
        <div className="form-block-hd">
            <div id="pending-port-header" className="header-2">Pending Port Requests</div>
        </div>
        <div className="porting-section-splitter"></div>

    </div>

    <div>
        <div id="porting-port-requests-view">
            <div className="list-container">
                <div id="no-batches" className="header-4">

                    You have no batching/pending port requests.

                </div>
                <div id="port-request-list-wrapper" className="hide">
                    <table>
                        <thead>

                            <tr>
                                <td>
                                    <div id="prl-header-wrapper" className="body-copy-22">
                                        <div id="div_edc1_3">Showing All Batches</div>
                                    </div>
                                </td>
                            </tr>

                        </thead>
                        <tbody id="port-request-list"> </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="header-2" id="div_edc1_4">Completed ports</div>
        <div id="porting-completed-ports-view">
            <div className="list-container">
                <div id="no-batches" className="header-4">

                    You have no completed port requests.

                </div>
                <div id="port-request-list-wrapper" className="hide">
                    <table>
                        <thead>

                        </thead>
                        <tbody id="port-request-list"> </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>);
};

export default PortingContentComponent;
