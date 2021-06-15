import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';

const NoResults = ({ severity = 'info', alertHeader, alertMessage }) => {
  return (
    <Alert
      severity={severity}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        width: '80%',
        margin: '0px auto',
      }}
      icon={false}
    >
      <b style={{ fontSize: '2rem' }}>{alertHeader}</b> <br />
      <br />
      <p style={{ fontSize: '1.5rem' }}>{alertMessage}</p>
    </Alert>
  );
};

NoResults.propTypes = {
  severity: PropTypes.string,
  alertHeader: PropTypes.string.isRequired,
  alertMessage: PropTypes.string.isRequired,
};

export default NoResults;
