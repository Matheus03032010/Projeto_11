//Projeto do boy
//Aluno: Matheus Henrique
// Data: 16/02

// declaração de variáveis
var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;

// função de preload que cria os objetos antes da execução
function preload(){
  // definição das imagens
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

// função que faz a configuração inicial do projeto
function setup(){
  // criação do chão
  createCanvas(400,400);
  
  // movendo o plano de fundo
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.3;

  //criando o menino correndo
  boy = createSprite(180,340,30,30);
  boy.scale = 0.08;
  boy.addAnimation("boyRunning",boyImg);
  
  // definição da parede da esquerda
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;

  // definição da parede da direita
  rightBoundary=createSprite(400,0,100,800);
  rightBoundary.visible = false;
} // fim do setup

function draw() {
  // define o fundo com a cor preta
  background(0);

  // define a velocidade em Y do chão
  path.velocityY = 4;
  
  // controla o x do boy com o x do mouse
  boy.x = World.mouseX-1;
  
  // cria os sprites no ambiente
  edges= createEdgeSprites();

  // define as colições
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar o plano de fundo
  path.setVelocity(0,-4); 
  if(path.y<0){
    path.y =300 
  }

  drawSprites();
}// fim do draw