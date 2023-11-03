//Questao 1 - Escreva um metodo que um inteiro x e um inteiro y, retorne todos os numeros divisiveis por w.Com true ou false


function solucao(x, y) {
    return y % x === 0 ? true : false
}


//console.log(solucao(4, 3));


//Questao 2 - Em um sistema web casa usuario pode se em diversos eventos, cada evento possui ate 3 premios que sao distruidos entre usuarios presentes.O sistema precisa guardar as informacoes de quem participou, quem ganhou e para cada evento.Modele um banco de dados capaz de suportar essas regras.





//Questao 3 - Considere um  sistema onde cada usuario possui atributo nome(String), idade(inteiro) e profissao(String).Faça uma query que retorne o nome de todos os usuarios com idade maior de 18 cuja profissao seja programador.




const nameProfessions = [
    { name: 'Jordan', age: 32, profession: 'basket player' },
    { name: 'Ronaldo', age: 22, profession: 'soccer player' },
    { name: 'Joao', age: 24, profession: 'developer' },
    { name: 'Juan', age: 20, profession: 'developer' },
    { name: 'Lucas', age: 25, profession: 'developer' },
]


const developerNames = nameProfessions.filter((names) => names.profession === 'developer')

console.log(developerNames)


//Questao 4 - Quais as vantagens e desvantagens de usar a arquitetura MVC(Model, View e Controller)?

let vantagens = 'O desenvolvimento de aplicativo se torna rapido, facil para varios desenvolvedores travalharem juntos, mais facil de utilizar o aplicativo e fail de depurar o os niveis corretamente.'


console.log(vantagens);
let desvantagens = 'É dificil entender a arquitetura MVC, deve ter regras rigidas nos metodos, falta de distribuicao o controlador acaba fazendo o trabalho todo.'




//Questao 5 - Usando Ruby on Rails, cite pelo menos uma forma de criar uma rota para um metodo chamado find_user dentro do controller com nome UsersController.


const acharMetodo = 'bundle exec rspec/spec/models/find_user'


//Questao 6 - Considerando a estrutura padrao de arquivo de um projeto feito com Ruby on Rails, em quais pastas devem se encontrar os models, os controllers e as views de um projeto? De que modo é possivel saber qual controller é responsavel por gerenciar uma determinada view?

//Primeiro o caminhos até models
'nome_da_pasta/app/models/user.rb'


//Segundo o caminho para os controllers
'nome_da_pasta/app/contollers, Para saber qual controller é determinado por gerenciar qual view é usado a mesma classe neles'











