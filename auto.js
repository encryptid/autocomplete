/**
 * Create an autocomplete text box that provides possible completions as a dropdown below the text box. 
 * For example, you could autocomplete the name of colors and when someone types the letters "ra" they might see 
 * "orange", "radcliff green", and "terra cotta" but would not see "green". This is very similar to address 
 * autocompletion on travel sites or search query autocompletion on Google.
 * 
 * For this project you should pay attention both to design elements and to functionality. You don't need to design 
 * the whole page but think about usability improvements you can make to the search box to make it as slick as 
 * possible.
 * 
 * Whenever a new character is typed in the box, the autocompletion list should update.
 * 
 * Tier 1: high school mascot
 * 
 * Create a list of at least ten options that your autocomplete will populate. Each option should be displayed 
 * when the text typed in the box is a substring of the option.
 * 
 * The list of visible options should update whenever any typing happens in the text box. It should go away 
 * whenever the box is empty.
 * Each visible option should contain at least the option's text ("red" for the color red)
 * 
 * Tier 2: college mascot
 * 
 * Highlight the box the option is in whenever you hover over it.
 * Bold the portion of the text that matches the search term (similar to Google's autocomplete).
 * Add extra information to each, like icons, images, or some sort of subtext.
 * When the user clicks an item, replace the text in the text box with the clicked text and hide the results.
 * 
 * Tier 3: left shark
 * 
 * Pull the initial list of options from this API (http://api.queencityiron.com/autocomplete)
 * 
 * What is my plan to approach this?
 * 
 * I would like to use the API.
 * 
 * //1. I will need to create a text box, presumably in HTML and then lightly styled in CSS with functionality
 *      supported by JS.
 * 2. The text box will need to be sensitive to being typed in. Perhaps this is an event listener? I will need to do
 *      some research.
 * 3. The way in which it specifically needs to be sensitive is that it needs to be watching for letters and be
 *      dynamic, updating when new letters are typed. Each option should be available until the consecutive letter
 *      rules out the string altogether.
 * 
 * so run a loop over the GET request each time the button is pressed (keyUp)
 * 
 *      - At a minimum, 10 options should be available to autocomplete, but more would be available using the API.
 * 4. Additional options:
 *      - highlight the option in the drop-down box when it is hovered over
 *      - bold the typed portion of the matching text
 *      - add extra info, such as icons, images, or subtext
 *      - when an item is clicked, replace the text within the box with that item and hide the other results
 * 
 * After some review, I literally have no idea how to approach this right now. The only information I can find
 * related to autocomplete so far is to either use something like Angular or Jquery, or set it up in HTML, which
 * considering our information will be coming either from an API or an object, is not very helpful (not to mention,
 * a violation of separation of concerns, imo). Need to discuss.
 */

window.addEventListener('load', function () {

    let search = document.querySelector('.search');
    console.log(search);
    //

    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/autocomplete');
    request.addEventListener('load', function () {
        response = JSON.parse(request.responseText);
        console.log(response);
        //let grandparent = document.querySelector('.box');
        let parent = document.querySelector('.list');
        //grandparent.appendChild(parent);
        search.addEventListener('keyup', function () {
            let text = search.value;
            parent.innerHTML = "";
            // if (text === "") {
            //     parent.innerHTML = ""
            // };
            console.log(text);
            //console.log('eventListener is working!');
            let cityList = response;
            if (text !== "") {
                for (let i = 0; i < response.length; i++) {
                    // let item = response[i].indexOf(text);
                    console.log(text + ' on line 80');
                    if (response[i].includes(text) === true) { // if array 
                        cityList = [];
                        cityList.push(response[i]);
                        let child = document.createElement('li');
                        child.textContent = response[i];
                        parent.appendChild(child);
                        console.log(cityList + ' is the current tally');
                    } 
                }

            }
        })
    });
    request.send();

});

// function showList() {
//     console.log('showList is running!');
//     let search = document.querySelector('.search');
//     search.addEventListener('keyup', function() {
//         console.log("eventListener working!")
//         // let grandparent = document.querySelector('.box');
//         // let parent = document.createElement('ul');
//         // let child = document.createElement('li');
//         // parent.appendChild(grandparent);
//         // child.appendChild(parent);

//     });

// }

// function listLoop() {
//     if ()
// }