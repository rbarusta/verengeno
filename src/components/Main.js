require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import GoogleDocsViewer from 'react-google-docs-viewer'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <GoogleDocsViewer
          width="600px"
          height="780px"
          fileUrl="https://www.dropbox.com/s/joh5s8obu26o83r/catCFDI%20%282%29.xls?dl=0"
        />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
