class Chain{
constructor(bodya,bodyb){
var options={
bodyA:bodya,
bodyB:bodyb,
length:5,
stiffness:0.6
}
this.chain=Constraint.create(options)
World.add(world,this.chain)
}
display(){
strokeWeight(7)
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)

}


}