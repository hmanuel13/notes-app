const notes = []

note1 = {title: 'discover minimalism', body: 'read more about minimalism'}
note2 = {title: 'design tiles', body: 'why, it\'s just fascinating'}
note3 = {title: 'adobe', body: 'which tools to study for graphic design'}
note4 = {title: 'SASS', body: 'why learn SASS?'}
notes.push(note1, note2, note3, note4)

const ps = document.querySelectorAll('p')

ps.forEach(function(p){
  p.textContent = '******'
})

// add a new element

const newP = document.createElement('p')

newP.textContent = 'This is a new Element from Javascript'

document.querySelector('body').appendChild(newP)