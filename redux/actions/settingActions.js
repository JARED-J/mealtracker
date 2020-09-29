import {
    GET_SETTINGS,
    UPDATE_SETTINGS
} from './types';
import { getSettings, updateSettings} from '../../db/settingQueries';

// Action creators
const getSettingsA = settings => ({
    type: GET_SETTINGS, payload: settings
})

const updateSettingsA = settings => ({
    type: UPDATE_SETTINGS, payload: settings
})

export const getSettingsThunk = () => dispatch => {
    getSettings()
        .then(settings => dispatch(getSettingsA(settings)))
        .catch(err => console.log(err));
}

export const updateSettingsThunk = settings => dispatch => {
    updateSettings(settings)
        .then(dbSettings => dispatch(updateSettingsA(dbSettings)))
        .catch(err => console.log(err));
}
