import React from 'react';
import './LicensesMarkup.scss';


const LicensesContentComponent = () => {
  return (<div>
    <div className="form form-main">
        <div className="form-block-hd header-2">Licenses</div>
        <div className="form-block info-sec">
            <div>

                <div className="rfloat">
                    <div data-toggle="modal" data-target="#exampleModal1" id="buy-licenses" className="mblock primary-button pancake-btn">
                        Buy Licenses
                    </div>
                </div>

                <div className="header-1">Dialpad Licenses</div>
            </div>

            <table className="user-table">
                <thead>
                    <tr>
                        <th id="th_7e7d_0">License Type</th>

                        <th># Available</th>

                        <th>Total Licenses</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>
                            <div className="mblock body-copy-1">Dialpad Talk</div>
                        </td>

                        <td>0</td>

                        <td>2</td>
                        <td></td>
                        <td></td>
                    </tr>

                </tbody>
            </table>
        </div>

        <div className="form-block info-sec">
            <div>

                <div className="rfloat">

                    <div data-toggle="modal" data-target="#exampleModal2" id="uc-get-started" className="iblock primary-button pancake-btn">Add UberConference</div>

                </div>

                <div className="header-1">UberConference Licenses</div>
            </div>

            <table className="user-table">
                <thead>
                    <tr>
                        <th id="th_7e7d_1">License Type</th>
                        <th># Available</th>
                        <th>Total Licenses</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="mblock body-copy-1">UberConference Local</div>
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="mblock body-copy-1">UberConference Toll-Free</div>
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="form-block info-sec">

            <div className="rfloat">
                <div data-toggle="modal" data-target="#exampleModal3" id="buy-add-ons" className="mblock primary-button pancake-btn">
                    Buy Add-ons
                </div>
            </div>

            <div className="header-1">Add-ons</div>

            <table className="user-table">
                <thead>
                    <tr>
                        <th id="th_7e7d_2">License Type</th>

                        <th># Available</th>

                        <th>Total Licenses</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="mblock body-copy-1">Additional Numbers</div>
                        </td>

                        <td>0</td>

                        <td>0</td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>
                            <div className="mblock body-copy-1">Additional Toll-Free Numbers</div>
                        </td>

                        <td>0</td>

                        <td>0</td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>
                            <div className="mblock body-copy-1">Room Phones</div>
                        </td>

                        <td>0</td>

                        <td>0</td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>
                            <div className="mblock body-copy-1">Toll-Free Room Phones</div>
                        </td>

                        <td>0</td>

                        <td>0</td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>
                            <div className="mblock body-copy-1">Fax Lines</div>
                        </td>

                        <td>0</td>

                        <td>0</td>
                        <td></td>
                        <td></td>
                    </tr>

                </tbody>
            </table>

        </div>

    </div>
</div>);

};

export default LicensesContentComponent;
