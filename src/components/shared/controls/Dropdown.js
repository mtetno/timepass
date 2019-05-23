import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 280
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectValue: ''
    };

    this.onHandle = this.onHandle.bind(this);

  }

  componentDidMount() {
    this.setState({selectValue: this.props.selectValue});
  }

  onHandle = (e) => {
    this.setState({selectValue: e.target.value});
    this.props.handleChange();
  }

  render() {
    const {classes} = this.props;

    return (<FormControl variant="outlined" className={classes.formControl}>
      <Select value={this.state.selectValue} onChange={this.onHandle} input={<OutlinedInput
        labelWidth = {
          0
        }
        id = "outlined-age-simple"
        />}>
        {
          this.props.dropdownValue
            ? this.props.dropdownValue.map((item) => <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>)
            : ""
        }

      </Select>
    </FormControl>);
  }
}

Dropdown.propTypes = {
  classes: PropTypes.object.isRequired,
  selectValue: PropTypes.string,
  dropdownValue: PropTypes.array
};

export default withStyles(styles)(Dropdown);
