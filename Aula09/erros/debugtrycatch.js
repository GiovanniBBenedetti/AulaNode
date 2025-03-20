try{
    let pessoa = undefined
    console.log("Nome: ", pessoa.nome)
}catch(error){
    console.error("Ocorreu um erro", error.message)
}finally{
    //opicional - sempre executado
    console.log("Fim do bloco try... catch")
}