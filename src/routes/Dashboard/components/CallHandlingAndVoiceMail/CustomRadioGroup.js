import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Dropdown from '../../../../components/shared/controls/Dropdown';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

class CustomRadioGroup extends React.Component {
  state = {
    value: ''
  };

  handleChange = event => {
    this.setState({value: event.target.value});
  };

  render() {
    const {classes} = this.props;
    const option2Html = <div className="adv-opt-radio-body">
      <table className="form" id="table_ec1a_0">
        <tbody>
          <tr>
            <td colSpan="2" id="td_ec1a_0">
              <Dropdown dropdownValue={this.props.dropdownValue} selectValue={"TESTING4"} handleChange={this.props.handleChange}/>
            </td>
            <td className="greetings-icons" id="td_ec1a_1">
              <div className=" web-icon-s greeting-play-stop web-icon-s-play align-web-icon-s-with-select item"></div>
              <div className=" web-icon-s greeting-edit web-icon-s-pencil align-web-icon-s-with-select item"></div>
              <div className=" web-icon-s greeting-delete web-icon-s-x align-web-icon-s-with-select item"></div>
            </td>
          </tr>

          <tr className="upload_error hide">
            <td id="td_ec1a_2" colSpan="2">
              <div className="mblock icon-text">
                <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
                <div className="mblock error-msg">Sorry, uploads must be in .mp3 format.</div>
              </div>
            </td>
            <td></td>
          </tr>
          <tr className="delete_error hide">
            <td id="td_ec1a_3" colSpan="3">
              <div className="mblock icon-text">
                <div className="web-icon web-icon-s web-icon-s-exclamation mblock"></div>
                <div className="mblock error-msg">Delete failed, this recording is used elsewhere.</div>
              </div>
            </td>
            <td></td>
          </tr>

          <tr className="upload_buttons">

            <td id="td_ec1a_4">
              <div className="record-a-greeting mblock icon-text">
                <div className="web-icon web-icon-s web-icon-s-plus mblock"></div>

                <div className="wlink iblock">Record a greeting</div>

              </div>
            </td>

            <td id="td_ec1a_5">
              <div className="hide"><input type="file" className="upload-greeting-input" accept="audio/mpeg"/></div>
              <div className="upload-greeting mblock right icon-text">
                <div className="web-icon web-icon-xs web-icon-xs-upload mblock"></div>
                <div className="wlink iblock">Upload (.mp3)</div>
              </div>
            </td>

            <td></td>
          </tr>

          <tr className="upload_status hide">
            <td id="td_ec1a_6" colSpan="2">
              <div className="uploading">
                <div className="mblock">
                  <div className="mblock spinner"></div>
                  <div className="body-copy-2 inline">
                    Uploading...</div>
                </div>
              </div>
              <div className="upload_complete">
                <div className="mblock">
                  <div className="web-icon-s web-icon-s-check mblock" id="div_ec1a_0"></div>
                  <div className="body-copy-2 mblock">Success!
                    <span className="wlink upload-greeting">Upload another?</span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>;

    const option3Html = <div className="adv-opt-radio-body">
      <TextField id="outlined-bare" className={classNames(classes.textField, classes.dense)} defaultValue="Bare" margin="normal" variant="outlined"/>
    </div>;

    const option4Html = <div className="adv-opt-radio-body">
      <Dropdown dropdownValue={this.props.dropdownValue} selectValue={"TESTING4"} handleChange={this.props.handleChange}/>
    </div>;

    return (<div className="call-handling-radio-group">
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup className={classes.group} value={this.state.value} onChange={this.handleChange}>
            <FormControlLabel value="To voicemail" control={<Radio color = "primary" />} label="To voicemail"/>
            <FormControlLabel value="To a message (no voicemail)" control={<Radio color = "primary" />} label="To a message (no voicemail)"/> { this.state.value === 'To a message (no voicemail)' ?  option2Html : ""}
            <FormControlLabel value="To a team member / room phone" control={<Radio color = "primary" />} label="To a team member / room phone"/> { this.state.value === 'To a team member / room phone' ? option3Html : ""}
            <FormControlLabel value="To a department" control={<Radio color = "primary" />} label="To a department"/>
            {this.state.value === 'To a department' ? option4Html : ""}
          </RadioGroup>
        </FormControl>
      </div>
    </div>);
  }
}

CustomRadioGroup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomRadioGroup);
