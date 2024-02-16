const img = document.querySelector('img')
const p = document.querySelector('p')
const yes_bt = document.querySelector('#yes')
const no_bt = document.querySelector('#no')

let m = 0, n = 0, i = 0;
const src = [
    './valentine.gif',
    './meore.gif',
    './bolo.gif'
]
let texts = [
    'will u be my valentine?',
    'one more chance',
    'ok one more',
    'one more..',
    'one more..?',
    'im going to cry..',
    'come ooon',
    'pwease',
    'pwease',
    'pweasseeeeee',
    'whyyy',
    'just click yes',
    'have i asked u something else EVER in life?',
    'U know u CANT end this right?',
    'bet?',
    'u cant beat programming',
    'theres code runned 1000 times that adds new text',
    'last chanceeeee',
    'i warned u1',
    'i warned u2',
    'i warned u3',
    'i warned u4',
    'i warned u5',
    'i warned u6',
    'not 1000 times, but',
    'why cant u click yees',
    'did u know, if u press that button ull be happy?',
    'im getting angry',
    'justi cliiiick',
    '*sigh',
    'i really wanted it to be us',
    'it will be empty soon',
    'bye',
    'hope ull get happy with somebody else<3'
]

const set = (m, n) => {
    img.src = src[m]
    p.textContent = texts[n]
    i++;
}

set(m, n)

no_bt.addEventListener('click', () => {
    n++;
    m = 1;
    set(m, n)
})

yes_bt.addEventListener('click', () => {
    m = 2;
    set(m, 0)
    if(i == 2) p.textContent = 'this faaaast?? LOVE U <3'
    else p.textContent = 'thank Uuuu'
})