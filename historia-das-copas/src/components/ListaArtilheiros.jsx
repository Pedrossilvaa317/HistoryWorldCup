export default function Artilheiros({ listaDeArtilheiros}){



  return (
    // Cole a sua tag <ul> e o .map() aqui dentro
    <li>
        <h2>Artilheiros</h2>
        {listaDeArtilheiros.map((artilheiros) => (
          <li key={artilheiros.nome}>
            <strong>{artilheiros.nome}</strong> - {artilheiros.gols}
          </li>
        )


        )}
      </li>
  )
}
