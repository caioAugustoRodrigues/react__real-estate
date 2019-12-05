import * as React from 'react';

class KeyFeatures extends React.Component {
    render() { 
        const { features } = this.props

        return ( 
            <React.Fragment>
            <p className="keyfeatures-title">Key Features</p>
            <ul className='keyfeatures-content'>
              {features.map(feature => (
                <li key={feature}>
                  <h6>- {feature}</h6>
                </li>
              ))}
            </ul>
            </React.Fragment>
         );
    }
}
 
export default KeyFeatures;