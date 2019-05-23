import React from 'react';
import './PrivacyMarkup.scss';
import DashboardSideHeader from '../../../components/shared/DashboardSideHeader';
import DashboardMiddleHeader from '../../../components/shared/DashboardMiddleHeader';

const PrivacyContentComponent = () => {
  return (<div><div className="form form-main">
  <div id="company_amendments"><div id="amendments"><div className="form-block-hd header-2 form-block-hd-with-border">
  Security &amp; Privacy Additional Terms
</div>
<label>Review and accept additional terms</label>
<div className="form form-block" id="div_5767_0">
    <table className="user-table company-amendment-list">
      <thead>
        <tr>
          <th>Amendment</th>
          <th>Reviewed</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody id="amendment-list">
     <tr><td>
  Data Protection &amp; Processing Addendum</td>
<td>-</td>

<td>
  <a className="review-amendment wlink" id="a_5767_0" data-toggle="modal" data-target="#exampleModal2">Review and Accept</a>
</td>
</tr></tbody>
    </table>
</div>
</div></div>
  <div id="representatives"><div><div className="form-block-hd header-2 form-block-hd-with-border">
  Representatives
</div>
<div>
<label>Manage your company's representatives</label>
<div className="form form-block form-block-hd-with-border">
  <div className="body-copy-1 dialog-sec-desc">
    Your EU Representative
  </div>

  <div id="eu-button" className="primary-button iblock" data-toggle="modal" data-target="#exampleModal3">Add EU Representative</div>

</div>
<div className="form form-block form-block-hd-with-border">
  <div className="body-copy-1 dialog-sec-desc">
    Your data protection officer
  </div>

  <div data-toggle="modal" data-target="#exampleModal4" id="dpo-button" className="primary-button iblock">Add Data Protection Officer</div>

</div>
</div></div></div>
</div></div>);
};

export default PrivacyContentComponent;
