import {GET_TRENDS} from './types';
import {getTrends} from '../../db/trendQueries';

const getTrendsA = trends => ({
    type: GET_TRENDS, payload: trends
});

export const getTrendsThunk = () => dispatch => {
    getTrends()
        .then(trends => dispatch(getTrendsA(trends)))
        .catch(err => console.log(err));
}
