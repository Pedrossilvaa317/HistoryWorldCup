export default function Artilheiros({ listaDeArtilheiros}){



  return (
    // Cole a sua tag <ul> e o .map() aqui dentro
    <div className="card shadow-sm p-3">
      <h3 className="mb-3">Artilheiros</h3>
      <ul className="list-group list-group-flush">
        {listaDeArtilheiros.map((jogador,index) => (
          <li key={index} className="lsit-group-item d-flex justify-content-between aling-items-center">
            {jogador.nome}
            <span className="badge bg-primary rounded-pill">{jogador.gols} gols</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
