import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const GlobalCss = withStyles({
    '@global': {
      '.MuiLinearProgress-root': {
        height: '23px',
      },
    },
  })(() => null);

function LinearDeterminate(props) {

    console.log(props.value); // just for checking value 
    
  const classes = useStyles();
  const [progressValue, setProgressValue] = React.useState(0);

  React.useEffect(() => {
    setProgressValue(props.value);
  }, []);

  return (
    <div className={classes.root}>
      <GlobalCss />
      <LinearProgress color="secondary" variant="determinate" value={progressValue} />
    </div>
  );
}

export default LinearDeterminate;

