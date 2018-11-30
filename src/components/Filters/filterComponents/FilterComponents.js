import { connect } from 'react-redux';
import MaterialsUI from './Materials';
// import Technique from './Technique';
import { setFilter, chooseFilter  } from '../../../actions/actions';

export const materials = connect(
	store => 
		({
			filter: store.filters.filter(filter =>  filter.name == 'materials'),
			active_filter: store.active_filter
		}),
	dispatch => 
		({
			handle_change(name, value){
				dispatch(setFilter(name, value))
			},
			handle_filter_change(name){
				dispatch(chooseFilter(name));
			}
		})
)(MaterialsUI);
