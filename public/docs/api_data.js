define({ "api": [
  {
    "type": "get",
    "url": "/data",
    "title": "Get all active users",
    "name": "Get_all_active_users_based_on_user_activity",
    "group": "Dashboard",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_type",
            "description": "<p>Used to redirect requests.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request E.g.:",
          "content": "{\n    \"request_type\": \"activeUsers\"\n\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Requires the request_type to redirect the request.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First Name Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Lsst Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "permissions",
            "description": "<p>permissions assigned to the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_login",
            "description": "<p>Last login of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n  \"data\": [\n  {\n    \"id\": 2,\n    \"first_name\": \"Rufus\",\n    \"last_name\": \"Mbugua\",\n    \"name\": \"Rufus Mbugua\",\n    \"email\": \"mbuguarufus@gmail.com\",\n    \"username\": \"\",\n    \"permissions\": [],\n    \"last_login\": \"2016-03-16 19:37:24\"\n  }\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DashboardController.php",
    "groupTitle": "Dashboard"
  },
  {
    "type": "get",
    "url": "/data",
    "title": "Get all transaction types agregated",
    "name": "Get_all_transaction_types_agregated_by_Transaction_type",
    "group": "Dashboard",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_type",
            "description": "<p>Used to redirect requests.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request E.g.:",
          "content": "{\n    \"request_type\": \"transactionsSummary\"\n\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Requires the request_type to redirect the request.</p>",
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n\"success\": {\n \"message\": \"3 Records found\",\n  \"data\": [\n    {\n      \"type\": \"general\",\n      \"transaction_count\": \"2\",\n      \"aggregate\": \"331600\",\n    },\n    {\n      \"type\": \"milestone\",\n      \"transaction_count\": \"1\",\n      \"aggregate\": \"300\",\n    },\n    {\n      \"type\": \"motor\",\n      \"transaction_count\": \"1\",\n      \"aggregate\": \"2400\",\n    }\n  ]\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DashboardController.php",
    "groupTitle": "Dashboard"
  },
  {
    "type": "get",
    "url": "/data",
    "title": "Get all transactions by status",
    "name": "Get_all_transactions_by_status",
    "group": "Dashboard",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_type",
            "description": "<p>Used to redirect requests.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Used Name of Transaction Type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request E.g.:",
          "content": "{\n    \"request_type\": \"transactionbystatus\",\n     \"name\" : \"pending\"\n\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Requires the request_type to redirect the request.</p>",
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"success\": {\n\"message\": \"Updated Transaction\",\n\"data\": [\n{\n \"id\": \"1\",\n \"title\": \"Sale of Motor Vehicle\",\n \"broker\": {\n   \"id\": 3,\n   \"first_name\": \"Collins\",\n   \"last_name\": \"Ojenge\",\n   \"name\": \"Collins Ojenge\",\n   \"email\": \"collinsojenge@gmail.com\",\n   \"avatar\": \"https://secure.gravatar.com/avatar/a9d797462715d4a035929c23dbabc506?s=200&r=g&d=identicon\"\n },\n \"shipping_costs\": \"1000\",\n \"shipping_method\": \"road\",\n \"inspection_period\": \"15\",\n \"currency\": \"USD\",\n \"total_units\": \"12\",\n \"item_cost\": \"200\",\n \"status\": {\n   \"id\": 2,\n   \"description\": \"Pending\"\n },\n \"seller\": {\n   \"id\": 2,\n   \"first_name\": \"Rufus\",\n   \"last_name\": \"Mbugua\",\n   \"name\": \"Rufus Mbugua\",\n   \"email\": \"mbuguarufus@gmail.com\",\n   \"avatar\": \"https://secure.gravatar.com/avatar/d09c9cc0c59f0b5684b6754be45f1db9?s=200&r=g&d=identicon\"\n },\n \"buyer\": {\n   \"id\": 1,\n   \"first_name\": \"Kelvin\",\n   \"last_name\": \"Mureithi\",\n   \"name\": \"Kelvin Mureithi\",\n   \"email\": \"kelvinmwas@gmail.com\",\n   \"avatar\": \"https://secure.gravatar.com/avatar/c52ce09ba28cb0e3e48c4711782b8cf2?s=200&r=g&d=identicon\"\n },\n \"shipper\": {\n   \"id\": 1,\n   \"first_name\": \"Kelvin\",\n   \"last_name\": \"Mureithi\",\n   \"name\": \"Kelvin Mureithi\",\n   \"email\": \"kelvinmwas@gmail.com\"\n },\n \"motor\": {\n   \"id\": \"1\",\n   \"transaction_id\": \"1\",\n   \"model\": \"\",\n   \"make\": \"\",\n   \"odometer\": \"\",\n   \"vin_no\": \"\",\n   \"notes\": \"\",\n   \"registration_number\": \"\",\n   \"registration_expiry\": \"0000-00-00\",\n   \"deleted_at\": null,\n   \"created_at\": \"2016-03-16 19:31:07\",\n   \"updated_at\": \"2016-03-16 19:31:07\"\n },\n \"item\": null,\n \"real-estate\": null,\n \"milestones\": null,\n \"is_accepted\": false,\n \"is_initiator\": true,\n \"accepted_on\": null,\n \"updated_at\": \"2016-03-16 19:31:07\",\n \"created_at\": \"2016-03-16 19:31:07\"\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DashboardController.php",
    "groupTitle": "Dashboard"
  },
  {
    "type": "get",
    "url": "/data",
    "title": "Get all transactions summarized",
    "name": "Get_all_transactions_summarized",
    "group": "Dashboard",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_type",
            "description": "<p>Used to redirect requests.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request E.g.:",
          "content": "{\n    \"request_type\": \"summaryByall\",\n    \"range\": \"monthly\"\n\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Requires the range to determine requested data time interval.</p>",
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n   {\n \"success\": {\n   \"message\": \"Records Found\",\n   \"data\": [\n     {\n       \"monthName\": \"October\",\n       \"TOTAL\": \"15000\",\n       \"transaction_status\": 2,\n       \"transactionCount\": 1,\n     \"is_accepted\": false,\n       \"is_initiator\": false,\n       \"status\": {\n         \"id\": 2,\n         \"name\": \"Pending\",\n         \"created_at\": \"2016-05-06 00:14:03\",\n         \"updated_at\": \"2016-05-06 00:14:03\"\n       }\n     },\n     {\n     \"monthName\": \"February\",\n       \"TOTAL\": \"16000\",\n       \"transaction_status\": 4,\n       \"transactionCount\": 1,\n       \"is_accepted\": false,\n       \"is_initiator\": false,\n       \"status\": {\n         \"id\": 4,\n         \"name\": \"Lapsed\",\n         \"created_at\": \"2016-05-06 00:14:04\",\n         \"updated_at\": \"2016-05-06 00:14:04\"\n       }\n     },\n     {\n       \"monthName\": \"March\",\n       \"TOTAL\": \"35000\",\n       \"transactionCount\": 1,\n       \"is_accepted\": false,\n       \"is_initiator\": false,\n       \"status\": {\n         \"id\": 3,\n         \"name\": \"Rejected\",\n         \"created_at\": \"2016-05-06 00:14:03\",\n         \"updated_at\": \"2016-05-06 00:14:03\"\n       }\n     },\n     {\n       \"monthName\": \"May\",\n       \"TOTAL\": \"69400\",\n       \"transaction_status\": 1,\n       \"transactionCount\": 2,\n       \"is_accepted\": false,\n       \"is_initiator\": false,\n       \"status\": {\n         \"id\": 1,\n         \"name\": \"Completed\",\n         \"created_at\": \"2016-05-06 00:14:03\",\n         \"updated_at\": \"2016-05-06 00:14:03\"\n       }\n     },\n     {\n       \"monthName\": \"May\",\n       \"TOTAL\": \"935000\",\n       \"transaction_status\": 3,\n       \"transactionCount\": 1,\n       \"is_accepted\": false,\n       \"is_initiator\": false,\n       \"status\": {\n         \"id\": 3,\n         \"name\": \"Rejected\",\n         \"created_at\": \"2016-05-06 00:14:03\",\n         \"updated_at\": \"2016-05-06 00:14:03\"\n       }\n     }\n   ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DashboardController.php",
    "groupTitle": "Dashboard"
  },
  {
    "type": "get",
    "url": "/data",
    "title": "Get all users initiating transactions by user type",
    "name": "Get_all_users_initiating_transactions_by_user_type",
    "group": "Dashboard",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_type",
            "description": "<p>Used to redirect requests.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request E.g.:",
          "content": "{\n    \"request_type\": \"initiatorSummary\"\n\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Requires the request_type to redirect the request.</p>",
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n\"success\": {\n \"message\": \"Transactions initiated\",\n  \"data\": [\n    {\n      \"Buyers\": \"8\",\n      \"Sellers\": \"2\",\n      \"Brokers\": \"5\"\n    }\n  ]\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DashboardController.php",
    "groupTitle": "Dashboard"
  },
  {
    "type": "get",
    "url": "/data",
    "title": "Get all user activity summary",
    "name": "Get_all_users_per_activities",
    "group": "Dashboard",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_type",
            "description": "<p>Used to redirect requests.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request E.g.:",
          "content": "{\n    \"request_type\": \"usersSummary\"\n\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Requires the request_type to redirect the request.</p>",
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n\"success\": {\n \"message\": \"Records found\",\n  \"data\": [\n    {\n      \"active\": \"8\",\n      \"inactive\": \"2\",\n      \"new\": \"5\",\n      \"flagged\": \"1\",\n    }\n  ]\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DashboardController.php",
    "groupTitle": "Dashboard"
  },
  {
    "type": "get",
    "url": "/data",
    "title": "Get Rates by Date range",
    "name": "Get_total_amounts_grouped_by_transaction_type",
    "group": "Dashboard",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_type",
            "description": "<p>Used to redirect requests.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "from",
            "description": "<p>Date from.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "to",
            "description": "<p>Date to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request E.g.:",
          "content": "{\n    \"request_type\": \"aggregate\",\n    \"from\": \"2016-03-01\",\n    \"to\": \"2016-03-16\"\n\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Requires If extra parameters .i.e. from to are not provided, defaults to now</p>",
    "success": {
      "examples": [
        {
          "title": "Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"success\": {\n  \"message\": \"2 Records found\",\n  \"data\": [\n    {\n      \"type\": \"general\",\n      \"aggregate\": \"331600\"\n    },\n    {\n      \"type\": \"motor\",\n      \"aggregate\": \"10225600\"\n    }\n  ]\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/DashboardController.php",
    "groupTitle": "Dashboard"
  },
  {
    "type": "get",
    "url": "api/access",
    "title": "Get Role Collection",
    "name": "Get_Role_Info",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_type",
            "description": "<p>Used to redirect requests i.e addNew.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request E.g.:",
          "content": "{\n    \"request_type\": \"all\",\n\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Requires the request_type to redirect the request.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the Role.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug Name of the Role.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Role.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "permissions",
            "description": "<p>permissions assigned to the Role.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response E.g.:",
          "content": "HTTP/1.1 200 OK\n\n      [{\n          \"data\": [\n              {\n                  \"id\": 1,\n                  \"slug\": \"admin\",\n                  \"name\": \"Administrator\",\n                  \"permissions\": {\n                      \"rate.update\": \"1\",\n                      \"rate.view\": \"1\",\n                      \"rate.create\": \"1\",\n                      \"rate.delete\": \"1\"\n                      }\n              }\n           ]\n       }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AccessController.php",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "api/access",
    "title": "Create a Role",
    "name": "Post_Role_Info",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_type",
            "description": "<p>Used to redirect requests i.e addNew.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>short-name or easy identifier for a Role.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of a Role.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request E.g.:",
          "content": "{\n    \"request_type\": \"addNew\",\n    \"slug\": \"Admin\",\n    \"name\": \"Administrator\"\n\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Requires the request_type to redirect the request.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the Role.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug Name of the Role.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Role.</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date of Creation of the Role.</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last time Record was updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response E.g.:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"success\":\n       {\n         \"message\": \"Role Administrator was created.\",\n            \"name\": \"Administrator\",\n            \"slug\": \"admin\",\n            \"updated_at\": \"2015-12-08 11:01:21\",\n            \"created_at\": \"2015-12-08 11:01:21\",\n            \"id\": 1\n       }\n    }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AccessController.php",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "api/access",
    "title": "Assign User Role",
    "name": "Post_Role_Info",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_type",
            "description": "<p>Used to redirect requests i.e addNew.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>short-name or easy identifier for a Role.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of a Role.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request E.g.:",
          "content": "{\n    \"request_type\": \"assignRole\",\n    \"id\": \"1\",\n    \"role_id\": \"1\"\n\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Requires the request_type to redirect the request.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the Role.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug Name of the Role.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Role.</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "created_at",
            "description": "<p>Date of Creation of the Role.</p>"
          },
          {
            "group": "Success 200",
            "type": "Timestamp",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last time Record was updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response E.g.:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"success\":\n       {\n         \"message\": \"Role Administrator was created.\",\n            \"name\": \"Administrator\",\n            \"slug\": \"admin\",\n            \"updated_at\": \"2015-12-08 11:01:21\",\n            \"created_at\": \"2015-12-08 11:01:21\",\n            \"id\": 1\n       }\n    }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AccessController.php",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "api/users",
    "title": "Change password",
    "name": "Change_password",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_type",
            "description": "<p>Used to redirect requests i.e change_password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>Users current password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users new password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>confirm new password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request E.g.:",
          "content": "{\n    \"request_type\": \"change_password\",\n    \"old_password\": \"secrets\",\n    \"password\": \"anothersecret\",\n    \"password_confirmation\": \"anothersecret\"\n\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Requires the request_type to redirect the request.</p>",
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "HTTP/1.1 200 OK\n     {\n     \"success\": {\n     \"message\": \"Your Password was changed.\"\n\n       }\n     }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UsersController.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/users/:id",
    "title": "Get User",
    "name": "Get_User_Info",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First Name Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Lsst Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "permissions",
            "description": "<p>permissions assigned to the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_login",
            "description": "<p>Last login of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response E.g.:",
          "content": "HTTP/1.1 200 OK\n\n      {\n          \"data\": [\n              {\n                  \"id\": 1,\n                  \"first_name\": \"John\",\n                  \"last_name\": \"Doe\",\n                  \"email\": \"johndoe@mail.com\",\n                  \"permissions\": {\n                      \"rate.update\": \"1\",\n                      \"rate.view\": \"1\",\n                      \"rate.create\": \"0\",\n                      \"rate.delete\": \"0\"\n                      }\n                   \"last_login\": \"2015-12-07 16:13:10\",\n              }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UsersController.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/users",
    "title": "Get User Collection",
    "name": "Get_Users_Info",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_type",
            "description": "<p>Used to redirect requests i.e addNew.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request E.g.:",
          "content": "{\n    \"request_type\": \"all\",\n\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Requires the request_type to redirect the request.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First Name Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Lsst Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "permissions",
            "description": "<p>permissions assigned to the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_login",
            "description": "<p>Last login of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response E.g.:",
          "content": "HTTP/1.1 200 OK\n\n      [{\n          \"data\": [\n              {\n                  \"id\": 1,\n                  \"first_name\": \"John\",\n                  \"last_name\": \"Doe\",\n                  \"email\": \"johndoe@mail.com\",\n                  \"permissions\": {\n                      \"rate.update\": \"1\",\n                      \"rate.view\": \"1\",\n                      \"rate.create\": \"0\",\n                      \"rate.delete\": \"0\"\n                      }\n                   \"last_login\": \"2015-12-07 16:13:10\",\n              }\n           ]\n       }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UsersController.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Sign In as an Existing User",
    "name": "SignIn",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_type",
            "description": "<p>Used to redirect requests i.e sign_in,sign_up.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request E.g.:",
          "content": "\n{\n    \"email\": \"johndoe@mail.com\",\n     \"password\": \"apassword\",\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First Name Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Lsst Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "permissions",
            "description": "<p>permissions assigned to the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_login",
            "description": "<p>Last login of User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token for User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": ":Response E.g.:",
          "content": "HTTP/1.1 200 OK\n{\n      \"user_id\": 2,\n      \"email\": \"johndoe@mail.com\",\n      \"permissions\":\n         {\n           \"rate.update\": \"0\",\n           \"rate.view\": \"1\",\n           \"rate.create\": \"0\",\n           \"rate.delete\": \"0\"\n         }\n      \"first_name\": \"John\",\n      \"last_name\": \"Doe\",\n      \"last_login\": {\n      \"date\": \"2015-12-08 12:13:54.000000\",\n      \"timezone_type\": 3,\n      \"timezone\": \"Africa/Nairobi\"\n  },\n      \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.aL6obrFQFe0tmJCSA-7lHS9gFg742QfQKLa7zTyyuq4...\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UsersController.php",
    "groupTitle": "Users"
  }
] });
