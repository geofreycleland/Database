var express = require('express');
var app = express();
var myParser = require("body-parser");
var mysql = require('mysql');

console.log("Connecting to localhost...");
var con = mysql.createConnection({
  host: '127.0.0.1',
  user: "root",
  port: 3306,
  database: "proservice",
  password: "",
  dateStrings: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(express.static('./public'));
app.use(myParser.urlencoded({ extended: true }));

function employee_id_DB(POST, response) {

  empId = POST['Employee_ID'];
  query = "SELECT * FROM employee WHERE Employee_ID LIKE '" + empId + "%'";
  con.query(query, function (err, result, fields) {   // Run the query
    if (err) throw err;
    console.log(result);
    var res_string = JSON.stringify(result);
    var res_json = JSON.parse(res_string);
    console.log(res_json);

    // Now build the response: table of results and form to do another query
    response_form = `<form action="search_data.html" method="GET">`;
    response_form += `<table border="1" cellpadding="1" cellspacing="1">`;
    response_form += `<td><B>Employee ID</td><td><B>First Name</td><td><B>Middle</td><td><B>Last Name</td><td><B>Employee Account</td><td><B>Address</td></b>`;
    for (i in res_json) {
      response_form += `<tr><td> ${res_json[i].Employee_ID}</td>`;
      response_form += `<td> ${res_json[i].Fname}</td>`;
      response_form += `<td> ${res_json[i].Minit}</td>`;
      response_form += `<td> ${res_json[i].Lname}</td>`;
      response_form += `<td> ${res_json[i].E_acctnum}</td>`;
      response_form += `<td> ${res_json[i].Address}</td></tr>`;
    }
    response_form += "</table>";
    response_form += `</form>`;
    response.send(response_form);
  });
}

function employee_name_DB(POST, response) {

  fname = POST['Fname'];
  lname = POST['Lname'];
  if (fname == undefined) {
    query = "SELECT * FROM employee WHERE Lname LIKE '" + lname + "%'";
  } else if (lname == undefined) {
    query = "SELECT * FROM employee WHERE Fname LIKE '" + fname + "%'";
  } else {
    query = "SELECT * FROM employee WHERE Fname LIKE '" + fname + "%' and Lname LIKE '" + lname + "%'";  // Build the query string
  }
  con.query(query, function (err, result, fields) {   // Run the query
    if (err) throw err;
    console.log(result);
    var res_string = JSON.stringify(result);
    var res_json = JSON.parse(res_string);
    console.log(res_json);

    // Now build the response: table of results and form to do another query
    response_form = `<form action="search_data.html" method="GET">`;
    response_form += `<table border="1" cellpadding="1" cellspacing="1">`;
    response_form += `<td><B>Employee ID</td><td><B>First Name</td><td><B>Middle</td><td><B>Last Name</td><td><B>Employee Account</td><td><B>Address</td></b>`;
    for (i in res_json) {
      response_form += `<tr><td> ${res_json[i].Employee_ID}</td>`;
      response_form += `<td> ${res_json[i].Fname}</td>`;
      response_form += `<td> ${res_json[i].Minit}</td>`;
      response_form += `<td> ${res_json[i].Lname}</td>`;
      response_form += `<td> ${res_json[i].E_acctnum}</td>`;
      response_form += `<td> ${res_json[i].Address}</td></tr>`;
    }
    response_form += "</table>";
    response_form += `</form>`;
    response.send(response_form);
  });
}

function client_id_DB(POST, response) {

  cId = POST['Client_ID'];
  query = "SELECT * FROM client WHERE Client_ID LIKE '" + cId + "%'";
  con.query(query, function (err, result, fields) {   // Run the query
    if (err) throw err;
    console.log(result);
    var res_string = JSON.stringify(result);
    var res_json = JSON.parse(res_string);
    console.log(res_json);

    // Now build the response: table of results and form to do another query
    response_form = `<form action="search_data.html" method="GET">`;
    response_form += `<table border="1" cellpadding="1" cellspacing="1">`;
    response_form += `<td><B>Client ID</td><td><B>Client Name</td><td><B>Address</td></b>`;
    for (i in res_json) {
      response_form += `<tr><td> ${res_json[i].Client_ID}</td>`;
      response_form += `<td> ${res_json[i].Cname}</td>`;
      response_form += `<td> ${res_json[i].Address}</td></tr>`;
    }
    response_form += "</table>";
    response_form += `</form>`;
    response.send(response_form);
  });
}

function client_name_DB(POST, response) {

  cname = POST['Cname'];
  query = "SELECT * FROM client WHERE Cname LIKE '" + cname + "%'";
  con.query(query, function (err, result, fields) {   // Run the query
    if (err) throw err;
    console.log(result);
    var res_string = JSON.stringify(result);
    var res_json = JSON.parse(res_string);
    console.log(res_json);

    // Now build the response: table of results and form to do another query
    response_form = `<form action="search_data.html" method="GET">`;
    response_form += `<table border="1" cellpadding="1" cellspacing="1">`;
    response_form += `<td><B>Client ID</td><td><B>Client Name</td><td><B>Address</td></b>`;
    for (i in res_json) {
      response_form += `<tr><td> ${res_json[i].Client_ID}</td>`;
      response_form += `<td> ${res_json[i].Cname}</td>`;
      response_form += `<td> ${res_json[i].Address}</td></tr>`;
    }
    response_form += "</table>";
    response_form += `</form>`;
    response.send(response_form);
  });
}

function bank_code_DB(POST, response) {

  bcode = POST['Bcode'];
  query = "SELECT * FROM bank WHERE Bcode LIKE '" + bcode + "%'";
  con.query(query, function (err, result, fields) {   // Run the query
    if (err) throw err;
    console.log(result);
    var res_string = JSON.stringify(result);
    var res_json = JSON.parse(res_string);
    console.log(res_json);

    // Now build the response: table of results and form to do another query
    response_form = `<form action="search_data.html" method="GET">`;
    response_form += `<table border="1" cellpadding="1" cellspacing="1">`;
    response_form += `<td><B>Bank Code</td><td><B>Bank Name</td><td><B>Location</td></b>`;
    for (i in res_json) {
      response_form += `<tr><td> ${res_json[i].Bcode}</td>`;
      response_form += `<td> ${res_json[i].Name}</td>`;
      response_form += `<td> ${res_json[i].Location}</td></tr>`;
    }
    response_form += "</table>";
    response_form += `</form>`;
    response.send(response_form);
  });
}

function bank_name_DB(POST, response) {

  bname = POST['Bname'];
  query = "SELECT * FROM bank WHERE Name LIKE '" + bname + "%'";
  con.query(query, function (err, result, fields) {   // Run the query
    if (err) throw err;
    console.log(result);
    var res_string = JSON.stringify(result);
    var res_json = JSON.parse(res_string);
    console.log(res_json);

    // Now build the response: table of results and form to do another query
    response_form = `<form action="search_data.html" method="GET">`;
    response_form += `<table border="1" cellpadding="1" cellspacing="1">`;
    response_form += `<td><B>Bank Code</td><td><B>Bank Name</td><td><B>Location</td></b>`;
    for (i in res_json) {
      response_form += `<tr><td> ${res_json[i].Bcode}</td>`;
      response_form += `<td> ${res_json[i].Name}</td>`;
      response_form += `<td> ${res_json[i].Location}</td></tr>`;
    }
    response_form += "</table>";
    response_form += `</form>`;
    response.send(response_form);
  });
}

function check_type_DB(POST, response) {

  ctype = POST['Check_Type'];
  query = "SELECT * FROM Generated_Check WHERE Check_Type LIKE '" + ctype + "%'";
  con.query(query, function (err, result, fields) {   // Run the query
    if (err) throw err;
    console.log(result);
    var res_string = JSON.stringify(result);
    var res_json = JSON.parse(res_string);
    console.log(res_json);

    // Now build the response: table of results and form to do another query
    response_form = `<form action="search_data.html" method="GET">`;
    response_form += `<table border="1" cellpadding="1" cellspacing="1">`;
    response_form += `<td><B>Check Type</td><td><B>Check Number</td><td><B>Check Amount</td></b><td><B>Bank Name</td><td><B>Date</td><td><B>Verifier</td>`;
    for (i in res_json) {
      response_form += `<tr><td> ${res_json[i].Check_Type}</td>`;
      response_form += `<td> ${res_json[i].Check_Number}</td>`;
      response_form += `<td> ${res_json[i].Check_Amount}</td>`;
      response_form += `<td> ${res_json[i].Bank_Name}</td>`;
      response_form += `<td> ${res_json[i].Date}</td>`;
      response_form += `<td> ${res_json[i].Verifier}</td></tr>`;
    }
    response_form += "</table>";
    response_form += `</form>`;
    response.send(response_form);
  });
}

function check_number_DB(POST, response) {

  cnum = POST['Check_Number'];
  query = "SELECT * FROM Generated_Check WHERE Check_Number LIKE '" + cnum + "%' ORDER BY Check_Number";
  con.query(query, function (err, result, fields) {   // Run the query
    if (err) throw err;
    console.log(result);
    var res_string = JSON.stringify(result);
    var res_json = JSON.parse(res_string);
    console.log(res_json);

    // Now build the response: table of results and form to do another query
    response_form = `<form action="search_data.html" method="GET">`;
    response_form += `<table border="1" cellpadding="1" cellspacing="1">`;
    response_form += `<td><B>Check Type</td><td><B>Check Number</td><td><B>Check Amount</td></b><td><B>Bank Name</td><td><B>Date</td><td><B>Verifier</td>`;
    for (i in res_json) {
      response_form += `<tr><td> ${res_json[i].Check_Type}</td>`;
      response_form += `<td> ${res_json[i].Check_Number}</td>`;
      response_form += `<td> ${res_json[i].Check_Amount}</td>`;
      response_form += `<td> ${res_json[i].Bank_Name}</td>`;
      response_form += `<td> ${res_json[i].Date}</td>`;
      response_form += `<td> ${res_json[i].Verifier}</td></tr>`;
    }
    response_form += "</table>";
    response_form += `</form>`;
    response.send(response_form);
  });
}

function check_amount_DB(POST, response) {

  low = POST['low_amount'];      // Grab the parameters from the submitted form
  high = POST['high_amount'];

  switch (true) {
    case low && !high:
      query = "SELECT * FROM Generated_Check WHERE Check_Amount > " + low + " ORDER BY Check_Number";
      break;
    case high && !low:
      query = "SELECT * FROM Generated_Check WHERE Check_Amount < " + high + " ORDER BY Check_Number";
      break;
    default:
      query = "SELECT * FROM Generated_Check where Check_Amount > " + low + " and Check_Amount < " + high + " ORDER BY Check_Number";
  }

  con.query(query, function (err, result, fields) {   // Run the query
    if (err) throw err;
    console.log(low, high);
    var res_string = JSON.stringify(result);
    var res_json = JSON.parse(res_string);
    console.log(query);

    // Now build the response: table of results and form to do another query
    response_form = `<form action="search_data.html" method="GET">`;
    response_form += `<table border="1" cellpadding="1" cellspacing="1">`;
    response_form += `<td><B>Check Type</td><td><B>Check Number</td><td><B>Check Amount</td></b><td><B>Bank Name</td><td><B>Date</td><td><B>Verifier</td>`;
    for (i in res_json) {
      response_form += `<tr><td> ${res_json[i].Check_Type}</td>`;
      response_form += `<td> ${res_json[i].Check_Number}</td>`;
      response_form += `<td> ${res_json[i].Check_Amount}</td>`;
      response_form += `<td> ${res_json[i].Bank_Name}</td>`;
      response_form += `<td> ${res_json[i].Date}</td>`;
      response_form += `<td> ${res_json[i].Verifier}</td></tr>`;
    }
    response_form += "</table>";
    response_form += `</form>`;
    response.send(response_form);
  });
}

function check_date_DB(POST, response) {

  start = POST['start_date'];      // Grab the parameters from the submitted form
  end = POST['end_date'];
  console.log(start, end);
  switch (true) {
    case start && !end:
      query = "SELECT * FROM Generated_Check WHERE Date >= '" + start + "' ORDER BY Date";
      break;
    case end && !start:
      query = "SELECT * FROM Generated_Check WHERE Date <= '" + end + "' ORDER BY Date";
      break;
    default:
      query = "SELECT * FROM Generated_Check WHERE Date BETWEEN '" + start + "' and '" + end + "' ORDER BY Date";
  }

  con.query(query, function (err, result, fields) {   // Run the query
    if (err) throw err;
    console.log(start, end);
    var res_string = JSON.stringify(result);
    var res_json = JSON.parse(res_string);
    console.log(query);

    // Now build the response: table of results and form to do another query
    response_form = `<form action="search_data.html" method="GET">`;
    response_form += `<table border="1" cellpadding="1" cellspacing="1">`;
    response_form += `<td><B>Check Type</td><td><B>Check Number</td><td><B>Check Amount</td></b><td><B>Bank Name</td><td><B>Date</td><td><B>Verifier</td>`;
    for (i in res_json) {
      response_form += `<tr><td> ${res_json[i].Check_Type}</td>`;
      response_form += `<td> ${res_json[i].Check_Number}</td>`;
      response_form += `<td> ${res_json[i].Check_Amount}</td>`;
      response_form += `<td> ${res_json[i].Bank_Name}</td>`;
      response_form += `<td> ${res_json[i].Date}</td>`;
      response_form += `<td> ${res_json[i].Verifier}</td></tr>`;
    }
    response_form += "</table>";
    response_form += `</form>`;
    response.send(response_form);
  });
}

function update_employee_DB(POST, response) {

  empId = POST['Employee_ID'];
  fname = POST['Fname'];
  minit = POST['Minit'];
  lname = POST['Lname'];
  eAccNum = POST['E_acctnum'];
  address = POST['Address'];
  query = "INSERT INTO Employee VALUES ('" + empId + "', '" + fname + "', '" + minit + "',	'" + lname + "', '" + eAccNum + "', '" + address + "');";
  con.query(query, function (err, result, fields) {   // Run the query
    if (err) throw err;
    console.log(result);
    var res_string = JSON.stringify(result);
    var res_json = JSON.parse(res_string);
    console.log(res_json);

    response_form = `<form action="add_employee.html" method="GET">`;
    response_form += `Data Entered`;
    response_form += `</form>`;
    response.send(response_form);
  });
};

function update_client_DB(POST, response) {

  cId = POST['Client_ID'];
  cname = POST['Cname'];
  address = POST['Address'];
  query = "INSERT INTO client VALUES ('" + cId + "', '" + cname + "', '" + address + "');";
  con.query(query, function (err, result, fields) {   // Run the query
    if (err) throw err;
    console.log(result);
    var res_string = JSON.stringify(result);
    var res_json = JSON.parse(res_string);
    console.log(res_json);

    response_form = `<form action="add_client.html" method="GET">`;
    response_form += `Data Entered`;
    response_form += `</form>`;
    response.send(response_form);
  });
};

function update_check_DB(POST, response) {

  ctype = POST['Check_Type'];
  cnum = POST['Check_Number'];
  camount = POST['Check_Amount'];
  bname = POST['Bank_Name'];
  date = POST['Date'];
  verifier = POST['Verifier'];
  query = "INSERT INTO Generated_Check VALUES ('" + ctype + "', '" + cnum + "', '" + camount + "', '" + bname + "', '" + date + "', '" + verifier + "');";
  con.query(query, function (err, result, fields) {   // Run the query
    if (err) throw err;
    console.log(result);
    var res_string = JSON.stringify(result);
    var res_json = JSON.parse(res_string);
    console.log(res_json);

    response_form = `<form action="add_check.html" method="GET">`;
    response_form += `Data Entered`;
    response_form += `</form>`;
    response.send(response_form);
  });
};

function update_bank_DB(POST, response) {

  bcode = POST['Bcode'];
  bname = POST['Name'];
  location = POST['Location'];
  query = "INSERT INTO bank VALUES ('" + bcode + "', '" + bname + "', '" + location + "');";
  con.query(query, function (err, result, fields) {   // Run the query
    if (err) throw err;
    console.log(result);
    var res_string = JSON.stringify(result);
    var res_json = JSON.parse(res_string);
    console.log(res_json);

    response_form = `<form action="add_bank.html" method="GET">`;
    response_form += `Data Entered`;
    response_form += `</form>`;
    response.send(response_form);
  });
};

function view_DB(POST, response) {

  employee = POST['view_employees'];
  employee_query = "SELECT * FROM employee";

  //employee report
  employee.onclick =
    con.query(employee_query, function (err, result, fields) {   // Run the query
      if (err) throw err;
      console.log(result);
      var res_string = JSON.stringify(result);
      var res_json = JSON.parse(res_string);
      console.log(res_json);

      // Now build the response: table of results and form to do another query
      response_form = `<form action="search_data.html" method="GET">`;
      response_form += `<table border="1" cellpadding="1" cellspacing="1">`;
      response_form += `<td><B>Employee ID</td><td><B>First Name</td><td><B>Middle</td><td><B>Last Name</td><td><B>Employee Account</td><td><B>Address</td></b>`;
      for (i in res_json) {
        response_form += `<tr><td> ${res_json[i].Employee_ID}</td>`;
        response_form += `<td> ${res_json[i].Fname}</td>`;
        response_form += `<td> ${res_json[i].Minit}</td>`;
        response_form += `<td> ${res_json[i].Lname}</td>`;
        response_form += `<td> ${res_json[i].E_acctnum}</td>`;
        response_form += `<td> ${res_json[i].Address}</td></tr>`;
      }
      response_form += "</table>";
      response_form += `</form>`;
      response.send(response_form);
    });

};

function view_DB2(POST, response) {

  client = POST['view_clients'];
  client_query = "SELECT * FROM client";

  //employee report
  client.onclick =
    con.query(client_query, function (err, result, fields) {   // Run the query
      if (err) throw err;
      console.log(result);
      var res_string = JSON.stringify(result);
      var res_json = JSON.parse(res_string);
      console.log(res_json);

      // Now build the response: table of results and form to do another query
      response_form = `<form action="search_data.html" method="GET">`;
      response_form += `<table border="1" cellpadding="1" cellspacing="1">`;
      response_form += `<td><B>Client ID</td><td><B>Client Name</td><td><B>Address</td></b>`;
      for (i in res_json) {
        response_form += `<tr><td> ${res_json[i].Client_ID}</td>`;
        response_form += `<td> ${res_json[i].Cname}</td>`;
        response_form += `<td> ${res_json[i].Address}</td></tr>`;
      }
      response_form += "</table>";
      response_form += `</form>`;
      response.send(response_form);
    });

};

function view_DB3(POST, response) {

  bank = POST['view_banks'];
  bank_query = "SELECT * FROM bank";

  //bank report
  bank.onclick =
    con.query(bank_query, function (err, result, fields) {   // Run the query
      if (err) throw err;
      console.log(result);
      var res_string = JSON.stringify(result);
      var res_json = JSON.parse(res_string);
      console.log(res_json);

      // Now build the response: table of results and form to do another query
      response_form = `<form action="search_data.html" method="GET">`;
      response_form += `<table border="1" cellpadding="1" cellspacing="1">`;
      response_form += `<td><B>Bank Code</td><td><B>Name</td><td><B>Location</td></b>`;
      for (i in res_json) {
        response_form += `<tr><td> ${res_json[i].Bcode}</td>`;
        response_form += `<td> ${res_json[i].Name}</td>`;
        response_form += `<td> ${res_json[i].Location}</td></tr>`;
      }
      response_form += "</table>";
      response_form += `</form>`;
      response.send(response_form);
    });
};

function view_DB4(POST, response) {

  check = POST['view_checks'];
  check_query = "SELECT * FROM generated_check";

  //bank report
  check.onclick =
    con.query(check_query, function (err, result, fields) {   // Run the query
      if (err) throw err;
      console.log(result);
      var res_string = JSON.stringify(result);
      var res_json = JSON.parse(res_string);
      console.log(res_json);

      // Now build the response: table of results and form to do another query
      response_form = `<form action="search_data.html" method="GET">`;
      response_form += `<table border="1" cellpadding="1" cellspacing="1">`;
      response_form += `<td><B>Check Type</td><td><B>Check Number</td><td><B>Check Amount</td><td><B>Bank Name</td><td><B>Check Date</td><td><B>Verifier</td></b>`;
      for (i in res_json) {
        response_form += `<tr><td> ${res_json[i].Check_Type}</td>`;
        response_form += `<td> ${res_json[i].Check_Number}</td>`;
        response_form += `<td> ${res_json[i].Check_Amount}</td>`;
        response_form += `<td> ${res_json[i].Bank_Name}</td>`;
        response_form += `<td> ${res_json[i].Date}</td>`;
        response_form += `<td> ${res_json[i].Verifier}</td></tr>`;
      }
      response_form += "</table>";
      response_form += `</form>`;
      response.send(response_form);
    });
};

function count_employee(POST, response) {

  employee = POST['employee_count'];
  employee_query = "SELECT COUNT(*) AS ecount FROM employee";

  //employee report
  employee.onclick =
    con.query(employee_query, function (err, result, fields) {   // Run the query
      if (err) throw err;
      console.log(result);
      var res_string = JSON.stringify(result);
      var res_json = JSON.parse(res_string);
      console.log(res_json);

      // Now build the response: table of results and form to do another query
      response_form = `<form action="count_employee.html" method="GET">`;
      response_form += `<h1 style="color: white; margin: 0px 0px">${res_json[0].ecount}</h1>`;
      response_form += `</form>`;
      response.send(response_form);
    });

};

function count_client(POST, response) {

  client = POST['count_client'];
  client_query = "SELECT COUNT(*) AS ccount FROM client";

  //employee report
  client.onclick =
    con.query(client_query, function (err, result, fields) {   // Run the query
      if (err) throw err;
      console.log(result);
      var res_string = JSON.stringify(result);
      var res_json = JSON.parse(res_string);
      console.log(res_json);

      // Now build the response: table of results and form to do another query
      response_form = `<form action="count_client.html" method="GET">`;
      response_form += `<h1 style="color: white; margin: 0px 0px">${res_json[0].ccount}</h1>`;
      response_form += `</form>`;
      response.send(response_form);
    });

};

function count_bank(POST, response) {

  bank = POST['count_bank'];
  bank_query = "SELECT COUNT(*) AS bcount FROM cashed_check WHERE Status = 'Flagged'";

  //employee report
  bank.onclick =
    con.query(bank_query, function (err, result, fields) {   // Run the query
      if (err) throw err;
      console.log(result);
      var res_string = JSON.stringify(result);
      var res_json = JSON.parse(res_string);
      console.log(res_json);

      // Now build the response: table of results and form to do another query
      response_form = `<form action="count_bank.html" method="GET">`;
      if (res_json[0].bcount == 0) {

      } else {
      response_form = `<script>alert("${res_json[0].bcount} Flagged Checks need resolved!")</script>`;
      };
      response_form += `<h1 style="color: white; margin: 0px 0px;"><div class="blink">${res_json[0].bcount}</div></h1>`;
      response_form += `</form>`;
      response.send(response_form);
    });

};

function count_check(POST, response) {

  check = POST['count_check'];
  check_query = "SELECT COUNT(*) AS chcount FROM Generated_Check";

  //employee report
  check.onclick =
    con.query(check_query, function (err, result, fields) {   // Run the query
      if (err) throw err;
      console.log(result);
      var res_string = JSON.stringify(result);
      var res_json = JSON.parse(res_string);
      console.log(res_json);

      // Now build the response: table of results and form to do another query
      response_form = `<form action="count_check.html" method="GET">`;
      response_form += `<h1 style="color: white; margin: 0px 0px">${res_json[0].chcount}</h1>`;
      response_form += `</form>`;
      response.send(response_form);
    });

};

function flagged(POST, response) {

  flaggedC = POST['flagged'];
  flagged_query = "SELECT C.* FROM cashed_check C WHERE NOT EXISTS (SELECT G.Check_Number FROM generated_check G WHERE C.Check_Number = G.Check_Number)";

  //bank report
  flaggedC.onclick =
    con.query(flagged_query, function (err, result, fields) {   // Run the query
      if (err) throw err;
      console.log(flagged_query);
      var res_string = JSON.stringify(result);
      var res_json = JSON.parse(res_string);
      //console.log(res_json);

      // Now build the response: table of results and form to do another query
      response_form = `<form action="flagged.html" method="GET">`;
      response_form += `<table border="1" cellpadding="1" cellspacing="1">`;
      response_form += `<td><B>Check Number</td><td><B>Check Amount</td><td><B>Bank Name</td><td><B>Check Date</td><td><B>Status</td></b>`;
      for (i in res_json) {
        response_form += `<tr><td> ${res_json[i].Check_Number}</td>`;
        response_form += `<td> ${res_json[i].Check_Amount}</td>`;
        response_form += `<td> ${res_json[i].Bank_Name}</td>`;
        response_form += `<td> ${res_json[i].Date}</td>`;
        response_form += `<td class="color" id=color${i}> ${res_json[i].Status}</td></tr>`;
        response_form += `<script>`;
        response_form += `    var color = document.getElementById('color${i}').innerText;`;
        response_form += `    if (color === 'Flagged') {`;
        response_form += `        document.getElementById("color${i}").style.backgroundColor = 'Red';`;
        response_form += `    } else if (color === 'Under Investigation') {`;
        response_form += `       document.getElementById("color${i}").style.backgroundColor = 'yellow';`;
        response_form += `    } else {`;
        response_form += `       document.getElementById("color${i}").style.backgroundColor = 'green';`;
        response_form += `    }; `;
        response_form += `</script>`;
      }


      response_form += "</table>";
      response_form += `</form>`;
      response.send(response_form);
    });
};

function upstatus(POST, response) {

  enter = POST['enter'];
  update = POST['update'];
  query = "UPDATE cashed_check SET Status = '" + update + "' WHERE Check_Number = '" + enter + "';";
  con.query(query, function (err, result, fields) {   // Run the query
    if (err) throw err;
    console.log(query);
    var res_string = JSON.stringify(result);
    var res_json = JSON.parse(res_string);
    //console.log(res_json);

    response_form = `<form action="upstatus.html" method="GET">`;
    response_form += `<script>alert("Updated"); window.location.href = "flagged_checks.html";</script>`;
    response_form += `</form>`;
    response.send(response_form);
  });
};

app.all('*', function (request, response, next) {
  console.log(request.method + ' to ' + request.path);
  next();
});

app.post("/process_employee_ID", function (request, response) {
  let POST = request.body;
  employee_id_DB(POST, response);
});

app.post("/process_employee_name", function (request, response) {
  let POST = request.body;
  employee_name_DB(POST, response);
});

app.post("/process_client_ID", function (request, response) {
  let POST = request.body;
  client_id_DB(POST, response);
});

app.post("/process_client_name", function (request, response) {
  let POST = request.body;
  client_name_DB(POST, response);
});

app.post("/process_bank_code", function (request, response) {
  let POST = request.body;
  bank_code_DB(POST, response);
});

app.post("/process_bank_name", function (request, response) {
  let POST = request.body;
  bank_name_DB(POST, response);
});

app.post("/process_check_type", function (request, response) {
  let POST = request.body;
  check_type_DB(POST, response);
});

app.post("/process_check_number", function (request, response) {
  let POST = request.body;
  check_number_DB(POST, response);
});

app.post("/process_check_date", function (request, response) {
  let POST = request.body;
  check_date_DB(POST, response);
});

app.post("/process_check_amount", function (request, response) {
  let POST = request.body;
  check_amount_DB(POST, response);
});

app.post("/update_employee_query", function (request, response) {
  let POST = request.body;
  update_employee_DB(POST, response);
});

app.post("/update_client_query", function (request, response) {
  let POST = request.body;
  update_client_DB(POST, response);
});

app.post("/update_check_query", function (request, response) {
  let POST = request.body;
  update_check_DB(POST, response);
});

app.post("/update_bank_query", function (request, response) {
  let POST = request.body;
  update_bank_DB(POST, response);
});

app.post("/view_query", function (request, response) {
  let POST = request.body;
  view_DB(POST, response);
});

app.post("/view_query2", function (request, response) {
  let POST = request.body;
  view_DB2(POST, response);
});

app.post("/view_query3", function (request, response) {
  let POST = request.body;
  view_DB3(POST, response);
});

app.post("/view_query4", function (request, response) {
  let POST = request.body;
  view_DB4(POST, response);
});

app.post("/count_employee", function (request, response) {
  let POST = request.body;
  count_employee(POST, response);
});

app.post("/count_client", function (request, response) {
  let POST = request.body;
  count_client(POST, response);
});

app.post("/count_bank", function (request, response) {
  let POST = request.body;
  count_bank(POST, response);
});

app.post("/count_check", function (request, response) {
  let POST = request.body;
  count_check(POST, response);
});

app.post("/flagged", function (request, response) {
  let POST = request.body;
  flagged(POST, response);
});

app.post("/update_status", function (request, response) {
  let POST = request.body;
  upstatus(POST, response);
});

app.listen(8080, () => console.log(`listening on port 8080`));