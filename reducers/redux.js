

const redux = require('redux')
// const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const STATUS_FIRST = 'EN PROCESO'
const STATUS_FINAL = 'SUCEED'
const STEP_FIRST='INICIO'
const STEP_FINAL='FINALIZANDO'


const initialState = {
    state: 'cargando'
  }

  const initialStep = {
    step: 'iniciando'
  }

const stateReducer = (state = initialState, action) => {
    switch (action.type) {
      case STATUS_FIRST:
        return {
          ...state,
          state: 'procesando'
        }
      case STATUS_FINAL:
        return {
          ...state,
          state: "procesado"
        }
      default:
        return state
    }
  }


  const stepReducer = (state = initialStep, action) => {
    switch (action.type) {
      case STEP_FIRST:
        return {
          ...state,
          step: 'estado iniciado'
        }
      case STEP_FINAL:
        return {
          ...state,
          step: "full"
        }
      default:
        return state
    }
  }
  function orderStatus() {
    return {
      type: STATUS_FIRST,
      
    }
  }
  function restockStatus() {
    return {
      type: STATUS_FINAL
      
    }
  }
  function orderStep() {
    return {
      type: STEP_FIRST,
      
    }
  }
  function restockStep() {
    return {
      type: STEP_FINAL,
      
    }
  }

  const rootReducer = combineReducers({
    state: stateReducer,
    step: stepReducer
  })


  const store = createStore(rootReducer)

console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState())
})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())

const actions = bindActionCreators(
  { orderStatus, restockStatus, orderStep, restockStep },
  store.dispatch
)
actions.orderStatus()
actions.orderStatus()
actions.restockStatus()
actions.orderStep()
actions.restockStep()
actions.orderStep()
actions.orderStatus()
actions.restockStatus()
unsubscribe()