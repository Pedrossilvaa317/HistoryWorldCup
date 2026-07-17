export default function Banner({ dadosDaCopa}){



  return (
    // Cole a sua tag <ul> e o .map() aqui dentro
    <div className="bg-success text-white p-4 rounded text-center shadow-sm">
          <h1 className="display-4 fw-bold">Copa do Mundo de {dadosDaCopa.ano}</h1>
          <h2 className="h4 mt-3">Sede: {dadosDaCopa.sede}</h2>
          <h2 className="h4">Campeão: {dadosDaCopa.campeao}</h2>
    </div>
  )
}
