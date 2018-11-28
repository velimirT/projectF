import { connect } from 'react-redux';
import Filters from './Filters';
// import Technique from './Technique';
import { setFilter, chooseFilter } from '../../actions/actions';

const FiltersUI = connect(
	store => 
		({
			filters: store.filters
		}),
	dispatch => 
		({
			choose_filter(id){
				dispatch(chooseFilter(id))
			}
		})
)(Filters);


export default FiltersUI;