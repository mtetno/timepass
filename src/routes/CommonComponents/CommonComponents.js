import React from 'react';



const editCallHandlingVoiceMailName = (onDismissCallHandlingEditName,onSaveCallHandlingEditName,onChangeCallHandlingEditVoiceMailName,callHandlingEditVoiceMailName,type) => {
  return (<div id="dialog">
    <table className="h100">
        <tbody>
            <tr>
                <td id="dialog-holder" className="center ">
                    <div id="dialog-wrapper" className="iblock left">
                        <div className="web-icon-xs web-icon-xs-x dialog-close signup2017"></div>
                        <div id="dialog-main" className="iblock left">
                            <div>
                                <div id="dialog-header">
                                    <div className="dialog-header">
                                        <div id="dialog-header" className="center header-5 ">

                                            Rename your greeting

                                        </div>
                                        <div id="dialog-description" className="center description"></div>

                                        <div className="web-icon-xs web-icon-xs-x dialog-close" onClick={onDismissCallHandlingEditName}></div>

                                    </div>
                                </div>
                                <div className="dialog-view">

                                    <div className="form" id="edit-greeting-form">
                                        <table className="greeting-details">
                                            <tbody>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>
                                                        <input name="name" id="greeting-name" type="text"   value={callHandlingEditVoiceMailName} onChange={onChangeCallHandlingEditVoiceMailName}/>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>

                                        <div className="center">
                                            <div id="save-greeting" className="iblock primary-button" onClick={(e)=>onSaveCallHandlingEditName(type)}>Save</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="dialog-loading">
                            <div className="dialog-loading-bg"></div>
                            <div className="dialog-loading-img"></div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>);
}


export {

   editCallHandlingVoiceMailName,
   
}
