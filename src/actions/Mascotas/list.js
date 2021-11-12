export const MASCO_LIST = 'MASCO_LIST'
export const MASCO_LOADING = 'MASCO_LOADING'
export const MASCO_ERROR = 'MASCO_ERROR'

export const data = (data) => ({
    type: MASCO_LIST,
    data
  })
  
  export const loading = (loading) => ({
    type: MASCO_LOADING,
    loading
  })
  
  export const error = (error) => ({
    type: MASCO_ERROR,
    error
  })

  export const listMascotas = () => {
    return (dispatch) => {
      dispatch(loading(true))
      dispatch(error(null))
      fetch(`${process.env.REACT_APP_SERVER}/mascotas`, {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        dispatch(data(response))
      })
      .catch((e) => {
        console.log(e)
        dispatch(error(e))
      })
      .finally(() => dispatch(loading(false)))
    }
  }