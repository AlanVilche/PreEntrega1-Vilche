
function Titulo({apellido, nombre}) {
  return (
    <div>
          {/* <h2> {titulo}</h2> */}
          <h3 style={{textAlign:'left', fontSize:'Large', fontStyle:'italic', color:'#6495ED'}}> Bienvenido {apellido} {nombre}</h3>
          
    </div>
  )
}

export default Titulo