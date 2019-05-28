import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import '../commonStyle.scss';
import ReactDOM from 'react-dom';

const styles = {
  root: {
    width: 600,
  },
  slider: {
    padding: '22px 0px',
  },
};

class SimpleSlider extends React.Component {


  // componentWillReceiveProps(newProps) {
  //
  //   this.setState({value: parseInt(newProps.value) });
  // }


  componentDidMount(){

  }



  render() {
    const { classes,value } = this.props;

  const styelVal =  value*5 + "px";
    return (

      <div className={classes.root}>

        <Typography id="label"> Duration : {value} </Typography>
        {
        //<div style={{ marginLeft : styelVal }}    >{value}</div>
        }
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          min={10}
          max={45}
          aria-labelledby="label"
          onChange={this.props.onSliderChange}
        />
        <div className="rs-min">10s</div>
        <div className="rs-max">45s</div>
      </div>
    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSlider);
