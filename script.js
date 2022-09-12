 //Array of names
 let names = [
    "Amy", "Amanda", "Ayla", "Jake", "Sean", "Sancho", "Henry", "Brad", "Stephen", " Samuel",
    "Taylor", "Timmy", "Bran", "Cathy", "Camille", "John", "Danny", "Sam", "Ellen", "Oke",
    "Violet", "Emily", "Nadia", "Mitchell", "George", "Kylie", "Isabel", "Harvey", "Ridwan",
    "Lucy", "Kayden", "Harrison", "Glen", "Jeremy", "Nez", "Winnerman", "Ivory", "Biola",
    "Peter", "Blake", "Drake", "Gael", "Kate", "Ella", "Ivy", "Logan", "Rose", "Freya",
    "Yael", "Victoria", "Harry", "Gavin", "Lucas", "Abdulrahmon", "Victor", "Joseph"
  ];
  //Sort array in ascending order
  let sortedNames = names.sort();

  //references
  let input = document.getElementById("input");

  //execute function onkeyup
  input.addEventListener("keyup", (e) => {
    //initially remove all elements(so if user erases a letter or adds new letter then clean previous outputs)
    removeElements();
    //loop through above array
    for (let i of sortedNames) {
      //convert input to lowercase and compare with each string
      if (
        i.toLowerCase().startsWith(input.value.toLowerCase()) &&
        input.value != ""
      ) {
        //create li element
        let listItem = document.createElement("li");
        //one common class name
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";

        listItem.setAttribute("onclick", "displayNames('" + i + "')");
        //Display the matched part in bold
        let word = "<b>" + i.substr(0, input.value.length) + "</b>";
        word += i.substr(input.value.length);
        //display the value in array
        listItem.innerHTML = word;
        document.querySelector(".list").appendChild(listItem);
      }
    }
  });
  function displayNames(value) {
    input.value = value;
    removeElements();
  }
  function removeElements() {
    //clear all the items
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
      item.remove();
    });
  }