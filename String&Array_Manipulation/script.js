function stringManipulation(){
    let text_input=document.getElementById("paragraphInput").value;
    let text_char=text_input.length;  
    let wordcount=text_input.trim().split(/\s+/).length;

    //total no.of sentance 
    //split a paragraph into sentences and remove empty ones.
    let total_no_of_sentance = text_input.split(/[.!?]+/).filter(s => s.trim().length > 0);

    //filter(function(s) {return s.trim().length > 0;
    //.length>0 make sure string is not empty

    /*Unique word
    1.normalize the text 
    2.normal text to words -split
    3.use set to get unique value
    4.set convert array
    */

    let normalize=text_input.toLowerCase().replace(/[^\w\s]/g, '');  
    
    /*g= replace all match not just 1st
    w-(a-z,A-Z)
    s= whitesapce
    */
    let words = normalize.trim() === "" ? [] : normalize.trim().split(/\s+/);
    let uniqueWordsSet = new Set(words);
    let uniqueWords = Array.from(uniqueWordsSet);
   
    console.log("Unique Words:");
    uniqueWords.forEach(word => {
    console.log(word);


    // word frequency
    
});

    

}




/*   let wordcount=text_input.split(" ").length;  
    let  nosapce=text_input-wordcount-1;
    let sentance=text_input.match
    let sentanceCount=input.match(/[.!?]/g)
    uniqueWord=[...new Set(input.split(""))].length
    console.log(uniqueWord)
*/
    