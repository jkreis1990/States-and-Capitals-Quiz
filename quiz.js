var correctAnswers;
var totalQuestions;
var quizLength = 50;
var statesAndCapitalsReference = 
[{ state: "Alabama", capital: "Montgomery" },
  { state: "Alaska", capital: "Juneau" },
  { state: "Arizona", capital: "Phoenix" },
  { state: "Arkansas", capital: "Little Rock" },
  { state: "California", capital: "Sacramento" },
  { state: "Colorado", capital: "Denver" },
  { state: "Connecticut", capital: "Hartford" },
  { state: "Delaware", capital: "Dover" },
  { state: "Florida", capital: "Tallahassee" },
  { state: "Georgia", capital: "Atlanta" },
  { state: "Hawaii", capital: "Honolulu" },
  { state: "Idaho", capital: "Boise" },
  { state: "Illinois", capital: "Springfield" },
  { state: "Indiana", capital: "Indianapolis" },
  { state: "Iowa", capital: "Des Moines" },
  { state: "Kansas", capital: "Topeka" },
  { state: "Kentucky", capital: "Frankfort" },
  { state: "Louisiana", capital: "Baton Rouge" },
  { state: "Maine", capital: "Augusta" },
  { state: "Maryland", capital: "Annapolis" },
  { state: "Massachusetts", capital: "Boston" },
  { state: "Michigan", capital: "Lansing" },
  { state: "Minnesota", capital: "St. Paul" },
  { state: "Mississippi", capital: "Jackson" },
  { state: "Missouri", capital: "Jefferson City" },
  { state: "Montana", capital: "Helena" },
  { state: "Nebraska", capital: "Lincoln" },
  { state: "Nevada", capital: "Carson City" },
  { state: "New Hampshire", capital: "Concord" },
  { state: "New Jersey", capital: "Trenton" },
  { state: "New Mexico", capital: "Santa Fe" },
  { state: "New York", capital: "Albany" },
  { state: "North Carolina", capital: "Raleigh" },
  { state: "North Dakota", capital: "Bismarck" },
  { state: "Ohio", capital: "Columbus" },
  { state: "Oklahoma", capital: "Oklahoma City" },
  { state: "Oregon", capital: "Salem" },
  { state: "Pennsylvania", capital: "Harrisburg" },
  { state: "Rhode Island", capital: "Providence" },
  { state: "South Carolina", capital: "Columbia" },
  { state: "South Dakota", capital: "Pierre" },
  { state: "Tennessee", capital: "Nashville" },
  { state: "Texas", capital: "Austin" },
  { state: "Utah", capital: "Salt Lake City" },
  { state: "Vermont", capital: "Montpelier" },
  { state: "Virginia", capital: "Richmond" },
  { state: "Washington", capital: "Olympia" },
  { state: "West Virginia", capital: "Charleston" },
  { state: "Wisconsin", capital: "Madison" },
  { state: "Wyoming", capital: "Cheyenne" }
];
var statesAndCitiesReference = 
[{state: "Alabama", cities: ["Birmingham","Montgomery","Huntsville","Mobile","Tuscaloosa"]},
{state: "Alaska", cities: ["Anchorage","Juneau","Fairbanks","Wasilla","Sitka"]},
{state: "Arizona", cities: ["Phoenix","Tucson","Mesa","Chandler","Scottsdale"]},
{state: "Arkansas", cities: ["Little Rock","Fort Smith","Fayetteville","Springdale","Jonesboro"]},
{state: "California", cities: ["Los Angeles","San Diego","San Jose","San Francisco","Fresno"]},
{state: "Colorado", cities: ["Denver","Colorado Springs","Aurora","Fort Collins","Lakewood"]},
{state: "Connecticut", cities: ["Bridgeport","New Haven","Stamford","Hartford","Waterbury"]},
{state: "Delaware", cities: ["Wilmington","Dover","Newark","Middletown","Smyrna"]},
{state: "Florida", cities: ["Jacksonville","Miami","Tampa","Orlando","St. Petersburg"]},
{state: "Georgia", cities: ["Atlanta","Augusta","Columbus","Macon","Savannah"]},
{state: "Hawaii", cities: ["Honolulu","East Honolulu","Pearl City","Hilo","Kailua"]},
{state: "Idaho", cities: ["Boise","Meridian","Nampa","Idaho Falls","Caldwell"]},
{state: "Illinois", cities: ["Chicago","Aurora","Naperville","Joliet","Rockford"]},
{state: "Indiana", cities: ["Indianapolis","Fort Wayne","Evansville","South Bend","Carmel"]},
{state: "Iowa", cities: ["Des Moines","Cedar Rapids","Davenport","Sioux City","Iowa City"]},
{state: "Kansas", cities: ["Wichita","Overland Park","Kansas City","Olathe","Topeka"]},
{state: "Kentucky", cities: ["Louisville","Lexington","Bowling Green","Owensboro","Covington"]},
{state: "Louisiana", cities: ["New Orleans","Baton Rouge","Shreveport","Lafayette","Lake Charles"]},
{state: "Maine", cities: ["Portland","Lewiston","Bangor","South Portland","Auburn"]},
{state: "Maryland", cities: ["Baltimore","Frederick","Gaithersburg","Rockville","Bowie"]},
{state: "Massachusetts", cities: ["Boston","Worcester","Springfield","Cambridge","Lowell"]},
{state: "Michigan", cities: ["Detroit","Grand Rapids","Warren","Sterling Heights","Ann Arbor"]},
{state: "Minnesota", cities: ["Minneapolis","St. Paul","Rochester","Duluth","Bloomington"]},
{state: "Mississippi", cities: ["Jackson","Gulfport","Southaven","Biloxi","Hattiesburg"]},
{state: "Missouri", cities: ["Kansas City","Saint Louis","Springfield","Columbia","Independence"]},
{state: "Montana", cities: ["Billings","Missoula","Great Falls","Bozeman","Butte"]},
{state: "Nebraska", cities: ["Omaha","Lincoln","Bellevue","Grand Island","Kearney"]},
{state: "Nevada", cities: ["Las Vegas","Henderson","Reno","North Las Vegas","Sparks"]},
{state: "New Hampshire", cities: ["Manchester","Nashua","Concord","Dover","Rochester"]},
{state: "New Jersey", cities: ["Newark","Jersey City","Paterson","Elizabeth","Clifton"]},
{state: "New Mexico", cities: ["Albuquerque","Las Cruces","Rio Rancho","Santa Fe","Roswell"]},
{state: "New York", cities: ["New York City","Buffalo","Rochester","Yonkers","Syracuse"]},
{state: "North Carolina", cities: ["Charlotte","Raleigh","Greensboro","Durham","Winston"]},
{state: "North Dakota", cities: ["Fargo","Bismarck","Grand Forks","Minot","West Fargo"]},
{state: "Ohio", cities: ["Columbus","Cleveland","Cincinnati","Toledo","Akron"]},
{state: "Oklahoma", cities: ["Oklahoma City","Tulsa","Norman","Broken Arrow","Edmond"]},
{state: "Oregon", cities: ["Portland","Salem","Eugene","Gresham","Hillsboro"]},
{state: "Pennsylvania", cities: ["Philadelphia","Pittsburgh","Allentown","Erie","Reading"]},
{state: "Rhode Island", cities: ["Providence","Cranston","Warwick","Pawtucket","East Providence"]},
{state: "South Carolina", cities: ["Charleston","Columbia","North Charleston","Mount Pleasant","Rock Hill"]},
{state: "South Dakota", cities: ["Sioux Falls","Rapid City","Aberdeen","Brookings","Watertown"]},
{state: "Tennessee", cities: ["Nashville","Memphis","Knoxville","Chattanooga","Clarksville"]},
{state: "Texas", cities: ["Houston","San Antonio","Dallas","Austin","Fort Worth"]},
{state: "Utah", cities: ["Salt Lake City","West Valley City","Provo","West Jordan","Orem"]},
{state: "Vermont", cities: ["Burlington","South Burlington","Rutland","Barre","Montpelier"]},
{state: "Virginia", cities: ["Virginia Beach","Norfolk","Chesapeake","Richmond","Newport News"]},
{state: "Washington", cities: ["Seattle","Spokane","Tacoma","Vancouver","Bellevue"]},
{state: "West Virginia", cities: ["Charleston","Huntington","Morgantown","Parkersburg","Wheeling"]},
{state: "Wisconsin", cities: ["Milwaukee","Madison","Green Bay","Kenosha","Racine"]},
{state: "Wyoming", cities: ["Cheyenne","Casper","Laramie","Gillette","Rock Springs"]}
];
var statesAndCapitals;
var statesAndCities;
var previousOptions = [];

