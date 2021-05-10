import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { requestTeams } from './teams/reducer'
import { requestRacesBySeason } from './races/reducer'
import { requestLastRace } from './races/reducer'
import { requestDrivers } from './drivers/reducer'
import { requestStandings } from './standings/reducer'

const logger = createLogger()
const rootReducer = combineReducers({
	requestTeams,
	requestRacesBySeason,
	requestLastRace,
	requestDrivers,
	requestStandings,
})
export const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware, logger)
)
