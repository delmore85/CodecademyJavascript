var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
};

function list(){
    for (var key in contacts){
        printPerson(contacts[key]);
    }
}

/*Create a search function
then call it passing "Jones"*/

function search(lastName){
    for (var key in contacts){
        if (lastName === contacts[key].lastName){
            printPerson(contacts[key]);
        }
    };
};
search("Jones");

function add(firstName, lastName, email, phoneNumber){

    contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
};
};
add("Dennis", "Elmore", "d.elmore85@gmail.com", "(555) 555-5555");
list();