var intro = document.getElementById("intro");
var startButton = document.getElementById("start");
var flag = document.getElementById("flag");
var question = document.getElementById("question");
var state = document.getElementById("state");
var input = document.getElementById("input");
var choices = document.getElementById("choices");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var correctAnswer = null;
var submitButton = document.getElementById("submit");
var nextButton = document.getElementById("next");
var returnButton = document.getElementById("return");
var buttons = document.getElementsByClassName("button");
var progressBanner = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  correctAnswers = 0;
  totalQuestions = 0;
  statesAndCapitals = statesAndCapitalsReference;
  statesAndCities = statesAndCitiesReference;
  renderQuestion();
  intro.style.display = "none";
  state.style.display = "flex";
  input.style.display = "flex";
  scoreDiv.style.display = "none";
  startButton.style.display = "none";
}

function renderQuestion() {
  var currentObj = statesAndCapitals.splice(
    Math.floor(Math.random() * statesAndCapitals.length),
    1
  )[0];
  flag.setAttribute("src", `images/${currentObj.state.replace(" ", "_")}.svg`);
  question.innerHTML = "The capital of " + currentObj.state;
  var correctCapital = currentObj.capital;
  var options = [correctCapital];
  var otherStateCities = statesAndCities.filter(item => item.state == currentObj.state)[0].cities;
  sort(otherStateCities);
  for (i = 0; options.length < 4; i++) {
    if (!options.includes(otherStateCities[i])) options.push(otherStateCities[i]);
  }
  previousOptions = options;
  sort(options);
  var choices = document.getElementsByClassName("choice");
  for (i = 0; i < choices.length; i++) {
    choices[i].innerHTML = options[i];
    choices[i].removeAttribute("correct");
    choices[i].setAttribute("isSelected", false);
    if (options[i] == correctCapital) correctAnswer = choices[i];
  }
  returnButton.style.display = "flex";
  submitButton.style.display = "none";
  nextButton.style.display = "none";
  progressBanner.style.backgroundColor = "white";
  progressBanner.innerHTML = "";
}

