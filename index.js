const Automerge = require('automerge')
const HotAutomerge = require('hot-automerge')

function profileStandard(countOfInserts) {
    let doc = Automerge.init()
    doc = Automerge.change(doc, '', doc => {
        doc.x = []
    })

    console.time(`profile ${countOfInserts} inserts`)
    for (let i = 0; i < countOfInserts; i++) {
        doc = Automerge.change(doc, '', doc => {
            doc.x.push(i)
        })
    }
    console.timeEnd(`profile ${countOfInserts} inserts`)
}

function profileHot(countOfInserts) {
    let doc = HotAutomerge.init()
    doc = HotAutomerge.change(doc, '', doc => {
        doc.x = []
    })

    console.time(`profile ${countOfInserts} inserts`)
    for (let i = 0; i < countOfInserts; i++) {
        doc = HotAutomerge.change(doc, '', doc => {
            doc.x.push(i)
        })
    }
    console.timeEnd(`profile ${countOfInserts} inserts`)
}

profileStandard(10000)
profileHot(10000)

/* nice */

function hello(){
    console.log(Automerge)

    let doc1 = Automerge.from({cards: []})

    console.log('1')
    console.log(doc1)

    doc1 = Automerge.change(doc1, 'Add card', doc => {
      doc.cards.push({title: 'Rewrite everything in Clojure', done: false})
    })

    console.log('2')
    console.log(doc1)

    doc1 = Automerge.change(doc1, 'Add another card', doc => {
      doc.cards.insertAt(0, {title: 'Rewrite everything in Haskell', done: false})
    })

    console.log('3')
    console.log(doc1)
}
