const HashMap = require('./hashMap')

function main() {
  const lor = new HashMap()
  lor.MAX_LOAD_RATIO = .5
  lor.SIZE_RATIO = 3
  
  lor.set('Hobbit', 'Bilbo')
  lor.set('Hobbit', 'Frodo')
  lor.set('Wizard', 'Gandolf')
  lor.set('Human', 'Aragorn')
  lor.set('Elf', 'Legolas')
  lor.set('Maiar', 'The Necromancer')
  lor.set('Maiar', 'Sauron')
  lor.set('RingBearer', 'Gollum')
  lor.set('LadyOfLight', 'Galadriel')
  lor.set('HalfElven', 'Arwen')
  lor.set('Ent', 'Treebeard')
  console.log('Maiar key:', lor.get('Maiar'))
  console.log('Hobbit key:', lor.get('Hobbit'))

  return lor
}
