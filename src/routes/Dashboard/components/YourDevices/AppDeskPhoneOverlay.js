import React from 'react';
import './YourDevices.scss';





const AppDeskPhoneOverlay = ({dialog}) => {
return (
  <div>
  <div id="app" className="overlay">
<div id="overlay" className="snappy app-rightbar-none app-footer-none app-subheader-default app-sidebar-none app-header-default app-overlay-dialog">

{dialog}

</div>


<div id="wizard-overlay" className="snappy"></div>
</div>
</div>
);
}
export default AppDeskPhoneOverlay;
