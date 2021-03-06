import React from 'react';
import cx from 'classnames'
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import { VISIBILITY_FILTERS } from '../constants';

const VisibilityFilters = ({ activeFilter, setFilter }) => {
    return (
        <div className="visibility-filter">
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return (
                    <span
                        key={`visibility-filter-${currentFilter}`}
                        className={cx(
                            "filter",
                            currentFilter === activeFilter && "filter--active"
                        )}
                        onClick={() => {
                            setFilter(currentFilter);
                        }}
                    >
                        {currentFilter}
                    </span>
                );
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {activeFilter: state.VisibilityFilters};
};

export default connect(
    mapStateToProps,
    {setFilter}
)(VisibilityFilters);