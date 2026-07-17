export default function MenuAnos({ copas, mudarCopa }) {
  return (
    <div>
      {/* Aqui nós ligamos a esteira para ler a prateleira de copas */}
      {copas.map((copaIteracao) => (
        <button 
          key={copaIteracao.ano} 
          onClick={() => mudarCopa(copaIteracao)}
          className="btn btn-primary m-1"
        >
          {copaIteracao.ano}
        </button>
      ))}
    </div>
  )
}