export default function HelloWorld(){
   
   const lista = [
    {
    name: "Higor",
    idade: 18,
    escola: "senai"
   },
   {
    name: "Bryan",
    idade: 17,
    escola: "colegio"
   }
    ];

    const MapPessoas = ({pessoas}) => {
    return pessoas.map((ps,index) =>
        <div key={index}>
            <h1>{ps.name}</h1>
            <h1>{ps.idade}</h1>
            <h1>{ps.escola}</h1>
        </div>
    )
}
     return (
     <>
     <MapPessoas pessoas={lista}/>
     </>
     
)
}