function introduction(name) {
    return `Hi, my name is ${name}.`;  
} 
console.log(introduction("Aki", "Samip")); 

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;  
} 
console.log(introduction("Aki", "Ember.js")); 
console.log(introduction("Samip", "React")); 

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
   }
   console.log(introductionWithLanguageOptional("Gracie")); 

