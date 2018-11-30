import { connect } from 'react-redux';
import MaterialsUI from './Materials';
import TechniquesUI from './Techniques';
import DrawingTypeUI from './DrawingType';
import TapestryTypeUI from './TapestryType';
import TapestryMaterialsUI from './TapestryMaterials';
import { setFilter, chooseFilter } from '../../../actions/actions';

export const materials = connect(
	store =>
		({
			filter: store.filters.filter(filter => filter.name == 'materials'),
			active_filter: store.active_filter
		}),
	dispatch =>
		({
			handle_change(name, value) {
				dispatch(setFilter(name, value))
			},
			handle_filter_change(name) {
				dispatch(chooseFilter(name));
			}
		})
)(MaterialsUI);

export const techniques = connect(
	store =>
		({
			filter: store.filters.filter(filter => filter.name == 'techniques'),
			active_filter: store.active_filter
		}),
	dispatch =>
		({
			handle_change(name, value) {
				dispatch(setFilter(name, value))
			},
			handle_filter_change(name) {
				dispatch(chooseFilter(name));
			}
		})
)(TechniquesUI);

export const drawing_type = connect(
	store =>
		({
			filter: store.filters.filter(filter => filter.name == 'drawing_type'),
			active_filter: store.active_filter
		}),
	dispatch =>
		({
			handle_change(name, value) {
				dispatch(setFilter(name, value))
			},
			handle_filter_change(name) {
				dispatch(chooseFilter(name));
			}
		})
)(DrawingTypeUI);

export const product_type = connect(
	store =>
		({
			filter: store.filters.filter(filter => filter.name == 'product_type'),
			active_filter: store.active_filter
		}),
	dispatch =>
		({
			handle_change(name, value) {
				dispatch(setFilter(name, value))
			},
			handle_filter_change(name) {
				dispatch(chooseFilter(name));
			}
		})
)(TapestryTypeUI);

export const product_materials = connect(
	store =>
		({
			filter: store.filters.filter(filter => filter.name == 'product_materials'),
			active_filter: store.active_filter
		}),
	dispatch =>
		({
			handle_change(name, value) {
				dispatch(setFilter(name, value))
			},
			handle_filter_change(name) {
				dispatch(chooseFilter(name));
			}
		})
)(TapestryTypeUI);
