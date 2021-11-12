import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { list } from '../../actions/persons/list'
import { listMascotas } from '../../actions/Mascotas/list'
const Persons = () => {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(list())
  }, [dispatch])
  
  useEffect(() => {
    dispatch(listMascotas())
  }, [dispatch])
 
  
  const person = useSelector((store) => store.person)
  console.log("person",person)
  return (
    <>
      <div>
      Persons:
      <ul>
        {!person.loading && person.data.length > 0 ?
          person.data.map((d) => (
            <li>{`${d.nombres} ${d.apellidos}`}</li>
          ))
        : <h4>Loading ..!</h4>}
      </ul>
      </div>
      <div>
      Mascotas:
      <ul>
        {!person.loading && person.data.length > 0 ?
          person.data2.map((d) => (
            <li>{`${d.nombres} `}</li>
          ))
        : <h4>Loading ..!</h4>}
      </ul>
      </div>
    </>
  )
}

export default Persons
