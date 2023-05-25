const DarkModeReducer = (state, action) =>{
    switch(action.type){
        case "LIGHT":{
            return{
                darkmode:false,
            }
        }
        case "DARK":{
            return {
                darkmode:true,
            }

        }
        case "TOGGLE":{
            return {
                darkmode:!state.darkmode,
            }

        }
        default :{
            return{state}

        }

    }
}


export default DarkModeReducer