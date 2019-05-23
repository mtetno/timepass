import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import autobind from 'autobind-decorator';
import {browserHistory} from 'react-router';
import actions from '../modules/actions';
import AccountMarkup from '../components/AccountMarkup';

class AccountContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false
    };
  }

  componentDidMount() {
    this.props.actions.fetchAccounts(this.props.accessToken);
  }

  render() {
    return (<AccountMarkup accounts={this.props.accounts ? this.props.accounts.data : {} }/>);
  }

}

AccountContainer.propTypes = {
  actions: PropTypes.shape({}),
  accounts: PropTypes.object
};

const mapStateToProps = (state) => ({accounts: state.accounts , accessToken : state.login.data.access_token}),
  mapDispatchToProps = (dispatch) => {
    const {fetchAccounts} = actions;

    return {
      actions: bindActionCreators({
        fetchAccounts
      }, dispatch)
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
