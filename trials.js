// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = 'Balloonicorn';
const accountNumber = '123456';
let businessName = 'Balloonicorn\'s Cupcake Shop';

const addresses = ['123 Main Street', '683 Sutter Street', '1600 Pennsylvania Ave'];


// Add some phone numbers to our map
const phoneNumbers = new Map([
  ['home', '510-867-5309'],
  ['mobile', '415-555-1212'],
  ['business', '415-123-4567']
]);


// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information
function printAccountInfo(accHolder, accHolderNum, busName) {
  console.log(`Account Holder Name: ${accHolder}`);
  console.log(`Account Holder Number: ${accHolderNum}`);
  console.log(`Business Name: ${busName}`);
}


// Add function to print all addresses, including a header
function printAddresses(addresses) {
  console.log('Addresses:');
  for (const address of addresses) {
    console.log(address);
  }
}

// Add function to print phone types and numbers
function printPhoneNums(phoneNumbersMap) {
  console.log('Phone Numbers:');
  for (let [phoneType, phoneNum] of phoneNumbersMap) {
    console.log(`${phoneType}: ${phoneNum}`);
  }
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const transactions = new Map();

// Add function to add transactions
function addTransaction(date, amount) {
  transactions.set(date, amount);
}

// Use the function to add transactions
addTransaction('May-2 ', -500);
addTransaction('May-13', 1200);
addTransaction('May-15', -100);
addTransaction('May-21', -350);
addTransaction('May-29', -2200);

// Add function to show balance status
function showBalanceStatus(balance) {
  console.log(`Balance: ${balance}`);
  if (balance < 0) {
    console.log('YOU ARE OVERDRAWN. $25 FEE WILL BE CHARGED');
  } else if (balance < 20) {
    console.log('Warning: You are close to zero balance');
  } else {
    console.log('Thank you for your business');
  }
}


// Add function to show transactions
function showTransactions(transactions, balance) {
  let bal = balance;
  console.log(`Starting Balance: ${balance}`);
  for (let [date, amt] of transactions) {
    bal = bal + amt;
    const transType = amt < 0 ? 'withdrawal' : 'deposit   ';
    console.log(`${date}  ${transType}  ${amt}  ${bal}`);
  }
  showBalanceStatus(bal);
  if (bal < 0) {
    addTransaction('May-31', -25);
  }
}

function isPreferred(customer) {
  return customer.faveMelon === 'Casaba' || customer.numPets > 5;
}

showTransactions(transactions, 26000);
// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
let customer = {
  accountHolder: accountHolder,
  accountNumber: accountNumber,
  businessName: businessName,
  addresses: addresses,
  phoneNumbers: phoneNumbers,
  transactions: transactions,
  startingBalance: 26000
};

// Function to add customer attributes
function addFavesToCustomer(customer, melon = 'Cantaloupe', numPets = 0) {
  customer.faveMelon = melon;
  customer.numPets = numPets;
}

// Add attributes for this user
addFavesToCustomer(customer, 'Casaba', 2);


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate
function getLoanRate(customer, annualIncome) {
  const preferred = isPreferred(customer);
  if (annualIncome < 100000) {
    if (preferred) {
      return '5%';
    }
    return '8%';
  } else if (annualIncome >= 100000 && annualIncome <= 200000) {
    if (preferred) {
      return '4%';
    }
    return '7%';
  }

  return '4%';
}

// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report
function printAllAccountInfo(customer) {
  printAccountInfo(customer.accountHolder,
    customer.accountNumber,
    customer.businessName);
  printAddresses(customer.addresses);
  printPhoneNums(customer.phoneNumbers);
  console.log(`Starting Balance: ${customer.startingBalance}`);
  let endBalance = customer.startingBalance;
  for (let amt of customer.transactions.values()) {
    endBalance = endBalance + amt;
  }
  showBalanceStatus(endBalance);
  if (isPreferred(customer)) {
    console.log('Congratulations on being a premier customer!');
  }
}

// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses
const custAddressMap = new Map([
    ['Mel Melitipolski', '707 Birch Street'],
    ['Barbara Brown', '8997 Jones Street']
]);


// Write a function to return the address of a given person
function getAddress(personName) {
  return custAddressMap.get(personName);
}

// Add a function to create an employee schedule for the week


function assignEmployeesToDays(employees) {
  let schedule = new Map([]);
  const bizDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  for (let day of bizDays) {
    let random_employee_idx = Math.floor(Math.random() * employees.length);
    schedule.set(day, employees[random_employee_idx]);
  }
  return schedule;
}

// Add a function for weekly hours
