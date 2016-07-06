var friends = {};

friends.bill = {};
friends.bill.firstName = "Bill";
friends.bill.lastName = "Gates";
friends.bill.number = "(555)555-5555";
friends.bill.address = ['One Microsoft Way', 'Redmond', 'WA', '98052'];

friends.steve = {};
friends.steve.firstName = "Steve";
friends.steve.lastName = "Jobs";
friends.steve.number = "(123)123-4567";
friends.steve.address = ['Two Applebottom Dr', 'Seed', 'VA', '12345'];

var list = function (obj){
    for (var key in obj){
        console.log(key);
    }
};

var search = function (name){
    for (var key in friends){
        if(friends[key].firstName === name){
            console.log(friends[key]);
            return friends[key];
        }
    }
};
list(friends);
search("Bill");

