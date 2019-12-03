import * as React from 'react'


function getSortOrderValue(sortOrder) {
  return sortOrder.replace(' ', '').toLowerCase()
}

function getPropertiesDisplayText(count) {
    if (count > 1 || count === 0) {
        return 'properties'
    }
        return 'property'
}

const DefaultState = {
    priceFrom: '',
    postcode: '',
    sortOrder: '',
    propertyType: '',
    sortOrders: ['Highest First', 'Lowest First']
}

class Filter extends React.Component {
    state = Object.assign({}, DefaultState)

    handleChange = (prop, value) => {
        this.setState({
            [prop]: value
        })
    }

    render() {
        const { priceFrom, postcode, sortOrder, sortOrders, propertyType} = this.state
        const { postcodes, count, updateFilter, propType} = this.props

        return (
                    <form
                    className="filter" 
                    noValidate
                    onChange={() => setTimeout(() => updateFilter(this.state), 0)}
                    >
                        <h2 data-cy="property-count" className="filter__title">
                        {`${count} private ${getPropertiesDisplayText(count)} for sale`}
                        </h2>
                        <p className="filter__head">
                            Refine your Results
                        </p>
                        <div className="row text-center">
                            <div className="col-md-3">
                                <div className="row form-group">
                                    <label className="form-label" htmlFor="price-from">
                                        Price from
                                    </label>
                                    <input
                                    type="number" 
                                    className="form-control" 
                                    min="0" max="10000000" 
                                    id="price-from" 
                                    placeholder="£1,000,000"
                                    value={priceFrom}
                                    onChange={event =>
                                        this.handleChange('priceFrom', Number(event.target.value))
                                    }
                                    />    
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row form-group">
                                    <label htmlFor="postcode" className="form-label">
                                        Postcode
                                    </label>
                                    <select 
                                    id="postcode"
                                    className="form-control"
                                    value={postcode}
                                    onChange={event => this.handleChange('postcode', event.target.value)}
                                    >
                                        <option value="">Sort by Postcode</option>
                                        {postcodes.map(pc => (
                                            <option key={pc} value={pc.toLowerCase()}>
                                                {pc}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row form-group">
                                    <label htmlFor="sortorder" className="form-label">
                                        Sort Order
                                    </label>
                                    <select
                                    id="sortorder"
                                    className="form-control"
                                    value={sortOrder}
                                    onChange={event => this.handleChange('sortOrder', event.target.value)}
                                    >
                                        <option value="">Sort Order</option>
                                        {sortOrders.map(order => (
                                            <option key={order} value={getSortOrderValue(order)}>
                                                {order}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row form-group">
                                    <label htmlFor="type" className="form-label">
                                        Type of Property
                                    </label>
                                    <select
                                    id="type"
                                    className="form-control form__type"
                                    value={propertyType}
                                    onChange={event => this.handleChange('propertyType', event.target.value)}
                                    >
                                        <option value="">Choose...</option>
                                        {propType.map(type => (
                                            <option key={type} value={type.toLowerCase()}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <button
                                data-cy="clear button"
                                className="mx-auto btn btn--clear-filter"
                                type="button"
                                onClick={() => {
                                    this.setState(Object.assign({}, DefaultState))
                                    updateFilter({})
                                }}
                            >
                                Clear
                            </button>  
                        </div>                          
                            
                    </form>
        )
    }
}

export default Filter;