function select(choice) {
  if (submitButton.getAttribute("clicked") != "true") {
    var selected = findSelected();
    if (selected != null) {
      submitButton.style.display = "flex";
      document.getElementById(selected.id).setAttribute("isSelected", false);
      if (selected.id != choice) {
        document.getElementById(choice).setAttribute("isSelected", true);
      }
    } else {
      document.getElementById(choice).setAttribute("isSelected", true);
    }
    if (findSelected() != null) {
      submitButton.style.display = "flex";
    } else {
      submitButton.style.display = "none";
    }
  }
}

function findSelected() {
  var choices = document.getElementsByClassName("choice");
  var selected = [];
  for (i = 0; i < choices.length; i++) {
    if (choices[i].getAttribute("isSelected") == "true") {
      selected.push(choices[i]);
    }
  }
  return selected.length == 0 ? null : selected[0];
}

function checkAnswer() {
  if (submitButton.getAttribute("clicked") != "true") {
    submitButton.setAttribute("clicked", true);
    var selection = findSelected();
    var selectedCapital = selection.innerHTML;
    if (selectedCapital == correctAnswer.innerHTML) {
      correctAnswers++;
    } else {
      document.getElementById(selection.id).setAttribute("correct", false);
    }
    document.getElementById(correctAnswer.id).setAttribute("correct", true);
    totalQuestions++;
    submitButton.style.display = "none";
    nextButton.style.display = "flex";
  }
  progressBanner.style.backgroundColor = "lightgrey";
  progressBanner.innerHTML = "You have answered " + correctAnswers + " out of " + totalQuestions + " questions correctly";
  if (totalQuestions == quizLength) {
    nextButton.innerHTML = "Finish";
  }
}

function goToNext() {
  if (totalQuestions == quizLength) {
    displayResults();
  } else {
    renderQuestion();
    submitButton.setAttribute("clicked", false);
  }
}

function displayResults() {
  state.style.display = "none";
  input.style.display = "none";
  startButton.style.display = "flex";
  startButton.innerHTML = "Play Again";
  scoreDiv.style.display = "flex";
  scoreDiv.innerHTML =
    "You answered " +
    correctAnswers +
    " out of " +
    totalQuestions +
    " questions correctly!";
}

function returnToMenu() {
  totalQuestions = 0;
  correctAnswers = 0;
  state.style.display = "none";
  input.style.display = "none";
  startButton.style.display = "flex";
  startButton.innerHTML = "Start";
  intro.style.display = "flex";
}

function sort(array) {
  for (i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * i);
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
