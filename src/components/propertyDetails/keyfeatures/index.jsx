import * as React from 'react';

class KeyFeatures extends React.Component {
    render() { 
        const { features } = this.props

        return ( 
            <>
            <p className="keyfeatures-title">Key Features</p>
            <ul className='keyfeatures'>
              {features.map(feature => (
                <li key={feature}>
                  <small>{feature}</small>
                </li>
              ))}
            </ul>
            </>
         );
    }
}
 
export default KeyFeatures;