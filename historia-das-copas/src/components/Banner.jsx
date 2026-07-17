export default function Banner({ dadosDaCopa}){



  return (
    // Cole a sua tag <ul> e o .map() aqui dentro
    <div>
          <h1>Copa do Mundo de {dadosDaCopa.ano}</h1>
          <h2>Sede: {dadosDaCopa.sede}</h2>
          <h2>Campeão: {dadosDaCopa.campeao}</h2>
    </div>
  )
}
