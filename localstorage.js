export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState == null) {
      return undefined;
    }
    return JSON.parse(serializedState)
  }
  catch (err) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    // console.log('state', state)
    // const serializedState = JSON.stringify(state)

    // fetch("http://localhost:1234/get")
    fetch("http://localhost:1234/save", {
      method:'POST'
    })
    .then(res => res.json() )
    .then( res => console.log('server res', res ) )

    // localStorage.setItem('state', serializedState)
  }
  catch (err){
    // ignore write errors
    console.log('fetch err',err)
  }
}