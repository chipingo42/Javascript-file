// BUDGET CONTOLLER
var budgetControllar = (function() {
   
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    
    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            // [1, 2, 3, 4, 5], next ID = 6
            // [2, 4, 6, 8], next ID = 9
            // ID = last ID + 1

            // create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // create new item based on 'inc' or 'exp' type
            if (type === 'exp'){
                newItem = new Expense(ID, des, val);
            }else if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }

            // push it into our structre
            data.allItems[type].push(newItem); 

            // return the new element
            return newItem;
                
        },

        testing: function() {
            console.log(data)
        }
    };



})();

// UI CONTROLLER
var UIControllar = (function() {
    
    var Donstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputbtn: '.add_btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };

    return {
        getInput: function() {
            return {
                type:  document.querySelector(Donstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(Donstrings.inputDescription).value,
                value: document.querySelector(Donstrings.inputValue).value,
            };
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;

           // create HTML string with placeholder text
            if (type === 'inc') {
                element = Donstrings.incomeContainer;
                html = 'div class="itme  clearfix" id="income-%id%"><div class="item__descrption">%description%</div><div class="right clearfix"><div class="item__value">%value%</div> <div class="item__delete"><button class="item__delete--btn"><img src="./src/icon/window-close-regular.svg" width="11px" height="14px" alt=""></button></div></div></div>';
            }else if (type === 'exp') {
                element = Donstrings.expensesContainer;
                html = '<div class="itme item-exp-0 clearfix" id="expense-%id%"><div class="item__description apart--ren-1">%description%</div><div class="right clearfix"><div class="item__value value-1">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn btn--last"><img src="./src/icon/window-close-regular.svg" width="11px" height="14px" alt=""></button></div></div></div>';
            }
           
          // replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert the HTML into the Don
            document.querySelector(element).insertAdjacentElement('beforeend', newHtml);

        },
        
        getDonstrings: function() {
            return Donstrings;
        } 
    };

})();


// GLOBLA APP CONTROLLER
var controllar = (function(budgetctrl, UIctrl) {

    var setupEventlisteners = function() {
        var Don = UIctrl.getDonstrings();

        document.querySelector(Don.inputbtn).addEventListener('click', ctrlAddItem); 

        document.addEventListener('keypress', function(event) {
    
            if (event.keyCode === 13 || event.which === 13) {
               ctrlAddItem();
            } 
    
        });
    };


    var ctrlAddItem = function() {
        var input, newItem;
        // Get the fild input data
        input = UIctrl.getInput();

        // add the item to the budget controllar 
        newitem = budgetctrl.addItem(input.type, input.description, input.value);

        // add the item to UI
        UIctrl.addListItem(newItem, input.type)
        
        // calculate the budget 

        // Display the budget on the UI

        // console.log('It works..')

    };

    return {
        init: function() {
            console.log('Application has started..');
            setupEventlisteners();
        }
    };

   
})(budgetControllar, UIControllar);



controllar.init();
 



  































































