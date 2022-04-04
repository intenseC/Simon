// State Handling
//===================================================
//===================================================
//===================================================
    import  {
    createSlice,
    configureStore
            }
    from '@reduxjs/toolkit'

    import
    AsyncStorage
    from '@react-native-async-storage/async-storage';

    import
    thunk
    from 'redux-thunk'

    import  {
        combineReducers
            }
    from "redux";

    import  {
        persistReducer,
        persistStore
            }
    from 'redux-persist'

//====================================
//====================================


let eCntr = 0;


//====================================
//====================================

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};


const cntrSlice = createSlice({
  name: 'cntr',
    initialState: {
    value: eCntr
    },

  reducers: {
    increment:  state => {
        state.value += 1;
    },

    decrement:  state => {
        state.value -= 1;
    },

    setVal:  state => {
        state.value = global.Score;
    },
    setIdx:  state => {
        state.idx   = global.Idx;
    }
  }
});


export
const {
    increment,
    decrement,
    setVal,
    setIdx
      }
       = cntrSlice.actions;

const reducers = combineReducers({
reducer: cntrSlice.reducer
});

const persistedReducer =
persistReducer(persistConfig, reducers);

export
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});
/**/
let persistor = persistStore(store);

store.subscribe( () => {
    console.log(store.getState());
  }
);

//===================================================
//===================================================
//===================================================


