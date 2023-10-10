// priority 0

ServerEvents.recipes((event) => {
  recipeRemoval(event)
  replaceRecipes(event)
  recipeAdd(event)
  replaceTFCHeatingAndCasting(event)
})

LootJS.modifiers((event) => {
  //event.enableLogging()
  modifyAndRemoveChestLoot(event)
  modifyAndRemoveBlockLoot(event)
  modifyAndRemoveEntityLoot(event)
})

ServerEvents.tags("worldgen/biome", event => {
  addTFCBiomesToVanilla(event)
  addStargateBiomes(event)
  removeStrongholdFromOW(event)
})

ServerEvents.tags("item", event => {
  addItemTags(event)
})

MoreJSEvents.structureLoad(event => {
  replaceVanillaBlocks(event)
})

MoreJSEvents.structureAfterPlace((event) => {
  replaceGoldBlocksWithPiles(event)
  runErosionFeature(event)
})

ServerEvents.lowPriorityData(event => {
  addGregTechIngotsToTFC(event)
})

NetworkEvents.dataReceived("customTask", (event) => {
  serverObserveGtTask(event) // TODO: needs rework
})