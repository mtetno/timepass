import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import autobind from 'autobind-decorator';
import {browserHistory} from 'react-router';
import actions from '../modules/actions';
import OfficeSettingsMarkup from '../components/OfficeSettingsMarkup';

class OfficeSettingsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false
    };
  }

  componentDidMount() {}

  render() {
    return (<OfficeSettingsMarkup/>);
  }

  _apiCalls(inputData) {}

}

OfficeSettingsContainer.propTypes = {
  actions: PropTypes.shape({}),
  appState: PropTypes.object
};

const mapStateToProps = (state) => ({appState: state.dashboard}),
  mapDispatchToProps = (dispatch) => {
    const {getEvents} = actions;

    return {
      actions: bindActionCreators({
        getEvents
      }, dispatch)
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(OfficeSettingsContainer);
