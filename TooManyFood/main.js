/*
NIDE BUILD INFO:
  dir: dev
  target: main.js
  files: 3
*/



// file: insruments/knife15cm.js

IDRegistry.genItemID("miniKnife");
Item.createItem("miniknife", "15cm Knife", {name:"knife15cm", meta: 0}, {stack: 1});




// file: insruments/knife21cm.js

IDRegistry.genItemID("chefKnife");
Item.createItem("chefKnife", "Chef(21cm) Knife", {name:"knife21cm", meta: 0}, {stack: 1});




// file: blocks/cuttingBoard.js

IDRegistry.genBlockID("cuttingBoard");
Block.createBlock("cuttingBoard", [
{name: "test", texture: [
["planks", 0],
["planks", 0],
["planks", 0],
["planks", 0],
["planks", 0],
["planks", 0]],
inCreative: true}
]);

function createTestRender(id, idMaterial, dataMaterial) {

var render = new ICRender.Model();
BlockRenderer.setStaticICRender (BlockID.cuttingBoard, 0, render);
var model = BlockRenderer.createModel();

model.addBox (3/16, 0/16, 4/16, 13/16, 1/16, 12/16, "planks", 0);
model.addBox (13/16, 0/16, 6/16, 15/16, 1/16, 7/16, "planks", 0);
model.addBox (13/16, 0/16, 9/16, 15/16, 1/16, 10/16, "planks", 0);
model.addBox (14/16, 0/16, 7/16, 15/16, 1/16, 9/16, "planks", 0);

render.addEntry(model); }

createTestRender(BlockID.cuttingBoard, 49, 0);

Block.setShape(BlockID.cuttingBoard, 0, 0, 0, 1, 1, 1); 