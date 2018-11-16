

//Controller Funcionário
funcionarioApp.controller('funcionarioCtrl', function ($scope, funcionarioService) {
    //carrega todos os dados do funcionário quando a página é carregada;
    carregarFuncionarios();
    function carregaFuncionarios() {
        var listarFuncionarios = funcionarioService.getTodosFuncionarios();
        listarFuncionarios.then(function (d) {
            //se tudo der certo
            $scope.Funcionarios = d.data;
        },
            function () {
                alert("Ocorreu um erro ao tentar listar todos os funcionários");

            }); 
    }





});
    
    
    
     
   
    
    
    
    
    
    
    )