const Sentencer = require('sentencer');
Sentencer.configure({
    // the list of nouns to use. Sentencer provides its own if you don't have one!
    nounList: ["Night King", "Arya", "Jammie", "Dany", "John Snow"],

    // the list of adjectives to use. Again, Sentencer comes with one!
    adjectiveList: ["Silent", "Assassin", "Loyal", "Powerfull", "Blessed"]
})

module.exports = {
    aHero: function aHero() {
        return Sentencer.make("{{ noun }}");
    },

    aDeed: function aDeed() {
        return Sentencer.make("{{ adjective }}");
    }
}

